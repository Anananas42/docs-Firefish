# Firefish Schritt-für-Schritt-Anleitung

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

# 🪜 Firefish Schritt-für-Schritt-Anleitung

Firefish bietet die folgenden Arbeitsabläufe:

- **Firefish Borrow** - ermöglicht es Kreditnehmern, Barkredite zu erhalten und dabei Bitcoin als Sicherheit zu verwenden
- **Firefish Invest** - ermöglicht es Anlegern, Zinsen auf ihre Investitionen zu erhalten, indem sie Mittel für Bitcoin-unterstützte Kredite bereitstellen

### Kreditaufnahme & Bitcoin hinterlegen

- **Firefish Borrow** ermöglicht es dir als Kreditnehmer, Bargeldkredite zu erhalten, während du Bitcoin als Sicherheit hinterlegst.
- Um deinen Kredit abzusichern, musst du deine Bitcoin an eine dafür vorgesehene Multi-Signatur-Treuhandadresse (escrow) überweisen. Auf dieses Treuhandkonto kann nur auf zwei Arten zugegriffen werden: Entweder werden die Bitcoin zurück an deine Wallet überwiesen (z.B. wenn du den Kredit zurückzahlst) oder an die Adresse des Liquidators gesendet (z.B. wenn du den Kredit nicht bis zum Fälligkeitsdatum zurückzahlst).
- Damit die Sicherheit des Kredits sowohl für dich als auch für den Investor gewährleistet ist, muss der Wert der hinterlegten Bitcoin stets den Wert des Kredits übersteigen. **Das erforderliche anfängliche Beleihungsverhältnis (Loan-To-Value, LTV) beträgt 50%**, was bedeutet, dass der Wert der Sicherheit doppelt so hoch ist wie der Kredit.
- Sollte der Wert deiner Bitcoin aufgrund eines erheblichen Kursrückgangs nahe an den Wert des Kredits fallen, werden deine Bitcoin auf dem offenen Markt verkauft, und der Erlös wird zur Rückzahlung des Kredits verwendet. Dieser Prozess wird als Liquidation bezeichnet. Der aktuelle Liquidationswert ist auf ein Beleihungsverhältnis von 95% festgelegt. Fällt der Wert deiner Sicherheit auf 95% des Kreditbetrags, wird eine Liquidation ausgelöst, um die Interessen des Kreditgebers zu schützen.
- Du hast die Möglichkeit, weitere Bitcoin zur Absicherung hinzuzufügen, um eine sichere Marge aufrechtzuerhalten und eine Liquidation zu verhindern. Wenn du den Kredit vorzeitig zurückzahlen kannst, entfällt das Liquidationsrisiko vollständig.
- IIm äußerst unwahrscheinlichen Fall eines vollständigen Ausfalls der Firefish-Infrastruktur steht dir eine Textdatei mit einer „Wiederherstellungstransaktion“ (recovery transaction) zur Verfügung, die es dir als Kreditnehmer ermöglicht, deine Bitcoin aus der Treuhand freizugeben. In einem solchen Szenario kannst du einen Monat nach Ablauf des Kredits die Funktion „Transaktion übertragen“ (broadcast transaction) auf einem Standard-Blockchain-Explorer wie Mempool.space verwenden, um deine Bitcoin zu entsperren und an deine Rücksendeadresse zu senden. Du kannst die dafür notwendige Textdatei während des Einrichtungsprozesses der Treuhand oder in der Detailansicht deiner laufenden Kredite herunterladen.

### 🪜 Firefish Borrow Schritt-für-Schritt-Anleitung

1. Wenn du daran interessiert bist, gegen deine Bitcoin Bargeld zu leihen, dann wähle im Menü "**Leihen**" (Borrow) aus und gehe auf "**Kredit anfordern**" (Request a loan).
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled.png)
    
