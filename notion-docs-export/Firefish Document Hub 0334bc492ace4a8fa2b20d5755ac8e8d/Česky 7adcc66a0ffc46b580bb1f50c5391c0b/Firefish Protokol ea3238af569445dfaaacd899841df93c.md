# Firefish Protokol

[Firefish Guide](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf.md)

[Video Guides](../Video%20Guides%20111cc99422708021a177c79a1815bb8b.md)

[Firefish Protocol](../Firefish%20Protocol%20dce0dc15d32f416d84a075ae6f04dbd4.md)

[FAQs](../FAQs%20c5cfabe806e14d1abf6245a88ef5119f.md)

[What’s New](../What%E2%80%99s%20New%203d042abe2a4c42c0a24d0641c9890382.md)

[Bitcoin: The Ultimate Collateral](../Bitcoin%20The%20Ultimate%20Collateral%20157cc994227080a69d2bdd98f91acfbc.md)

[Media](../Media%2091b0bc3bfda946d1a768ba5613259c64.md)

[Legal](../Legal%206b6c868fcfb74d2bb389c0aa744f9ece.md)

[Deutsch](../Deutsch%20604df8215dd449539ce8f1abab2aaa14.md)

[Italiano](../Italiano%2015acc994227080d397b6dff1bbe61c0c.md)

[Español](../Espan%CC%83ol%201a1cc994227080fdabcee7a36c3ae0e5.md)

[Česky](../C%CC%8Cesky%207adcc66a0ffc46b580bb1f50c5391c0b.md)

[繁體中文](../%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87%201a4cc9942270807d9706ef29c958c659.md)

**📩 [Contact Us](mailto:hello@firefish.io?subject=Hello%20Firefish)**

<aside>
🔥 Firefish protokol umožňuje bezpečné uložení bitcoinu pro peer-to-peer zajištěné úvěry, které jsou vypořádány ve fiat měně

</aside>

<aside>
🔥 Protokol využívá skriptovací jazyk bitcoinu a jeho vlastnosti, jako jsou schémata multi-signature a Partially Signed Bitcoin Transactions (PSBT)

</aside>

<aside>
🔥 Cílem protokolu je odstranit rizika a požadavky na důvěru ze vzájemné interakce mezi stranami

</aside>

### Subjekty Firefish protokolu

- **Dlužník**: Osoba nebo společnost, která vlastní bitcoin a potřebuje fiat likviditu.
- **Investor**: Osoba nebo společnost, která má k dispozici fiat likviditu a chce si vydělat úroky.
- **Likvidátor**: Subjekt najatý investorem, který v případě nesplnění závazků dlužníkem likviduje zajištění jménem investora. Investor může rovněž fungovat jako vlastní likvidátor.
- **Price oracle**: Oracle, který sleduje směnný kurz bitcoinu. Může být implementován jako důvěryhodná instituce, veřejný oracle nebo jako kombinace institucí a veřejných oraclů. Služby oraclů jsou v současné době zajišťovány společností Firefish.
- **Payment oracle:** Oracle, který potvrzuje, zda byla provedena platba ve fiat měně (např. splátka půjčky). Služby oraclů jsou v současné době zajišťovány společností Firefish.
- **Firefish:** Platforma, která spojuje dlužníky a věřitele a usnadňuje jejich bezpečnou interakci.

### Escrow kontrakt

Escrow kontrakt je ústřední částí protokolu Firefish. Umožňuje uzamknout bitcoinový kolaterál na specifickou adresu, přičemž další kroky s kolaterálem jsou možné pouze:

- Když jsou splněny určité podmínky (např. splacení půjčky)
- Specifickým způsobem (výstup kontraktu může být směřován pouze na předem určené adresy)

Escrow kontrakt lze schematicky znázornit následovně:

![001.png](../Firefish%20Protocol%20dce0dc15d32f416d84a075ae6f04dbd4/001.png)

První vrstva escrow kontraktu je transakce **tx_escrow**. Jejím vstupem je UTXO dlužníka (dlužníkovy bitcoiny) a jejím výstupem je 3-z-3 multisig, s klíči drženými:

- Price Oracle (Cenový Oracle)
- Payment Oracle (Platební Oracle)
- Dlužník (ephemeral key), B-EPH

Výstupem transakce **tx_escrow** je samotný escrow, kde jsou během trvání půjčky bitcoiny uzamčeny.

