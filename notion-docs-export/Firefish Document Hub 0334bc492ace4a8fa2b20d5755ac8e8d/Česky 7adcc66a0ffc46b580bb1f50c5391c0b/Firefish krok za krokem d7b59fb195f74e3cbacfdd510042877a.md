# Firefish krok za krokem

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

# 🪜 Firefish krok za krokem

Platforma Firefish nabízí následující služby:

- **Firefish Borrow** - umožňuje dlužníkům získat hotovostní úvěry s použitím bitcoinu jako zajištění.
- **Firefish Invest** - umožňuje investorům získávat úroky ze svých investic poskytováním prostředků pro úvěry zabezpečené bitcoinem.

### Půjčování a uzamykání bitcoinu

- **Firefish Borrow** umožňuje dlužníkům získat hotovostní úvěry s použitím bitcoinu jako zajištění.
- Pro zajištění vašeho vyžadujeme poslání bitcoinu na určenou escrow adresu. Z téhle escrow adresy lze bitcoin utratit pouze dvěma způsoby: vrácení do peněženky dlužníka (např. při splacení úvěru) nebo převod na adresu likvidátora (např. pokud nebude úvěr do doby splatnosti splacen).
- Aby byl úvěr bezpečný pro dlužníka i pro investora, je důležité, aby hodnota zajištění vždy převyšovala hodnotu úvěru. **Požadovaný počáteční poměr (Loan-To-Value ratio) je 50 %, což znamená, že hodnota zajištění je dvojnásobná oproti hodnotě úvěru.**
- Pokud hodnota bitcoin kolaterálu klesne k hodnotě úvěru (kvůli významnému poklesu směnného kurzu bitcoinu), bude bitcoin prodán na trhu a bude použit ke splacení úvěru. Tento proces se nazývá likvidace. Aktuální úroveň likvidace je nastavena na 95 % poměru půjčka k hodnotě (LTV), což znamená, že pokud hodnota zajištění dosáhne 95% částky úvěru, bude zahájen proces likvidace, aby nebyly ohroženy zájmy investora.
- Je možné použít více bitcoinu jako zajištění, aby byla udržena bezpečná rezerva a zabránilo se likvidaci. Navíc, úvěr je možné předčasně splatit, čímž se eliminuje riziko likvidace.
- Ve vysoce nepravděpodobném scénáři úplného selhání infrastruktury Firefish má dlužník k dispozici textový soubor s „recovery“ transakcí, která mu umožňuje poslat si bitcoin z escrow adresy do své peněženky. V takovém scénáři může použít funkci "Broadcast transaction" na standardním blockchain exploreru, např. [Mempool.space](http://mempool.space/), měsíc po splatnosti úvěru, aby byl bitcoin odemknut a vrácen na return adresu.
Tuto transakci si může dlužník stáhnout během procesu nastavení escrow nebo později přímo na platformě u detailu úvěru.

### 🪜 Firefish Borrow krok za krokem

1. Pokud máš zájem o půjčení hotovosti proti svému bitcoinu, přejdi do menu ”**Borrow**“ a vyber možnost “**Request a loan**”.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled.png)
    
2. Dál si vyber typ půjčky. U **Standardní půjčky** si můžeš nastavit všechny parametry podle sebe, včetně úrokové sazby. Tvoje žádost se pak objeví na tržišti a pošle relevantním investorům k propojení. S **Okamžitou půjčkou** dostaneš peníze hned, s pevnou úrokovou sazbou, bez čekání na investora.
    
    Dál vyplň detaily o **částce**, kterou si chceš půjčit, **měně**, **době trvání půjčky** a **preferované úrokové sazbě** (% p.a.), pokud jde o Standardní půjčku.
    
    Prvek “**Loan request summary**“ vypočítá splatnou částku, stejně jako podrobnosti o množství bitcoinu potřebného pro uzavření takové půjčky. 
    ”**Network fee**“ je poplatek bitcoinové síti potřebný ke zpracování transakce, která zamyká bitcoin na escrow adrese a pro transakci, která odemyká bitcoin a vrací jej dlužníkovi po splacení půjčky. Poplatek je vypočítán jako dvojnásobek nedávných poplatků na blockchainu.
    
    ![image.png](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image.png)
    
