# Firefish-Protokoll

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
🔥 Das Firefish-Protokoll ermöglicht die Treuhandverwahrung von Bitcoin für Peer-to-Peer-besicherte Kredite, die in einer Fiat-Währung abgewickelt werden.

</aside>

<aside>
🔥 Das Protokoll nutzt die Skripting-Fähigkeiten von Bitcoin, wie zum Beispiel Multi-Signature-Schemata und Partially Signed Bitcoin Transactions (PSBT).

</aside>

<aside>
🔥 Das Ziel des Protokolls ist es, Risiken und Vertrauensanforderungen aus der Interaktion zwischen den Parteien zu entfernen.

</aside>

### Subjekte des Firefish-Protokolls

- **Kreditnehmer**: Eine Person oder ein Unternehmen, das Bitcoin besitzt und Fiat-Liquidität benötigt.
- **Kreditgeber**: Eine Person oder ein Unternehmen, das überschüssige Fiat-Liquidität hat und Zinsen verdienen möchte.
- **Liquidator**: Eine vom Kreditgeber beauftragte Entität, die die Sicherheiten in seinem Namen liquidiert, falls der Kreditnehmer seine Verpflichtungen nicht erfüllt. Der Kreditgeber kann auch selbst als Liquidator agieren.
- **Preis-Orakel**: Ein Orakel, das den Wechselkurs von Bitcoin feststellt. Es kann als vertrauenswürdige Institution, als öffentliches Orakel oder als Zusammenschluss von Institutionen und öffentlichen Orakeln implementiert werden. Preis-Orakel wird derzeit von Firefish betrieben.
- **Zahlungs-Orakel**: Ein Orakel, das bestätigt, ob eine Fiat-Zahlung geleistet wurde (z. B. Kreditrückzahlung). Zahlungs-Orakel wird derzeit von Firefish betrieben.
- **Firefish:** Eine Plattform, die Kreditnehmer und Kreditgeber zusammenführt und ihre sichere Interaktion erleichtert.

### Treuhandvertrag

Der Treuhandvertrag (escrow contract) ist ein zentraler Bestandteil des Firefish-Protokolls. Er ermöglicht es, Bitcoin-Sicherheiten auf einer spezifischen Adresse zu sperren. Weitere Aktionen mit den Bitcoin-Sicherheiten sind nur möglich:

- Wenn bestimmte Bedingungen erfüllt sind (wie zum Beispiel die Kreditrückzahlung)
- Auf eine bestimmte Weise (der Vertragsoutput kann nur an vorher festgelegte Adressen gerichtet werden)

Der Treuhandvertrag kann schematisch wie folgt dargestellt werden:

![001.png](../Firefish%20Protocol%20dce0dc15d32f416d84a075ae6f04dbd4/001.png)

Die erste Ebene des Treuhandvertrags ist die **tx_escrow**-Transaktion. Ihr Input ist das UTXO des Kreditnehmers (Bitcoin des Kreditnehmers) und ihr Output ist eine 3-von-3-Multisig, bei der die Schlüssel von folgenden Parteien gehalten werden:

- Das Preis-Orakel
- Das Zahlungs-Orakel
- Der Kreditnehmer (ephemerer Schlüssel), B-EPH

Der Output der **tx_escrow**-Transaktion repräsentiert die Treuhand selbst. Hier werden die Bitcoin während des Kredits gehalten.

Die zweite Ebene des Treuhandvertrags wird durch eine Reihe von teilweise signierten Transaktionen (PSBTs) dargestellt, die es ermöglichen, den Output der **tx_escrow**-Transaktion auszugeben, d.h. die Sicherheiten zu entsperren und an eine vorher festgelegte Adresse zu senden. Dies geschieht, wenn bestimmte Bedingungen erfüllt sind (wie die Kreditrückzahlung) und die fehlenden Signaturen zu einer PSBT hinzugefügt werden.

Die möglichen Zustände des Treuhandvertrags, dargestellt durch einzelne PSBTs, sind:

| Vetragsstatus   | Verwendete PSBT | Beschreibung | Fehlende Signatur | Ausgabe an |
| --- | --- | --- | --- | --- |
| Rückzahlung   | tx_repayment | Vollständige Rückzahlung des Kredits zum Fälligkeitsdatum | Das Zahlungs-Orakel | Borrower -B |
| Zahlungsausfall   | tx_default | Kreditnehmer hat nicht zurückgezahlt   | Das Zahlungs-Orakel   | Liquidator |
| Liquidation   | tx_liquidation | Unzureichender Wert der Sicherheiten | Das Preis-Orakel, Das Zahlungs-Orakel | Liquidator |
| Stornierung   | tx_repayment | Der Kreditgeber hat den Kredit nicht bereitgestellt   | Das Zahlungs-Orakel   | Borrower -B |
| Wiederherstellung | tx_recover | Wenn die Orakel oder die Plattform nicht kooperieren oder nicht mehr existieren, kann der Kreditnehmer die Sicherheiten nach einer bestimmten Frist ohne Interaktion mit der anderen Partei zurückholen | keine, Timelock wird verwendet | Borrower -B |

