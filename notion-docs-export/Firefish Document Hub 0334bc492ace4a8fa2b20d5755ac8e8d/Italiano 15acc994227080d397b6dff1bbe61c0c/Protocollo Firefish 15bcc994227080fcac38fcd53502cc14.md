# Protocollo Firefish

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
🔥

Il protocollo Firefish consente il deposito di Bitcoin come garanzia per prestiti peer-to-peer regolati in valuta corrente.

</aside>

<aside>
🔥

Il protocollo utilizza le capacità di scripting di bitcoin, come gli schemi multi-firma e le Partially Signed Bitcoin Transactions (PSBT).

</aside>

<aside>
🔥

L'obiettivo del protocollo è quello di eliminare i rischi e i requisiti di fiducia dall'interazione tra le parti.

</aside>

### **Soggetti del protocollo Firefish**

- **Beneficiario:** Un individuo o un'entità che possiede bitcoin e necessità di liquidità in moneta corrente.
- **Investitore:** Un individuo o un'entità che dispone di un eccesso di liquidità in moneta corrente e desidera investirla per guadagnare interessi.
- **Liquidatore:** Un soggetto incaricato dall'Investitore di liquidare la garanzia a suo nome nel caso in cui il Beneficiario non adempia ai propri obblighi. L'Investitore può anche agire in prima persona come liquidatore.
- **Oracolo del Prezzo:** Un oracolo che attesta il tasso di cambio di bitcoin. Può essere implementato come un'istituzione fidata, un oracolo pubblico o la sintesi di un'insieme di istituzioni e oracoli pubblici. L‘Oracolo del Prezzo è attualmente operato da Firefish.
- **Oracolo di Pagamento:** Un oracolo che attesta se è stato effettuato o meno un pagamento in denaro (ad esempio, il rimborso di un prestito). L'Oracolo di Pagamento è attualmente gestito da Firefish.
- **Firefish:** Una piattaforma che mette in contatto Beneficiari e Investitori e ne facilita l'interazione sicura.

### **Contratto di vincolo della garanzia**

Il contratto di vincolo della garanzia (escrow contract) è una parte centrale del protocollo Firefish. Permette di depositare la garanzia in bitcoin su un indirizzo specifico, limitando ulteriori azioni su di essa:

- Al verificarsi di determinate condizioni (come, ad esempio, il rimborso del prestito)
- In modo specifico (esempio: le transazioni in uscita possono essere indirizzate solo verso indirizzi predeterminati)

Il contratto di vincolo della garanzia può essere rappresentato schematicamente come segue:

![image.png](Protocollo%20Firefish%2015bcc994227080fcac38fcd53502cc14/image.png)

Il primo livello del contratto è la transazione $tx_{escrow}$. Il suo input è l'UTXO del Beneficiario (bitcoin del Beneficiario) e il suo output è un 3-of-3 multisig, con chiavi detenute da:

- Oracolo del Prezzo
- Oracolo dei Pagamenti
- Beneficiario (chiave effimera), $B-EPH$

L'output della transazione $tx_{escrow}$ rappresenta la garanzia vera e propria, ovvero dove i bitcoin vengono conservati durante il prestito.

Il secondo livello del contratto escrow è rappresentato da un insieme di transazioni parzialmente firmate ($PSBT$, Partially Signed Bitcoin Transactions) che consentono di spendere l'output di $tx_{escrow}$, ovvero di sbloccare la garanzia e inviarla a un indirizzo predeterminato. Ciò avviene quando vengono soddisfatte determinate condizioni (come il rimborso del prestito) e le firme mancanti vengono aggiunte a una transazione $PSBT$.

I possibili stati del contratto di vincolo della garanzia, rappresentati dalle varie $PSBT$, sono:

| **Stato del contratto** | **PSBT utilizzata** | **Descrizione** | **Firma mancante** | **Output
(Destinatario)** |
| --- | --- | --- | --- | --- |
| Rimborso | $tx_{repayment}$ | Prestito interamente rimborsato alla scadenza | Oracolo dei Pagamenti | Beneficiario $B$ |
| Predefinito | $tx_{default}$ | Il Beneficiario non ha rimborsato | Oracolo dei Pagamenti | Liquidatore $LIQ$ |
| Liquidazione | $tx_{liquidation}$ | Valore della garanzia insufficiente | Oracolo dei Prezzo, Oracolo dei Pagamenti | Liquidatore $LIQ$ |
| Cancellazione | $tx_{repayment}$ | L'Investitore non ha fornito alcun finanziamento | Oracolo dei Pagamenti | Beneficiario $B$ |
| Recupero | $tx_{recover}$ | Se gli Oracoli o la piattaforma non collaborano o cessano di esistere, il Beneficiario può recuperare la garanzia dopo un determinato periodo di tempo senza interagire con le altre parti. | Nessuna. 
Viene utilizzato il timelock. | Beneficiario $B$ |