3. Tvá žádost o půjčku se objeví na záložce “**My loan requests**”. Pokud si přeješ svou žádost zrušit, stačí kliknout na tlačítko ”**Cancel**”.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%201.png)
    
4. Investoři, kteří vyjádřili zájem o investici odpovídající tvým preferencím půjčky (tj. částka, úroková sazba a doba trvání), obdrží oznámení a budou mít možnost akceptovat nabídku do 24 hodin, po kterých se nabídka objeví v “**Loan Marketplace**” a stane se dostupnou všem investorům. Tvá žádost je také uvedena na Loan Marketplace.
5. Jakmile budeš spárován s investorem, budeš vyzván k akceptaci (”**Accept**”) nebo odmítnutí (”**Reject**”) nabídky.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%202.png)
    
6. Poté budeš pokračovat v **potvrzení** detailů úvěru a přijetí **Podmínek služby** a **Smlouvy o půjčce a zabezpečení**.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%203.png)
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/86465a14-f9ce-4102-a8a0-25dbe11258da.png)
    
7. Dále budeš pokračovat v procesu nastavení **bitcoin escrow**, který tě provede uzamknutím tvého bitcoinového kolaterálu.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%204.png)
    
8. Z bezpečnostních důvodů budeš vyzván k potvrzení svého **aktuálního hesla** na [firefish.io](http://firefish.io/).
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/529b9d86-3b8f-4ae7-bf17-272686e06e3d.png)
    
9. Dále zadej svou **bitcoinovou adresu** (”Bitcoin return address”). Tato adresa bude použita k vrácení tvého bitcoinového kolaterálu po splatnosti půjčky. 
**Vezmi prosím na vědomí, že tato adresa nemůže být během trvání půjčky změněna!**
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%205.png)
    
10. Poté můžeš pokračovat v **převodu bitcoinu**. Můžeš buď použít vložený QR kód, nebo bitcoinovou adresu (Bitcoin funding address) zobrazenou pod částkou bitcoinu. 
Pokud kopíruješ bitcoinovou adresu pro financování, ujisti se, že převedeš přesnou částku v bitcoinu, která je zobrazena v poli ”**Bitcoin amount**”. Můžeš poslat i více, a tím snížit LTV tohoto úvěru.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/46223e5e-9702-45c6-b261-e5319d9b5fde.png)
    
11. Po úspěšném dokončení tvé bitcoinové transakce budou další kroky v procesu nastavení Escrow provedeny pomocí **Oracles**. Tenhle proces trvá jenom pár sekund. 
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/3d06ffdd-9ab5-44a5-9a06-381aa8c307e6.png)
    
12. Jakmile Oracles dokončí své úkoly budeš vyzván k dokončení procesu kliknutím na tlačítko ”**Complete setup**”.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/12cf1aa3-8515-413e-8082-58c692a34bd4.png)
    
13. Po dokončení nastavení obdrží investor oznámení, aby pokračoval v bankovním převodu a potvrdil platbu.
14. Posledním krokem je potvrzení, že jsi od investora obdržel peníze. V takovém případě klikni na tlačítko ”**Confirm**” vedle ”**Payment confirmation**” na tvé kartě půjčky.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%206.png)
    
15. V okně potvrzení platby (Payment confirmation) zaškrtni políčko a klikni na ”**Confirm funds**”. Tím poskytneš Firefish důkaz o úspěšném příchodu finančních prostředků na tvůj bankovní účet.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%207.png)
    
16. **Hotovo!** Karta půjčky obsahuje všechny detaily o tvé půjčce, stejně jako odkaz na dokumenty půjčky a detaily bitcoinového kolaterálu a různé akce dostupné v menu “**Loan actions**”.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%208.png)
    