<aside>
🔥 Der Kreditnehmer verwendet innerhalb des Protokolls zwei Arten von Schlüsseln: 1) B repräsentiert ein Schlüsselpaar, das vollständig vom Kreditnehmer kontrolliert wird (z.B. auf einem Hardware-Wallet gespeichert). Alle Ausgaben der Treuhand, die für den Kreditnehmer bestimmt sind, werden hierhin geleitet. 2) Schlüssel B-EPH, der ein ephemeres Schlüsselpaar darstellt, das in der Firefish-App erstellt und während der Vertragseinrichtung zum Signieren verwendet wird. Die Schlüssel werden nach Abschluss der Einrichtung nicht mehr benötigt und gelöscht.

</aside>

- Alle PSBTs sollen vorab unterzeichnet werden, bevor die tx_escrow-Transaktion vom Kreditnehmer gesendet und das Treuhandkonto finanziert wird. Dies ermöglicht es dem Kreditnehmer, die Kontrolle über alle Möglichkeiten zu haben, wie der Treuhandvertrag ausgegeben werden kann.
- Um eine Transaktion konstruieren zu können, muss man ihre Eingaben und Ausgaben kennen.
- In diesem Kontext muss man, um die tx_escrow und PSBTs zu konstruieren, die Eingaben der tx_escrow kennen, die die unverbrauchten UTXOs des Kreditnehmers sind, die er als Sicherheit verwenden möchte.

### Vorauszahlungsvertrag

Um es für Kreditnehmer, die eine Vielzahl von Bitcoin-Infrastrukturen nutzen (Hardware-Wallets, Software-Wallets, custodial Wallets), praktisch zu machen, schlagen wir eine zusätzliche On-Chain-Transaktion vor, um die UTXOs zu konsolidieren und zu bestätigen, die zur Finanzierung des Treuhandvertrags verwendet werden.

Die zusätzliche On-Chain-Transaktion, die als tx_prefund bezeichnet wird, geht der tx_escrow-Transaktion voraus und kann schematisch wie folgt dargestellt werden:

![002.png](../Firefish%20Protocol%20dce0dc15d32f416d84a075ae6f04dbd4/002.png)

Dieses Konstrukt erleichtert es den Kreditnehmern, mit dem Firefish-Protokoll zu interagieren: Sie senden ihre Bitcoin-Sicherheiten an eine spezifische Adresse, A_prefund.

A_prefund repräsentiert eine komplexe Ausgabenbedingung:

- 3-von-3-Multisig (ephemerer Schlüssel des Kreditnehmers B-EPH, Preis-Orakel, Zahlungs-Orakel)
- Unterschrift (Signature) mit dem privaten Schlüssel (private key) des Kreditnehmers - B (gespeichert auf der eigenen Infrastruktur, typischerweise einer Hardware-Wallet)
- Unterschrift mit dem ephemeren Schlüssel des Kreditnehmers B-EPH nach einer bestimmten Zeitsperre (timelock)

Der Multisig-Zweig wird in der tx_escrow-Transaktion verwendet, während die anderen beiden Optionen zusätzliche Sicherheit bieten und das erforderliche Vertrauen zwischen den Parteien reduzieren.

<aside>
🔥 Wir wissen, dass der Vorauszahlungsvertrag umgangen werden kann und die Treuhand direkt aus der Wallet-Infrastruktur des Kreditnehmers finanziert werden könnte. Dies würde jedoch erfordern, dass Benutzer und ihre Wallets fortgeschrittene Operationen wie Coin-Control, den Export von XPUB oder UTXO-Sets durchführen. Durch eine direkte Integration mit populären (Hardware-)Wallets könnten deren Benutzer möglicherweise direkt auf die Treuhand zugreifen, ohne das Benutzererlebnis zu beeinträchtigen.

</aside>

Firefish-Protokoll, Vorausfinanzierung und Treuhand:

![003.png](Firefish-Protokoll%20159cc9942270807b8d67f29dccea5ac3/003.png)

### Firefish App

Das Firefish-Protokoll ist darauf ausgelegt, Risiken zu minimieren und die Notwendigkeit gegenseitigen Vertrauens zwischen den Parteien zu reduzieren. Um vollständig von der Sicherheit der Vorausfinanzierungs- und Treuhandverträge zu profitieren, müssen Kreditnehmer in der Lage sein, Adressen und Transaktionen zu konstruieren oder zu überprüfen, dass diese gemäß dem Protokoll korrekt implementiert wurden.

Um das Protokoll für Kreditnehmer mit unterschiedlichen technischen Fähigkeiten und die Verwendung verschiedener Wallets zugänglich zu machen, wurde die Firefish App entwickelt. Dies ist eine spezielle Bitcoin-Wallet-Software, die folgende Funktionen umfasst:

- Die App ist Open-Source-Software, die vom Kreditnehmer auf eigener Hardware (Desktop oder innerhalb eines Webbrowsers) kompiliert und ausgeführt werden kann.
- Die App kann komplexe Adressen und Transaktionen gemäß dem Firefish-Protokoll konstruieren.
- Die App generiert ephemere Schlüsselpaare, signiert Transaktionen und speichert notwendige Daten (wie PSBTs).

### Der Prozess

Unten findest du den vereinfachten Prozess der Treuhandeinrichtung und die Laufzeit des Kredits.

1. Die Protokollteilnehmer tauschen sicher die notwendigen Daten (wie Kreditdetails) und öffentliche Schlüssel aus.
2. Mit der Firefish App generiert der Kreditnehmer A_prefund (und das entsprechende Sperrskript).
3. Der Kreditnehmer sendet Bitcoin-Sicherheiten an A_prefund mit seiner eigenen Wallet.
4. Mit der Firefish App konstruiert der Kreditnehmer tx_escrow und PSBTs und fügt seine eigenen Signaturen zu den PSBTs hinzu.
5. Nach der Überprüfung signieren die Orakel tx_escrow und die PSBTs gemäß dem Protokoll.
6. Der Kreditnehmer kann nun überprüfen, ob alle Transaktionen und Signaturen vorhanden sind. Nach der Überprüfung signiert er tx_escrow.
7. Der Kreditnehmer verwirft den B-EPH-Schlüssel und stellt sicher, dass die Ausgabemöglichkeiten für die Treuhand auf die durch die PSBTs definierten beschränkt sind.
8. Die Treuhand ist ordnungsgemäß eingerichtet.
9. Wenn während der Laufzeit des Kredits ein Ereignis eintritt (wie eine Liquidation), fügt das Orakel die fehlende Unterschrift zu den PSBT hinzu und sendet diese an das Netzwerk.

### Schlüsselvorteile des Firefish-Protokolls

- Die Treuhand hat einen "deterministischen" Charakter. Sie kann nur an die Adresse des Kreditnehmers oder des Liquidators ausgegeben werden, aber nicht an ein anderes Subjekt.
- Der Kreditgeber muss kein kryptografisches Material besitzen oder anderweitig mit dem Bitcoin-Netzwerk interagieren. Dies ermöglicht es Entitäten, die nicht mit Bitcoin vertraut sind, die Firefish-Plattform zu nutzen.
- Der Kreditnehmer muss nur während der Einrichtungsphase der Treuhand online sein und mit der Plattform interagieren. Danach ist dies nicht mehr notwendig - er muss nichts weiter unterschreiben oder die Schlüssel online halten.
- Wenn die Orakel während irgendeiner Phase des Kredits die Zusammenarbeit einstellen, kann der Kreditnehmer die Bitcoin nach Ablauf der Zeitsperre auf seine eigene Adresse ausgeben.
- Die Interaktion des Kreditnehmers mit dem Protokoll kann auf zwei einfache Schritte reduziert werden: 1) Gebe deine "Rücksendeadresse" an, 2) Sende die Sicherheiten an eine andere Adresse. Die Komplexität, wie das Signieren des PSBT, wird von der Firefish-Anwendung verarbeitet. Diese wird vollständig Open-Source sein und idealerweise auf der Seite des Kreditnehmers kompiliert.
- Da die Interaktion so einfach ist, kann Firefish sowohl von Besitzern von Hardware-Wallets als auch von Multi-Party Computation (MPC)-Wallets (Institutionen) oder sogar von Verwahrungslösungen (was allerdings nicht empfohlen wird) verwendet werden.

### Potenzielle Nachteile des Firefish-Protokolls

- Wie bei jedem anderen Krypto-Kreditsystem ist ein gewisses Maß an Vertrauen in die Orakel erforderlich, die korrekte Daten innerhalb von Firefish bereitstellen. Wir glauben jedoch, dass dieses Vertrauensbedürfnis auf Implementierungsebene minimiert werden kann (zum Beispiel durch Dezentralisierung des Preis-Orakels, Verwendung von DLCs, Anonymisierungstechniken, die vom Zahlungs-Orakel verwendet werden).
- Der Vertrag kann nicht gekündigt werden, selbst wenn Kreditgeber und Kreditnehmer ohne die Beteiligung der Orakel zustimmen.
- Die Komplexität der vorgeschlagenen Lösung und die Tatsache, dass die Sicherheits- und Geschäftsvorteile möglicherweise nicht sofort erkennbar sind.
- Der Kreditgeber muss ein gewisses Vertrauen in den Liquidator haben (d. h. dass er die Gelder nach der Liquidierung der Bitcoin zurückgeben wird). Dies kann zum Beispiel durch eine Sicherheitsleistung des Liquidators minimiert werden.

← [Zurück](../Deutsch%20604df8215dd449539ce8f1abab2aaa14.md)