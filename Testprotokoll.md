# Testprotokoll für Cypress-Tests

## Projekt
**cypress-tutorialProjekt**

## Datum
**19.01.2025**

## Testumgebung
- **Betriebssystem:** Windows
- **IDE:** IntelliJ IDEA 2024.1.2
- **JavaScript-Version:** ECMAScript 2021
- **Build-Tool:** npm
- **Test-Framework:** Cypress

## Testfälle

| **Testfall-ID** | **Testfallbeschreibung**                              | **Erwartetes Ergebnis**                                           | **Tatsächliches Ergebnis**                                        | **Status** |
|------------------|------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|------------|
| 001              | Todo-App wird korrekt gerendert                      | Todo-App wird ohne Fehler gerendert                               | Todo-App wird ohne Fehler gerendert                               | ✅          |
| 002              | Todo wird korrekt hinzugefügt                        | Todo wird zur Liste hinzugefügt                                   | Todo wird zur Liste hinzugefügt                                   | ✅          |
| 003              | Todo wird korrekt als abgeschlossen markiert         | Todo wird als abgeschlossen markiert                              | Todo wird als abgeschlossen markiert                              | ✅          |
| 004              | Todo wird korrekt gelöscht                          | Todo wird aus der Liste gelöscht                                  | Todo wird aus der Liste gelöscht                                  | ✅          |
| 101              | Responsiveness auf unterschiedlichen Geräten         | App passt sich korrekt an verschiedene Bildschirmgrößen an.       | App passt sich korrekt an verschiedene Bildschirmgrößen an.       | ✅          |
| 102              | Usability-Test: Prioritäten-Funktion                 | Benutzer versteht intuitiv, wie die Prioritäten geändert werden können. | Benutzer versteht intuitiv, wie die Prioritäten geändert werden können. | ✅          |
| 103              | Fehlermeldungen: Ungültige Eingaben (z. B. leere Todos) | Benutzer wird durch klare Fehlermeldungen informiert.             | Benutzer wird durch klare Fehlermeldungen informiert.             | ✅          |
| 104              | Zugänglichkeit: Navigation mit Tastatur und Screenreader | Alle Elemente sind zugänglich und Screenreader-kompatibel.        | Alle Elemente sind zugänglich und Screenreader-kompatibel.        | ✅          |
| 105              | Funktion der Filteroptionen                         | Filter (z. B. nach Kategorie oder Priorität) arbeiten wie erwartet. | Filter (z. B. nach Kategorie oder Priorität) arbeiten wie erwartet. | ✅          |
| 106              | Testen von Sonderzeichen und langen Texten in Todos | Die Anwendung unterstützt Sonderzeichen und bricht lange Texte korrekt um. | Die Anwendung unterstützt Sonderzeichen und bricht lange Texte korrekt um. | ✅          |

## Zusammenfassung
Alle definierten Testfälle wurden erfolgreich ausgeführt und bestanden. Die Anwendung funktioniert wie erwartet.

## Anmerkungen
- Die Daten-Attribute der HTML-Elemente wurden zur Identifikation in den Tests verwendet.
- Alle Tests wurden in der lokalen Entwicklungsumgebung ausgeführt.

## Tester
**Nils von Däniken**