17. Týden před splatností se ti u úvěru objeví políčko ”**Transfer instructions**”, které ti poskytne všechny detaily o splacení, včetně bankovního účtu investora a částky k splacení. Dva týdny, týden, dva dny a v den splatnosti obdržíš e-mailové oznámení o nutnosti splatit půjčku. Tyto oznámení ti budou automaticky zasílána, dokud nepotvrdíš splacení.

    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/83cf6e19-6902-4632-820a-4668d195fd37.png)
    
    **PŘEDČASNÉ SPLÁCENÍ**: Máš také možnost splatit svou půjčku před splatností. K tomu prosím vyber možnost “**Request early repayment**” v menu “**Loan actions**”.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/78a12c48-225b-4811-9c28-a07915e81ca9.png)
    
    Poté budeme čekat na souhlas investora, že je připraven přijmout peníze a potvrdit přijetí. Jakmile souhlasí, obdržíš oznámení a platforma tě provede procesem splácení
    
18. Jakmile **splatíš svou půjčku** (tj. pošleš dlužnou částku investorovi bankovním převodem), můžeš splacení potvrdit v následujícím okně kliknutím na "**Confirm bank transfer**"
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/df9eca76-eea8-4109-9cc3-764e4483be2d.png)
    
19. Po potvrzení od investora ti bude tvůj bitcoin vrácen do 72 hodin a tvá půjčka bude úspěšně uzavřena.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%209.png)
    

### 📑 **Menu** “**Loan Actions”**

Menu Loan Actions na kartě půjčky umožňuje rychlý přístup k klíčovým akcím souvisejícím s půjčkou:

![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2010.png)