2. Wähle den **Darlehenstyp:** Mit einem **Standarddarlehen** (Standard Loan) kannst du alle Darlehensparameter anpassen, einschließlich deines bevorzugten Zinssatzes. Deine Darlehensanfrage wird anschließend im Marktplatz veröffentlicht und an relevante Investoren zur Vermittlung gesendet. Ein **Sofortdarlehen** (Instant Loan) ermöglicht es dir, sofort Bargeld zu einem festen Zinssatz zu leihen, ohne auf einen Investor warten zu müssen.
    
    Fülle die Details aus: Gib die gewünschte **Darlehenssumme**, die **Währung**, die **Laufzeit** und deinen bevorzugten **Zinssatz** (in % p.a.) ein, falls du ein Standarddarlehen wählst.
    
    Das Element „**Zusammenfassung der Darlehensanfrage**“ berechnet den **fälligen Betrag** sowie die Details zur benötigten Bitcoin-Menge für das Geschäft.
    
    Die "**Netzwerkgebühr**" (Network fee) ist eine Blockchain-Gebühr, die für die Abwicklung der Transaktion erforderlich ist, die Bitcoin in die Treuhand sperrt, und für die Transaktion, die Bitcoin entsperrt und es bei Rückzahlung des Kredits an den Kreditnehmer zurückgibt. Die Gebühr wird als das Doppelte der aktuellen Blockchain-Gebühren berechnet.
    
    ![image.png](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/image.png)
    
3. Deine Kreditanfrage erscheint nun unter dem Reiter „**Meine Kreditanfragen**“ (My loan requests). Wenn du deine Anfrage stornieren möchtest, klicke einfach auf die Schaltfläche „**Abbrechen**“ (Cancel).
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%201.png)
    
4. Investoren, die ein Investitionsinteresse entsprechend deinen Darlehenspräferenzen (d. h. Betrag, Zinssatz und Laufzeit) eingereicht haben, erhalten eine E-Mail-Benachrichtigung und haben die Möglichkeit, das Angebot anzunehmen, und deine Anfrage erscheint ebenfalls im **Kreditmarktplatz**.
5. Sobald du mit einem Investor verbunden wurdest, wirst du aufgefordert, das Angebot „**Anzunehmen**“ (Accept) oder „**Abzulehnen**“ (Reject).
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%202.png)
    
6. Als Nächstes musst du die Details der Vereinbarung und die **Allgemeinen** **Geschäftsbedingungen** sowie die **Kredit- und** **Sicherheitsvereinbarung** akzeptieren.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%203.png)
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/86465a14-f9ce-4102-a8a0-25dbe11258da.png)
    
7. Danach führst du den Einrichtungsprozess für die **Bitcoin-Treuhand** durch, um deine Sicherheit zu hinterlegen.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%204.png)
    
8. Aus Sicherheitsgründen wirst du zunächst aufgefordert, dein aktuelles **Passwort** für die [firefish.io](http://firefish.io)-app zu bestätigen.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/529b9d86-3b8f-4ae7-bf17-272686e06e3d.png)
    
9. Gib anschließend deine **Bitcoin-Rücksendeadresse** (Your bitcoin return address) ein. Diese Adresse wird verwendet, um deine Sicherheit bei Fälligkeit des Kredits zurückzugeben. 
**Bitte beachte, dass diese Adresse während der gesamten Laufzeit des Kredits nicht geändert werden kann!**
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%205.png)
    
10. Du kannst dann mit der **Bitcoin-Überweisung** fortfahren und entweder den eingebetteten QR-Code oder die unten angezeigte Bitcoin-Adresse (Bitcoin funding address) verwenden. 
Wenn du die Bitcoin-Adresse kopierst und einfügst, stelle bitte sicher, dass du den genauen Betrag an Bitcoin überweist, der im Feld „**Bitcoin-Betrag**“ (Bitcoin amount) angezeigt wird.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/46223e5e-9702-45c6-b261-e5319d9b5fde.png)
    
11. Nachdem deine Bitcoin-Transaktion erfolgreich abgeschlossen wurde, werden die nächsten Schritte im Einrichtungsprozess der Treuhand von den **Orakeln** durchgeführt.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/3d06ffdd-9ab5-44a5-9a06-381aa8c307e6.png)
    
12. Sobald die Orakel ihre Aufgaben abgeschlossen haben, erhältst du eine Benachrichtigung von Firefish und musst den Prozess abschließen, indem du auf „**Setup abschließen**“ (Complete setup) klickst.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/12cf1aa3-8515-413e-8082-58c692a34bd4.png)
    