Druhá vrstva escrow kontraktu je reprezentována sadou částečně podepsaných transakcí (PSBTs), které umožňují výstup transakce **tx_escrow** utratit, tj. odemknout kolaterál a poslat ho na předem určenou adresu. K tomu dochází, když jsou splněny určité podmínky (např. splacení půjčky) a jsou k PSBT přidány chybějící podpisy.

Možné stavy escrow kontraktu, reprezentované jednotlivými PSBTs, jsou:

| Stav | PSBT | Popis | Chybějící podpis | Výstup (Output) |
| --- | --- | --- | --- | --- |
| Repayment | tx_repayment | Půjčka byla plně splacena k datu splatnosti | Payment Oracle | Borrower -B |
| Default | tx_default | Dlužník nesplatil půjčku | Payment Oracle | Liquidator |
| Liquidatoin   | tx_liquidation | Nedostatečná hodnota kolaterálu | Price Oracle, Payment Oracle | Liquidator |
| Cancellation   | tx_repayment | Věřitel neposkytl půjčené prostředky vůbec | Payment Oracle | Borrower -B |
| Recovery | tx_recover | Orákula nebo platforma nespolupracují nebo přestala existovat | žádné, používá se Timelock | Borrower -B |

<aside>
🔥 Dlužník používá v rámci protokolu dva typy klíčů: 1) B představuje klíčový pár plně kontrolovaný dlužníkem (např. uložený v hardwarové peněžence, typicky klíč k adrese, kterou dlužník zadá jako return adresu). Všechny výstupy z escrow určené dlužníkovi jsou směrovány na tento klíč. 2) Klíč B-EPH, který představuje efemérní klíčový pár vytvořený v aplikaci Firefish a používaný pro podepisování během nastavování kontraktu. Tyto klíče již po dokončení nastavení nejsou potřeba a jsou smazány.

</aside>

- Všechny PSBTs jsou určeny k tomu, aby byly předem podepsány předtím, než dlužník zveřejní transakci tx_escrow a escrow je financováno. To umožňuje dlužníkovi mít kontrolu nad všemi možnými způsoby, jakým může být escrow kontrakt utracen.
- Pro vytvoření transakce musíte znát její vstupy a výstupy.
- V tomto kontextu, pro sestavení tx_escrow a PSBTs, je nutné znát vstupy transakce tx_escrow, což jsou nevyužité UTXOs dlužníka, které si přeje použít jako kolaterál.

### Pre-fund kontrakt

Aby byl protokol Firefish praktický pro uživatele, kteří používají různé bitcoinové infrastruktury (hardware peněženky, softwarové peněženky, custody peněženky), používáme dodatečnou on-chain transakci ke konsolidaci a potvrzení UTXO, které budou použity k financování escrow kontraktu.

Tato dodatečná on-chain transakce, nazvaná tx_prefund, předchází transakci tx_escrow a lze ji schematicky znázornit následovně:

![002.png](../Firefish%20Protocol%20dce0dc15d32f416d84a075ae6f04dbd4/002.png)

Tato konstrukce usnadňuje uživatelům interakci s Firefish protokolem: uživatelé pošlou svůj bitcoinový kolaterál na specifickou adresu, A_prefund.

A_prefund představuje komplexní “spending” podmínky:

- 3-of-3 multisig (efemérní klíč uživatele B-EPH, cenový oracle, payment oracle)
- Podpis s privátním klíčem uživatele - B (uložený na vlastní infrastruktuře, typicky hardware peněženka)
- Podpis s efemérním klíčem uživatele B-EPH po určitém časovém zámku (timelock)

Multisig větev je použita v transakci tx_escrow, zatímco další dvě možnosti poskytují dodatečnou bezpečnost a snižují nutnou důvěru mezi stranami.

<aside>
🔥 Uvědomujeme si, že pre-fund kontrakt lze obejít a escrow může být potenciálně financováno přímo z infrastruktury peněženky uživatele. To by však vyžadovalo, aby uživatelé a jejich peněženky prováděli pokročilé operace, jako je kontrola mincí, export XPUB nebo sady UTXO. Přímou integrací s populárními (hardware) peněženkami mohou uživatelé mít přímý přístup k escrow bez ohrožení uživatelské zkušenosti.

</aside>

Schéma Firefish protokolu, Pre-fund a Escrow kontraktů:

![003.png](../Deutsch%20604df8215dd449539ce8f1abab2aaa14/Firefish-Protokoll%20159cc9942270807b8d67f29dccea5ac3/003.png)

### Aplikace Firefish