- **View loan documents** – přístup k smlouvě o půjčce a potvrzení půjčky
- **Show return address** – zobrazí Bitcoinovou adresu, na kterou bude váš Bitcoin odeslán po splacení půjčky
- **Top-up collateral** – zahájit proces doplnění zajištění bitcoinem
- **Save recovery transaction** – stáhnout textový soubor transakce pro obnovu bitcoinu. V mimořádně nepravděpodobném scénáři úplného selhání infrastruktury Firefish ti tato transakce umožní získat tvé bitcoiny z escrow.
V takovém scénáři můžeš použít funkci “Broadcast transaction” na standardním blockchainovém prohlížeči jako je [Mempool.space](http://mempool.space/), měsíc po splatnosti půjčky, aby byly tvé bitcoiny odemčeny a odeslány zpět na tvou návratovou adresu.
- **Request early repayment** – podat žádost o splacení půjčky před splatností
- **Add maturity event to calendar** – stáhnout .ics soubor pro import události splatnosti půjčky do tvého kalendáře

### ⬆️ **Funkce doplnění kolaterálu (Top-up collateral)**

Funkce doplnění kolaterálu ti umožňuje poslat další bitcoiny do tvého escrow, pokud si přeješ snížit svůj poměr půjčky k hodnotě úvěru (LTV), například v případě margin call.

![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2011.png)

***Měj na paměti, že toto je jediný způsob, jak přidat více bitcoinů do svého zajištění. Jakýkoli jiný přístup, například přímé posílání dalších bitcoinů na escrow adresu, by vedl ke ztrátě tvých bitcoinů!***

Chceš-li přidat více bitcoinů jako kolaterál, vyber položku "**Top-up collateral**" v menu akcí půjčky (”**Loan Actions**”) na kartě půjčky. Budeš proveden podobným procesem jako během fáze nastavení Escrow (bod 7 a další tohoto průvodce).

Kromě toho budeš moci zadat preferovanou částku bitcoinů pro doplnění nebo si můžeš ponechat doporučenou hodnotu, která je automaticky vypočítána, aby tvůj LTV byl znovu na úrovni 50 %. Na základě tvého zadání menu pro doplnění částky vypočítá tvou novou cenu pro likvidaci (”**New liquidation price**”), indikátor zdraví zajištění (”**New collateral health**”) a také nový poměr LTV.

### Investování

- **Firefish Invest** umožňuje investorům vydělávat poskytováním prostředků do půjček zajištěné bitcoinem.
- Abychom zajistili bezpečnost tvé půjčky, vyžadujeme, aby si dlužník umístil své bitcoiny na určenou escrow adresu. Aktivitu na této escrow adrese můžeš snadno sledovat pomocí veřejného blockchainového prohlížeče jako [Mempool.space](http://mempool.space/).
- Tvá investice je vždy chráněna, protože hodnota zajištění převyšuje hodnotu půjčky.
- Pokud hodnota bitcoinového kolaterálu klesne blízko hodnoty půjčky (kvůli poklesu ceny bitcoinu), kolaterál bude prodán na trhu a bude použit k zaplacení tvé investice. Tento proces se nazývá likvidace. Likvidace může nastat také v případě, že půjčující nesplatí půjčku v den splatnosti.
- Nemusíš se starat o manipulaci, obchodování nebo výměnu bitcoinů sám. Můžeš se rozhodnout použít důvěryhodnou třetí stranu, známou jako likvidátor, která za tebe zpracuje proces likvidace. Také máš možnost působit jako svůj vlastní likvidátor.

### 🪜 Investování krok za krokem

Pro investory existují dvě metody interakce s platformou, které jsou dostupné v menu “**Invest**“:

- **Loan Marketplace** - zobrazuje všechny dostupné nabídky, které ještě nebyly spárovány s konkrétním investorem. Investoři mohou vybrat kteroukoli z dostupných nabídek a přijmout tuto investici.
- **Watchdog** - služba e-mailových oznámení, která investorům umožňuje dostat upozornění na investiční příležitosti přímo do e-mailové schránky. Watchdog umožňuje investorům obdržet upozornění dle jejich preferencí (měny, minimální a maximální částky úvěrů, úrokové sazby a dobu trvání úvěru).

*❗️**DŮLEŽITÉ**: Investoři mají dvě možnosti modelu likvidace zajištění v případě selhání dlužníka (tj. nevrácení půjčky) nebo cenové likvidace (tj. když hodnota bitcoinového kolaterálu již není dostatečná):*

- ***Self-liquidation -** samolikvidace; investor obdrží bitcoin na svou určenou likvidační adresu.*
- ***Firefish-liquidation** - Firefish spravuje proces likvidace kolaterálu jménem investorů a investoři dostávají svou investici zpět na bankovní účet.*

*Pro další podrobnosti se prosím podívej do sekce „**Možnosti likvidace**“ níže.*

- **🏪 Investování pomocí Loan Marketplace**
    
    Loan Marketplace ukazuje všechny žádosti o úvěr, které ještě nebyly přijaty a jsou k dispozici pro investory.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2012.png)
    
    1. Pokud máš zájem o některou z uvedených nabídek, vyber možnost "**Investment details**". Nabídku můžeš akceptovat kliknutím na tlačítko "**Invest now**".
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2013.png)
        
    2. V dalším kroku si můžeš prohlédnout detaily nabídky a zaškrtnout příslušná políčka k souhlasu s **Podmínkami služby** a **Smlouvou o půjčce a zabezpečení**.
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2014.png)
        
    3. Jakmile potvrdíš detaily, bude odeslána notifikace dlužníkovi, aby potvrdil detaily půjčky na své straně a uložil bitcoin jako zajištění. Tvoje investice bude označen jako "**Pending investment**".
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/5acda541-7d54-4ccf-9497-9af845fa4573.png)
        
    4. V dalším kroku dlužník uloží svůj bitcoin jako kolaterál. Jakmile je tento proces, který může trvat několik dní, dokončen, dostaneš oznámení a budeš vyzván k převodu peněz na bankovní účet dlužníka. Detaily pro převod najdeš v sekci "**Bank transfer** **/ Transfer Funds**" v detailech půjčky.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2015.png)
    
    1. Jakmile provedeš převod peněz, musíš vybrat možnost "**I confirm…**" a kliknout na "**Confirm bank transfer**".
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2016.png)
        
    2. Nakonec dlužník potvrdí, že obdržel peníze, a tvá investice je aktivní.
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2017.png)
        
    3. Při splatnosti máš přístup k menu "**Confirm return**", které ti umožňuje ověřit, že dlužník vrátil tvoji investici i s úrokem (”**Amount due**”). Jakmile obdržíš peníze, můžeš potvrdit splacení zaškrtnutím možnosti "**I confirm…**" a kliknutím na "**Confirm repayment**".
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/504d038e-00e4-4ffc-b6c1-b4e6a52f4a08.png)
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2018.png)
        
    4. Tvoje investice je **úspěšně ukončena**!
    