13. Nach Abschluss der Einrichtung erhält der Investor eine Benachrichtigung, um mit der Banküberweisung fortzufahren und die Zahlung zu bestätigen.
14. Im letzten Schritt musst du bestätigen, dass du das Geld vom Investor erhalten hast. Klicke dafür auf die Schaltfläche „**Bestätigen**“ neben „**Zahlungsbestätigung**“ (Payment confirmation) in den Kredit-Details.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%206.png)
    
15. Aktiviere im Fenster zur Zahlungsbestätigung das Kontrollkästchen und klicke auf „**Geld bestätigen**“ (Confirm funds). Das dient als Nachweis für Firefish, dass die Gelder erfolgreich auf deinem Bankkonto eingegangen sind.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%207.png)
    
16. **Das war‘s!** In den Kredit-Details zu deinem jeweiligen Kredit findest du alle Informationen sowie einen Link zu den Kreditdokumenten und Bitcoin-Sicherheitsdetails und verschiedenen Aktionen, die im Menü „**Kreditaktionen**“ (Loan actions) verfügbar sind.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%208.png)
    
17. Eine Woche vor Fälligkeit des Kredits erhältst du Zugriff auf das Menü „**Überweisungsanweisungen**“ (Transfer instructions), das dir alle Rückzahlungsdetails zur Verfügung stellt, einschließlich der Bankverbindung des Investors und des zurückzuzahlenden Betrags. 2 Wochen, 1 Woche, 2 Tage und am Fälligkeitstag erhältst du eine Erinnerung per E-Mail, dass du den Kredit zurückzuzahlen musst. Diese Benachrichtigungen werden automatisch gesendet, bis du die Rückzahlung bestätigst.

    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/83cf6e19-6902-4632-820a-4668d195fd37.png)
    
    **FRÜHZEITIGE RÜCKZAHLUNG**: Du hast auch die Möglichkeit, deinen Kredit vor der Fälligkeit zurückzuzahlen. Wähle dazu die Option „**Frühzeitige Rückzahlung anfordern**“ (Request early repayment) im Menü „**Kreditaktionen**“.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/78a12c48-225b-4811-9c28-a07915e81ca9.png)
    
    Wir werden dann den Investors fragen, ob er die frühzeitige Rückzahlung deines Kredits ermöglichen will. Sobald er zustimmt, wirst du benachrichtigt und die Plattform führt dich durch den Rückzahlungsprozess.
    
18. Sobald du deinen **Kredit zurückgezahlt hast** (d.h. den fälligen Betrag per Banküberweisung an den Investor gesendet hast), kannst du die Rückzahlung im folgenden Fenster bestätigen, indem du auf „**Banküberweisung bestätigen**“ klickst.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/df9eca76-eea8-4109-9cc3-764e4483be2d.png)
    
19. Nach Bestätigung durch den Investor werden deine Bitcoin innerhalb der nächsten 72 Stunden an dich zurückgesendet und dein Kredit erfolgreich abgeschlossen.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%209.png)
    

### 📑 **Kreditaktionen** Menü (Loan Actions)

Das Menü „**Kreditaktionen**“ auf der Kreditkarte ermöglicht einen schnellen Zugriff auf wichtige Aktionen im Zusammenhang mit dem Kredit:

![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2010.png)