Firefish protokol je navržen tak, aby minimalizoval riziko a snížil potřebu vzájemné důvěry mezi stranami. Aby mohli uživatelé plně využít bezpečnost pre-fund a escrow kontraktů, musí být schopni vytvářet adresy a transakce nebo ověřit, že byly správně implementovány podle protokolu.

Aby byl protokol přístupný uživatelům s různou úrovní technických dovedností a s různými peněženkami, byla vyvinuta Firefish aplikace. Jedná se o speciální bitcoinovou peněženku, která zahrnuje následující funkce:

- Aplikace je open source software, který může uživatel zkompilovat a spustit na svém vlastním zařízení (desktop nebo v rámci webového prohlížeče).
- Aplikace je schopná vytvářet komplexní adresy a transakce podle Firefish protokolu.
- Aplikace generuje efemérní páry klíčů, podepisuje transakce a ukládá potřebná data (např. PSBT).

### Proces

Níže uvádíme zjednodušený proces nastavení escrow kontraktu a průběh trvání úvěru:

1. Účastníci protokolu si bezpečně vymění potřebné údaje (jako jsou podrobnosti o úvěru) a veřejné klíče.
2. Pomocí Firefish aplikace generuje dlužník A_prefund (a odpovídající skript pro uzamčení prostředků).
3. Dlužník odešle bitcoinové zajištění na A_prefund ze své vlastní peněženky.
4. Pomocí Firefish aplikace dlužník vytvoří tx_escrow a PSBTs a přidá své vlastní podpisy k těmto PSBTs.
5. Po kontrole podepíší Orakly tx_escrow a PSBTs v souladu s protokolem.
6. Dlužník nyní může ověřit, zda jsou všechny transakce a podpisy přítomny. Po ověření podepíše tx_escrow.
7. Dlužník zruší B-EPH klíč a zajistí, že možnosti výběru z escrow budou omezeny pouze na možnosti definované pomocí PSBTs.
8. Escrow kontrakt je nyní řádně nastaven.
9. Pokud během trvání úvěru nastane událost (například likvidace), Orakly přidají chybějící podpis k PSBT a pošlou ji do sítě.

### Klíčové výhody protokolu Firefish

- Protokol má **deterministický charakter**. Prostředky mohou být odeslány pouze na adresu dlužníka nebo likvidátora, nikoliv na jiný subjekt.
- Věřitel **nemusí vlastnit kryptografický materiál** nebo jinak interagovat s bitcoinovou sítí. To umožňuje také nebitcoinovým subjektům využívat platformu Firefish.
- Pokud by orákly v jakékoliv fázi přestaly spolupracovat, může dlužník po vypršení časového zámku bitcoin **vybrat zpět na svou vlastní adresu**.
- Dlužník musí být online a interagovat s platformou pouze během fáze nastavení kontraktu. **Po tomto procesu již nemusí být online**, podepisovat další transakce nebo udržovat klíče v online prostředí.
- Interakce dlužníka s protokolem může být **zjednodušena na dva kroky**: 1) zadej svou “návratovou adresu“, 2) odešli zajištění na danou adresu. 
Složitější úkoly, jako podepisování PSBT, jsou zpracovány aplikací Firefish. Tato aplikace bude plně open-source a ideálně by měla být kompilována na straně dlužníka.
- Díky jednoduché interakci může Firefish využívat nejen majitelé **hardwarových peněženek**, ale i uživatelé **Multi-Party Computation (MPC)** peněženek (instituce) nebo dokonce custodiální řešení (což však není doporučováno).

### Potenciální nevýhody protokolu Firefish

- Stejně jako u každého jiného systému kryptoúvěrů je nutná určitá míra důvěry v oracles, které poskytují data v rámci platformy Firefish. Domníváme se však, že tuto potřebu důvěry lze na úrovni implementace minimalizovat (např. decentralizací cenového orákla, použitím DLC nebo anonymizačních technik využívaných payment orraclem).
- Smlouva nemůže být vypovězena, ani když se věřitel a dlužník na tom dohodnou bez účasti oráklů.
- Komplexita navrhovaného řešení a skutečnost, že výhody bezpečnosti a obchodu nemusí být okamžitě zřejmé.
- Věřitel musí mít určitou důvěru v likvidátora (tj. že po likvidaci bitcoinu vrátí finanční prostředky). To lze například minimalizovat pomocí zajištění od likvidátora.

← [Zpátky](../C%CC%8Cesky%207adcc66a0ffc46b580bb1f50c5391c0b.md)