- **🐕 Investování pomocí Watchdogs**
    
    Watchdog je služba e-mailových oznámení, která umožňuje dostávat notifikace o investičních příležitostech do e-mailové schránky. Watchdog umožňuje investorům filtrovat preference pro měny, minimální a maximální částky úvěrů, úrokové sazby a dobu trvání úvěrů.
    
    1. Pro vytvoření Watchdogu vyber ”**Invest** **/ My Watchdogs**” a klikni na tlačítko “**Create watchdog**”.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2019.png)
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2020.png)
    
    1. Vyber své preference, jako je minimální a maximální investiční částka, měna, doba trvání úvěru a minimální přijatelná úroková sazba v % p.a.
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2021.png)
        
    2. Jakmile je tvůj Watchdog vytvořen, najdeš ho pod “**My watchdogs**”.
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2022.png)
        
    3. Pokud dlužník podá novou žádost o úvěr, která odpovídá tvým preferencím, dostaneš oznámení do své e-mailové schránky a můžeš příslušnou nabídku přijmout nebo odmítnout.
    Všichni investoři, jejichž preference odpovídají parametrům žádosti o úvěr, obdrží oznámení ve své e-mailové schránce a mohou nabídku přijmout z sekce “**Your current Watchdog offers**” nad Loan Marketplace.
        
        ![image.png](Firefish%20krok%20za%20krokem%20d7b59fb195f74e3cbacfdd510042877a/image.png)
        
    
    Jakmile je nabídka přijata, postupuješ podle stejných kroků jako v případě “Loan Marketplace”, začínaje krokem číslo 2.
    

### **🚨 Možnosti likvidace**

Likvidace je ochranný proces navržený tak, aby chránil investory ve dvou scénářích:

- **Nesplacení** (”Default”) - pokud půjčující nevrátí svůj úvěr.
- **Cenová likvidace** (”Price liquidation”) - je aktivována, když cena bitcoinu klesne na pod stanovenou úroveň ("**Liquidation price**"). Hranice pro cenovou likvidaci je nastavena na 95 % poměru půjčky k hodnotě zástavy (LTV), který je vypočítán jako jmenovitá částka plus úroky ve srovnání s aktuální hodnotou bitcoinového kolaterálu.

Investoři mají k dispozici dva typy metod likvidace:

- **Self-liquidation** - samolikvidace; investoři obdrží bitcoinový kolaterál na svou určenou likvidační adresu, kterou uvedou během procesu nastavení obchodu.
- **Firefish-liquidation** - Firefish spravuje proces likvidace zajištění jménem investorů, a investoři obdrží svou investici zpět v bankovní měně. Tento režim umožňuje investorům, aby se nemuseli starat o manipulaci s kryptografickými materiály, jako jsou soukromé klíče, nebo o interakci s burzami.

 

**Firefish likvidace** je nastavena jako výchozí možnost. Pokud dáváš přednost samolikvidaci pro každý obchod, prosím, přejdi do “**My Account / Settings**” a aktivuj možnost “**Self-liquidation**”.

![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2023.png)