- **Kreditdokumente ansehen** – Zugriff auf den Kreditvertrag und die Kreditbestätigung
- **Rückgabeadresse anzeigen** - Zeigt die Bitcoin-Adresse an, an die Ihr Bitcoin gesendet wird, nachdem der Kredit zurückgezahlt wurde
- **Sicherheiten aufstocken** – Starte den Prozess zur Aufstockung deiner hinterlegten Bitcoin
- **Wiederherstellungstransaktion speichern** – Lade eine Textdatei der Bitcoin-Wiederherstellungstransaktion herunter. In einem äußerst unwahrscheinlichen Szenario eines vollständigen Zusammenbruchs der Firefish-Infrastruktur ermöglicht dir diese Transaktion (als Kreditnehmer), deine Bitcoin aus der Treuhand abzurufen. 
In einem solchen Szenario kannst du die Funktion „Transaktion senden“ in einem Standard-Blockchain-Explorer wie [Mempool.space](http://Mempool.space) verwenden, um einen Monat nach der Fälligkeit des Kredits deine Bitcoin zu entsperren und an deine Rücksendeadresse zu senden.
- **Frühzeitige Rückzahlung anfordern** – Reiche eine Anfrage ein, um den Kredit vor der Fälligkeit zurückzuzahlen
- **Fälligkeitsdatum zum Kalender hinzufügen** – Lade eine .ics-Datei herunter, um das Kreditfälligkeitsdatum in deinen Kalender zu importieren

### ⬆️ **Sicherheiten aufstocken** (Top-up collateral)

**Sicherheiten aufstocken** ist eine Funktion, die es dir ermöglicht, zusätzliche Bitcoin in deine Treuhand zu senden, falls du bereit bist, dein Loan-to-Value (LTV)-Verhältnis zu verbessern, zum Beispiel im Falle eines Margin Calls. 

![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2011.png)

***Bitte beachte, dass dies der einzige Weg ist, mehr Bitcoin als Sicherheit hinzuzufügen. Jeder andere Versuch, wie zum Beispiel das direkte Senden von mehr Bitcoin an die Treuhandadresse, würde zum Verlust deiner Bitcoin führen!***

Um mehr Bitcoin zu deinen Sicherheiten hinzuzufügen, wähle den Punkt „**Sicherheiten aufstocken**“ im Menü „**Kreditaktionen**“ in den Kredit-Details. Du wirst durch einen ähnlichen Prozess wie während der Treuhandeinrichtung geführt (ab Punkt 7 dieser Schritt-für-Schritt-Anleitung).

Nun kannst du einen beliebigen Bitcoin-Betrag zum Aufstocken eingeben, oder den empfohlenen Wert beibehalten, der automatisch berechnet wird, um dein LTV wieder auf 50 % zu bringen. Basierend auf deiner Eingabe berechnet das Menü „Aufstockungsbetrag“ (Top-up amount) deinen neuen Liquidationspreis, den Indikator für die Gesundheit der Sicherheiten sowie das neue LTV.

### Investieren

- **Firefish Invest** ermöglicht es Investoren, Einkommen zu erzielen, indem sie Mittel für Bitcoin-besicherte Kredite bereitstellen
- Um die Sicherheit deines Kredits zu gewährleisten, verlangen wir, dass der Kreditnehmer seine Bitcoin in einer speziellen Multi-Signatur-Treuhandadresse platziert. Du kannst die Aktivitäten auf dieser Treuhandadresse einfach mit einem öffentlichen Blockchain-Explorer verfolgen
- Deine Investition ist immer geschützt, da der Wert der Sicherheiten den Wert des Kredits übersteigt.
- Fällt der Wert der Bitcoin-Sicherheiten nahe an den Wert des Kredits (aufgrund eines Rückgangs des Bitcoin-Preises), werden die Sicherheiten auf dem offenen Markt verkauft und der Erlös verwendet, um deine Investition zurückzuzahlen. Dieser Prozess wird als Liquidation bezeichnet. Eine Liquidation kann auch eintreten, wenn der Kreditnehmer den Kredit am Fälligkeitstag nicht zurückzahlt.
- Du musst dir keine Sorgen machen, Bitcoin selbst zu handhaben, zu handeln oder zu tauschen. Du kannst dich entscheiden, einen vertrauenswürdigen Dritten, bekannt als der Liquidator, zu beauftragen, den Liquidationsprozess in deinem Namen zu handhaben. Wenn du jedoch mit Bitcoin vertraut bist, hast du die Möglichkeit, als dein eigener Liquidator zu fungieren.

### 🪜 Investieren Schritt-für-Schritt-Anleitung

Für Investoren gibt es zwei Methoden der Interaktion mit der Plattform, die unter dem Menü „**Investieren**“ verfügbar sind:

- **Loan Marketplace** - zeigt alle verfügbaren Angebote an, die noch nicht mit einem bestimmten Investor abgeglichen wurden. Investoren können jedes der verfügbaren Angebote auswählen und die Kreditanfrage annehmen.
- **Watchdog** - ein E-Mail-Benachrichtigungsdienst, der es Investoren ermöglicht, Investitionsmöglichkeiten direkt in ihrem Posteingang zu erhalten. Watchdog erlaubt es Investoren, ihre Präferenzen für Währungen, minimale und maximale Kreditbeträge, Zinssätze und Kreditlaufzeiten anzupassen.

*❗️**WICHTIG**: Investoren haben zwei Optionen für das Modell der Sicherheitenliquidation im Falle eines Ausfalls des Kreditnehmers (d.h. Nicht-Rückzahlung des Kredits) oder einer Preisliquidation (d.h. wenn der Wert der Bitcoin-Sicherheiten nicht mehr ausreicht):*

- ***Selbstliquidation -** Der Investor erhält die Bitcoin-Sicherheiten an seine festgelegte Liquidationsadresse.*
- ***Firefish-Liquidation** - Firefish verwaltet den Liquidationsprozess der Sicherheiten im Namen der Investoren, und die Investoren erhalten ihre Investition zurück in Bankwährung.*

*Bitte sieh dir den Abschnitt „**Liquidationspräferenzen**“ unten für weitere Details an.*

- **🏪 Investieren über den Loan Marketplace**
    
    Der Loan Marketplace listet alle Kreditanfragen auf, die noch nicht von einem der Investoren auf der Plattform beantwortet wurden und zur Ausführung verfügbar sind.
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2012.png)
    
    1. Wenn du an einem der gelisteten Angebote interessiert bist, wähle „**Investmentdetails**“ (Investment details). Du kannst das Angebot akzeptieren, indem du auf den Button „**Jetzt investieren**“ (Invest Now) klickst:
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2013.png)
        
    2. Im nächsten Schritt kannst du die Details des Deals überprüfen und die entsprechenden Kästchen ankreuzen, um den **Nutzungsbedingungen** und dem **Darlehens- und Sicherheitsvertrag** zuzustimmen. 
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2014.png)
        
    3. Sobald du die Details bestätigt hast, wird eine Benachrichtigung an den Kreditnehmer gesendet, um die Kreditdetails von seiner Seite zu bestätigen und das Bitcoin-Sicherheitsgut zu hinterlegen. Dein Deal wird als „**Investition ausstehend**“ (Pending Investment) gekennzeichnet.
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/5acda541-7d54-4ccf-9497-9af845fa4573.png)
        
    4. Im nächsten Schritt hinterlegt der Kreditnehmer seine Bitcoin als Sicherheit. Sobald der Prozess, der einige Tage dauern kann, abgeschlossen ist, wirst du benachrichtigt und aufgefordert, die Gelder auf das Bankkonto des Kreditnehmers zu überweisen. Die Details für die Überweisung findest du im Abschnitt „**Banküberweisung** / **Gelder überweisen**“ (Bank Transfer / Transfer Funds) in den Kredit-Details.
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2015.png)
        
    5. Sobald du die Geldüberweisung ausgeführt hast, musst du „**Ich bestätige**“ (I confirm) auswählen und auf „**Banküberweisung bestätigen**“ klicken.  
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2016.png)
        
    6. Schließlich bestätigt der Kreditnehmer, dass er die Gelder erhalten hat, und dein Deal wird aktiv.
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2017.png)
        
    7. Bei Fälligkeit hast du Zugriff auf das Menü „**Rückzahlung bestätigen**“ (Confirm return), das dir die Möglichkeit gibt zu bezeugen, dass der Kreditnehmer deine Investition mit den verdienten Zinsen (fälliger Betrag) zurückgezahlt hat. Sobald die Gelder eingegangen sind, kannst du die Rückzahlung bestätigen, indem du das Kästchen „**Ich bestätige**“ auswählst und auf „**Rückzahlung bestätigen**“ klickst.
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/504d038e-00e4-4ffc-b6c1-b4e6a52f4a08.png)
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2018.png)
        
    8. Deine Investition ist **erfolgreich abgeschlossen**!
    