<aside>
🔥

Il Beneficiario utilizza due tipi di chiavi all'interno del protocollo: 

1. $B$: coppia di chiavi completamente controllata dal Beneficiario (ad esempio memorizzata in un portafoglio hardware). Tutti gli output del contratto designati per il Beneficiario vengono diretti qui. 
2. $B-EPH$, coppia di chiavi effimere create nell'app Firefish e utilizzate per la firma durante la configurazione del contratto. Le chiavi non sono necessarie al termine della configurazione e vengono eliminate.
</aside>

- Tutti le transazioni PSBT devono essere pre-firmate prima che la transazione $tx_{escrow}$ venga trasmessa dal Beneficiario e che la garanzia venga depositata. Ciò consente al Beneficiario di avere il controllo su tutti i possibili modi in cui il contratto consente di spendere la garanzia.
- Al fine di costruire una transazione, è necessario conoscerne gli ingressi (input) e le uscite (output).
- In questo contesto, per costruire la transazione $tx_{escrow}$ e le transazioni PSBT, è necessario conoscere gli input del $tx_{escrow}$, che sono gli UTXO non spesi del Beneficiario che desidera utilizzare come garanzia.

### **Contratto di prefinanziamento**

Per rendere la cosa più pratica per i Beneficiari che utilizzano diverse infrastrutture bitcoin (portafogli hardware, portafogli software, portafogli di deposito), proponiamo di utilizzare un'ulteriore transazione blockchain per consolidare e riconoscere gli UTXO che saranno utilizzati per finanziare il contratto di vincolo della garanzia.

La transazione extra sulla catena, chiamata $tx_{prefund}$, precede la transazione $tx_{escrow}$ e può essere schematizzata come segue:

![image.png](Protocollo%20Firefish%2015bcc994227080fcac38fcd53502cc14/image%201.png)

Questo approccio facilita l'interazione dei Beneficiari con il protocollo Firefish: essi inviano la loro garanzia in bitcoin a un indirizzo specifico, $A_{prefund}$.

$A_{prefund}$ rappresenta una condizione di spesa complessa:

- 3-of-3 multisig (chiave effimera del Beneficiario $B-EPH$, Oracolo dei Prezzo, Oracolo dei Pagamenti)
- firma con la chiave privata del Beneficiario - $B$ (memorizzata sulla propria infrastruttura, in genere un portafoglio hardware)
- firma con la chiave effimera $B-EPH$ del Beneficiario dopo un determinato intervallo di tempo

Il ramo multisig viene utilizzato nella transazione $tx_{escrow}$, mentre le altre due opzioni forniscono una sicurezza aggiuntiva e riducono la fiducia richiesta tra le parti.

<aside>
🔥

Siamo consapevoli che il contratto di prefinanziamento potrebbe essere evitato e che il contratto di vincolo della garanzia potrebbe essere finanziato direttamente dai vari portafoglio del Beneficiario. Tuttavia, ciò richiederebbe agli utenti e ai loro portafogli di eseguire operazioni avanzate come il controllo delle monete, l'esportazione di XPUB o di set UTXO. Integrandosi direttamente con i portafogli (hardware) più diffusi, gli utenti possono accedere direttamente alla garanzia.

</aside>

Protocollo Firefish: prefinanziamento (prefund) e vincolo della garanzia (escrow):

![image.png](Protocollo%20Firefish%2015bcc994227080fcac38fcd53502cc14/image%202.png)

### **App Firefish**

Il protocollo Firefish è progettato per minimizzare il rischio e ridurre la necessità di fiducia reciproca tra le parti. Per beneficiare appieno della sicurezza dei contratti di prefinanziamento e vincolo della garanzia, i Beneficiari devono essere in grado di costruire indirizzi e transazioni o di verificare che siano stati implementati correttamente secondo il protocollo.

Per rendere il protocollo accessibile ai Beneficiari con diverse competenze tecniche e che utilizzano portafogli diversi, è stata sviluppata l'App Firefish. Si tratta di un portafoglio bitcoin per uno scopo specifico con le seguenti caratteristiche:

- l'App è un software open source che può essere compilato ed eseguito dal Beneficiario sul proprio hardware (desktop o all'interno di un browser web);
- l'App è in grado di costruire indirizzi e transazioni complesse secondo il protocollo Firefish;
- l'App genera coppie di chiavi effimere, firma le transazioni e memorizza i dati necessari (come ad esempio le transazioni $PSBT$).

### **Il processo**

Di seguito è riportata la procedura semplificata per la costituzione della garanzia e la durata del prestito.

1. I partecipanti al protocollo si scambiano in modo sicuro i dati necessari (come i dettagli del prestito) e le chiavi pubbliche.
2. Utilizzando l'App Firefish, il Beneficiario genera $A_{prefund}$ (e il relativo script di chiusura).
3. Il Beneficiario invia il collaterale in bitcoin ad $A_{prefund}$ utilizzando il proprio portafoglio.
4. Utilizzando l'App Firefish, il Beneficiario costruisce la transazione $tx_{escrow}$ e le transazioni $PSBT$ e aggiunge le proprie firme alle $PSBT$.
5. Dopo la verifica, gli Oracoli firmano la transazione $tx_{escrow}$ e le transazioni $PBST$ secondo il protocollo.
6. Il Beneficiario può ora verificare che tutte le transazioni e le firme siano state effettuate. Dopo la verifica, firma $tx_{escrow}$.
7. Il Beneficiario scarta la chiave $B-EPH$, assicurando che le opzioni di spesa della garanzia siano limitate a quelle definite dalle transazioni $PSBT$.
8. La garanzia è stata creata correttamente.
9. Quando si verifica un evento durante la vita del prestito (come la liquidazione), l'Oracolo coinvolto aggiunge la firma mancante necessaria alla transazione $PSBT$ e la trasmette alla rete.

### **Vantaggi principali del protocollo Firefish**

- Il contratto di vincolo della garanzia ha una natura "deterministica". La garanzia può essere spesa solo all'indirizzo del Beneficiario o del Liquidatore, ma non verso altri soggetti.
- L'Investitore non deve possedere alcun materiale crittografico o interagire in altro modo con la rete Bitcoin. Ciò consente alle entità che non sono native di Bitcoin di utilizzare la piattaforma Firefish.
- Il Beneficiario deve essere online e interagire con la piattaforma solo durante la fase di impostazione del contratto di vincolo della garanzia. In seguito, non è più necessario firmare nient'altro o tenere le chiavi online.
- Se gli Oracoli smettono di collaborare durante una qualsiasi fase del prestito, il Beneficiario può inviare i Bitcoin posti in garanzia al proprio indirizzo di ritorno dopo la scadenza del timelock.
- L'interazione del Beneficiario con il protocollo può essere ridotta a due semplici passaggi: 1) fornire il proprio indirizzo di ritorno, 2) inviare la garanzia ad un altro indirizzo. La complessità, come ad esempio la creazione e la firma delle transazioni $PSBT$, viene mascherata dall'applicazione Firefish. In futuro il codice dell'applicazione Firefish sarà completamente open-source e idealmente compilata dal lato del Beneficiario.
- Poiché l'interazione è così semplice, Firefish può essere utilizzato sia da proprietari di portafogli hardware che da portafogli Multi-Party Computation (MPC) (istituzioni) o addirittura da portafogli sotto custodia di terzi (cosa invero non raccomandata).

### **Potenziali svantaggi del protocollo Firefish**

- Come per qualsiasi altro sistema di prestito, è necessario un certo livello di fiducia del fatto che gli Oracoli che forniscano dati corretti all'applicazione Firefish. Tuttavia, riteniamo che questa necessità di fiducia possa essere ulteriormente ridotta nelle prossime implementazioni (ad esempio, decentralizzando l'oracolo dei prezzi, utilizzando tecniche di anonimizzazione per dall'oracolo dei pagamenti, …).
- Il contratto non può essere annullato anche se Investitore e Beneficiario sono d'accordo senza la cooperazione delle entità Oracolo.
- La complessità della soluzione proposta e il fatto che i vantaggi di sicurezza e di business potrebbero non essere immediatamente evidenti.
- L'Investitore deve avere un certo livello di fiducia nel liquidatore (cioè che questi restituirà i fondi dopo aver liquidato i bitcoin). Questo aspetto può essere minimizzato, ad esempio, fornendo una forma di garanzia da parte del liquidatore.

← [Indietro](../Italiano%2015acc994227080d397b6dff1bbe61c0c.md)