# Testkonzept für die Todo-App

## 1. Ziel des Testkonzepts
Das Ziel des Testkonzepts ist es, die Qualität der Todo-App sicherzustellen, indem sowohl automatisierte Tests mit Cypress als auch manuelle Tests definiert werden. Diese Tests überprüfen die Funktionalität, Usability und die Konsistenz der Anwendung.

---

## 2. Testumgebung
- **Betriebssystem:** Windows
- **IDE:** IntelliJ IDEA 2024.1.2
- **JavaScript-Version:** ECMAScript 2021
- **Build-Tool:** npm
- **Test-Framework:** Cypress

---

## 3. Testarten
1. **Automatisierte Tests**:
  - Diese Tests werden mit dem Cypress-Framework ausgeführt und decken Kernfunktionen der Anwendung ab.

2. **Manuelle Tests**:
  - Hierbei wird die Benutzererfahrung und Funktionen getestet, die schwer automatisiert werden können, wie z. B. Design, Responsiveness und Fehlermeldungen.

---

## 4. Testfälle

### **4.1 Automatisierte Tests (Cypress)**

| **Testfall-ID** | **Testfallbeschreibung**                       | **Erwartetes Ergebnis**                         |
|------------------|------------------------------------------------|-------------------------------------------------|
| 001              | Die Todo-App wird korrekt geladen             | Die Anwendung wird ohne Fehler und mit allen UI-Elementen geladen. |
| 002              | Ein neues Todo kann hinzugefügt werden         | Das Todo erscheint korrekt in der Liste.       |
| 003              | Ein Todo kann als erledigt markiert werden     | Das Todo wird als erledigt markiert und visuell hervorgehoben. |
| 004              | Ein Todo kann gelöscht werden                 | Das Todo wird aus der Liste entfernt.          |


### **4.2 Manuelle Tests**

| **Testfall-ID** | **Testfallbeschreibung**                                     | **Erwartetes Ergebnis**                         |
|------------------|-------------------------------------------------------------|-------------------------------------------------|
| 101              | Responsiveness auf unterschiedlichen Geräten                | App passt sich korrekt an verschiedene Bildschirmgrößen an. |
| 102              | Usability-Test: Prioritäten-Funktion                        | Benutzer versteht intuitiv, wie die Prioritäten geändert werden können. |
| 103              | Fehlermeldungen: Ungültige Eingaben (z. B. leere Todos)     | Benutzer wird durch klare Fehlermeldungen informiert. |
| 104              | Zugänglichkeit: Navigation mit Tastatur und Screenreader    | Alle Elemente sind zugänglich und Screenreader-kompatibel. |
| 105              | Funktion der Filteroptionen                                | Filter (z. B. nach Kategorie oder Priorität) arbeiten wie erwartet. |
| 106              | Testen von Sonderzeichen und langen Texten in Todos         | Die Anwendung unterstützt Sonderzeichen und bricht lange Texte korrekt um. |

---

## 5. Durchführung der Tests
- **Automatisierte Tests**:
  - Die automatisierten Tests werden durch einen CI/CD-Workflow nach jedem Commit aufgerufen.

- **Manuelle Tests**:
  - Manuelle Tests werden von Testern auf verschiedenen Geräten und Browsern durchgeführt.
  - Die Ergebnisse werden in einem Testprotokoll festgehalten.

---

## 6. Akzeptanzkriterien
Die Anwendung gilt als fehlerfrei, wenn:
- Alle automatisierten Testfälle bestanden sind.
- Mindestens 95% der manuellen Tests erfolgreich abgeschlossen werden.
- Keine kritischen Fehler in der Funktionalität oder Usability bestehen.

---

## 7. Zusammenfassung
Dieses Testkonzept stellt sicher, dass sowohl technische als auch benutzerzentrierte Aspekte der Todo-App gründlich geprüft werden. Neben der Automatisierung wird der Fokus auch auf manuelle Tests gelegt, um die Benutzerfreundlichkeit und Qualität zu gewährleisten.