- **🐕 Investieren über Watchdogs**
    
    Watchdog ist ein E-Mail-Benachrichtigungsdienst, der es Investoren ermöglicht, Investitionsmöglichkeiten direkt in ihrem Posteingang zu erhalten. Watchdog erlaubt es Investoren, ihre Präferenzen für Währungen, minimale und maximale Kreditbeträge, Zinssätze und Kreditlaufzeiten anzupassen.
    
    1. Um einen Watchdog zu erstellen, wähle „**Investieren / Meine Watchdogs**“ (Invest / My Watchdogs) und klicke auf den Button „**Watchdog erstellen**“ (Create watchdog).
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2019.png)
    
    ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2020.png)
    
    1. Wähle deine Präferenzen, wie minimalen und maximalen Investitionsbetrag, Währung, Kreditlaufzeiten und minimal akzeptablen Zinssatz in % p.a.
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2021.png)
        
    2. Ist dein Watchdog erstellt, kannst du ihn unter „**Meine Watchdogs**“ (My watchdogs) finden.
        
        ![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2022.png)
        
    3. Wenn ein Kreditnehmer eine neue Kreditanfrage einreicht, die deinen Präferenzen entspricht, erhältst du eine Benachrichtigung in deinem Posteingang und kannst das entsprechende Angebot annehmen oder ablehnen.
    Wenn ein neuer Kreditantrag von einem Kreditnehmer eingereicht wird, erhalten alle Investoren, deren Präferenzen mit den Parametern des Kreditantrags übereinstimmen, eine Benachrichtigung in ihrem E-Mail-Posteingang und können das Angebot aus dem Abschnitt „*Deine Watchdog Angebote*“ (Your current Watchdog offers) über dem Loan Marketplace annehmen.
        
        ![image.png](Firefish%20Schritt-fu%CC%88r-Schritt-Anleitung%20159cc99422708038a53ff0fadc1a5957/image.png)
        
    
    Sobald angenommen, folgst du denselben Schritten wie im oben genannten „Kredit-Marketplace“ (Loan Marketplace)-Leitfaden, beginnend mit Schritt Nummer 2.
    