Pokud je aktivována samolikvidace, budeš vyzván k zadání své bitcoinové likvidační adresy, když potvrzuješ svou investici.

![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2024.png)

Alternativně můžeš při potvrzení obchodu přepnout zpět na likvidaci Firefish, když deaktivuješ tlačítko “**I want to self-liquidate**”.

![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2025.png)

**POZNÁMKA**: změnit metodu likvidace pro běžící obchody a obchody, které jsou ve fázi uzamčení bitcoinového kolaterálu nebo po ní **není možné**.

### **Můj účet**

“Můj účet” je centrální místo pro správu vašich předvoleb účtu, včetně úrovně uživatele, nastavení zabezpečení, preferencí likvidace a informací o afiliacích.

- **Úrovně účtů**
    
    ![image.png](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%202.png)
    
    Na každého uživatele se vztahuje specifický limitní systém na základě následujících úrovní účtů:
    
    - **ZERO** - Výchozí úroveň, žádné půjčky a úvěry nejsou k dispozici
    - **BASIC** - 15 000 EUR nebo 360 000 CZK na transakci a celkem 30 000 EUR na uživatele pro všechny aktivní půjčky
    - **INTERMEDIATE** - 50 000 EUR měsíčně a až 150 000 EUR celkem na uživatele pro všechny aktivní obchody
    - **PRO** - vlastní limity na základě vašich potřeb při půjčování nebo investování
    
    Platforma vám neumožní zpracovávat obchody nad stanovené limity.
    
    Pro povýšení na úroveň BASIC nebo INTERMEDIATE přejděte na ‘**Můj účet / Úrovně účtů**’ a vyberte ‘**Upgrade**’.
    
    Pro kvalifikaci na úroveň INTERMEDIATE je nutné nejprve povýšit na úroveň BASIC.
    
- **Moje údaje**
    
    ![image.png](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%203.png)
    
    Nabídka “Moje údaje” vám umožňuje:
    
    - Zkontrolovat vaše **osobní informace**
    - Změnit vaši **e-mailovou adresu**
    - Spravovat vaše **bankovní účty**
    - Spravovat vaši **USDC Ethereum adresu**
    
- **Nastavení**
    
    ![image.png](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%204.png)
    
    Nabídka ‘Nastavení’ obsahuje následující možnosti:
    
    - **Dvoufázové ověření** - povolit nebo zakázat 2FA ověřování pro zvýšenou bezpečnost účtu.
    - **Samolikvidace** - po zapnutí je **Samolikvidace** nastavena jako preferovaná metoda likvidace. Při potvrzení vaší investice budete vyzváni k poskytnutí vaší bitcoinové likvidační adresy. Alternativně můžete přepnout zpět na likvidaci Firefish při potvrzení obchodu. Upozorňujeme, že **likvidace Firefish** je nastavena jako **výchozí možnost**.
    - **Změnit heslo** - resetovat heslo na platformě Firefish.
    - **Nastavit preferovaný jazyk** - vyberte si svůj preferovaný jazyk.
    
- **Affiliate Dashboard**
    
    ![image.png](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%205.png)
    
    **Firefish Affiliate Program** umožňuje vydělávat bitcoiny za doporučení přátel. Za každou částku, kterou si vypůjčí nebo investuje registrovaný uživatel v prvním roce po registraci, získáte provizi 0,5 %. Tato provize bude vyplacena v bitcoinech.
    
    - Vydělejte 0,5 % z částky, kterou **vypůjčí** nebo **investuje** doporučený uživatel na platformě v prvním roce po registraci
    - Půjčovatelé získají 30 % slevy na poplatek za založení první půjčky.
    
- **Výpisy**
    
    ![image.png](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image%206.png)
    
    Nabídka ‘Výpisy’ vám umožňuje **stáhnout data o vašich půjčkách a investicích**, včetně všech detailů obchodů, ve formátu CSV.
    

← [Zpátky](../C%CC%8Cesky%207adcc66a0ffc46b580bb1f50c5391c0b.md)