### **🚨 Liquidationspräferenzen**

Die Liquidation ist ein Schutzprozess, der darauf ausgelegt ist, Investoren in zwei Szenarien zu schützen:

- **Ausfall** - wenn der Kreditnehmer seinen Kredit nicht zurückzahlt.
- **Preisliquidation** - wird ausgelöst, wenn der Bitcoin-Preis auf ein für jeden Deal festgelegtes „**Liquidationspreis**“-Niveau fällt. Die Schwelle für die Preisliquidation ist auf 95% des Loan-to-Value (LTV)-Verhältnisses festgelegt, berechnet als nomineller Betrag plus Zinsen im Vergleich zum tatsächlichen Wert der Bitcoin-Sicherheiten.

Es gibt zwei Arten von Liquidationsmethoden, die für Investoren verfügbar sind:

- **Selbstliquidation** - Investoren erhalten Bitcoin-Sicherheiten an ihre festgelegte Liquidationsadresse, die sie während des Deal-Einrichtungsprozesses angeben.
- **Firefish-Liquidation** - Firefish verwaltet den Liquidationsprozess der Sicherheiten im Namen der Investoren, und die Investoren erhalten ihre Investition zurück in Bankwährung. Dieser Modus ermöglicht es Investoren, sich keine Sorgen um die Handhabung kryptografischer Materialien, wie private Schlüssel oder um die Interaktion mit Börsen, machen zu müssen.

 

Die **Firefish-Liquidation** ist als **Standardoption** eingestellt. Wenn du stattdessen für jeden Deal die Selbstliquidation bevorzugst, navigiere bitte zu „**Mein Konto / Einstellungen**“ (My Account / Settings) und aktiviere die Option „**Selbstliquidation**“ (Self-liquidation):

![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2023.png)

Wenn „**Selbstliquidation**“ aktiviert ist, wirst du aufgefordert, deine Bitcoin-Liquidationsadresse anzugeben, wenn du deine Investition bestätigst:

![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2024.png)

Alternativ kannst du beim Bestätigen des Deals zurück zur Firefish-Liquidation wechseln, indem du den Button „**Ich möchte selbst liquidieren**“ (I want to self-liquidate) deaktivierst.

![Untitled](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf/Untitled%2025.png)

**HINWEIS:** Es ist **nicht** möglich, die Liquidationsmethode für laufende Deals und Deals, die sich im oder nach dem Stadium des Bitcoin-Sicherheitsgut-Sperrprozesses befinden, zu ändern.

### Mein Konto

Das Konto-Menü ist die zentrale Anlaufstelle zur Verwaltung deiner Kontoeinstellungen, einschließlich Kontostufe, Sicherheitseinstellungen, Liquidationspräferenzen und Affiliate-Informationen.

- **Kontostufen**
    
    Jeder Nutzer unterliegt einem spezifischen Deal-Limit, basierend auf der folgenden Konto-Stufenstruktur:
    
    - **ZERO** – Standardstufe, keine Kreditaufnahme oder Investition möglich
    - **BASIC** – Maximal 15.000 EUR oder 360.000 CZK pro Transaktion und 30.000 EUR insgesamt für alle aktiven Kredite eines Nutzers.
    - **INTERMEDIATE** – Maximal 50.000 EUR pro Monat und bis zu 150.000 EUR insgesamt für alle aktiven Kredite eines Nutzers.
    - **PRO** – Individuelle Limits basierend auf den Anforderungen des Nutzers für Kreditaufnahme oder Investitionen.
    
    Transaktionen über den festgelegten Limits sind auf der Plattform nicht möglich.
    
    Um ein Upgrade auf die BASIC- oder INTERMEDIATE-Stufe zu beantragen, gehe zu „Mein Konto /Kontostufen“ und wähle „Weiter“.
    
    Beachte, dass ein Upgrade auf INTERMEDIATE nur möglich ist, wenn du bereits auf BASIC aufgestuft wurdest.
    
- **Meine Daten**
    
    Im Menü „Meine Daten“ kannst du:
    
    - Deine persönlichen Informationen einsehen,
    - Deine E-Mail-Adresse ändern,
    - Bankkonten verwalten,
    - Deine USDC-Ethereum-Adresse verwalten.
    
- **Einstellungen**
    
    Das Einstellungsmenü bietet folgende Optionen:
    
    - **Zwei-Faktor-Authentifizierung (2FA)** – Aktivieren oder deaktivieren, um die Sicherheit deines Kontos zu erhöhen.
    - **Selbstliquidation** – Falls aktiviert, wird die Selbstliquidation als bevorzugte Methode zur Liquidation festgelegt. Beim Bestätigen einer Investition wirst du aufgefordert, deine Bitcoin-Liquidationsadresse anzugeben. Alternativ kannst du zur Firefish-Liquidation wechseln, die standardmäßig eingestellt ist.
    - **Passwort ändern** – Zurücksetzen deines Passworts für die Firefish-Plattform.
    - **Bevorzugte Sprache festlegen** – Auswahl deiner bevorzugten Sprache.
    
- **Affiliate Dashboard**
    
    Mit dem Firefish-Affiliate-Programm kannst du Bitcoin verdienen, indem du neue Freunde auf die Plattform einlädst. Du erhältst eine Provision von 0,5% auf alle Beträge, die geworbene Nutzer innerhalb ihres ersten Jahres nach der Registrierung entweder investieren oder als Kredit aufnehmen. Diese Provision wird dir in Bitcoin ausgezahlt.
    
    - Verdiene 0,5% des Betrags, den geworbene Nutzer innerhalb ihres ersten Jahres investieren oder leihen.
    - Kreditnehmer erhalten 30% Rabatt auf die Abschlussgebühr ihres ersten Kredits
    
- **Berichte**
    
    Im Menü „Berichte“ kannst du deine Kredit- und Investitionsdaten inklusive aller Transaktionsdetails im CSV-Format herunterladen.
    

← [Zurück](../Deutsch%20604df8215dd449539ce8f1abab2aaa14.md)