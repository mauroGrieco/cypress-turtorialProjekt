# Testkonzept für das Frontend

## 1. **Einheitentests (Unit Tests)**
- **Ziel**: Sicherstellen, dass einzelne Komponenten und Funktionen wie erwartet funktionieren.
- **Werkzeuge**: Jest, React Testing Library
- **Beispiele**:
    - Testen, ob `TodoItem` korrekt gerendert wird.
    - Testen, ob `InputTodo` das Hinzufügen eines neuen Todos korrekt handhabt.
    - Testen, ob `TodoContainer` die Todos korrekt sortiert.

## 2. **Integrationstests**
- **Ziel**: Sicherstellen, dass verschiedene Komponenten zusammenarbeiten.
- **Werkzeuge**: Jest, React Testing Library
- **Beispiele**:
    - Testen, ob das Hinzufügen eines neuen Todos in `InputTodo` die Liste in `TodosList` aktualisiert.
    - Testen, ob das Ändern der Priorität eines Todos in `TodoItem` korrekt in `TodoContainer` reflektiert wird.

## 3. **End-to-End-Tests (E2E)**
- **Ziel**: Sicherstellen, dass die gesamte Anwendung wie erwartet funktioniert.
- **Werkzeuge**: Cypress
- **Beispiele**:
    - Testen, ob ein Benutzer ein neues Todo hinzufügen, bearbeiten und löschen kann.
    - Testen, ob die Sortierfunktion korrekt funktioniert.

## 4. **Visuelle Tests**
- **Ziel**: Sicherstellen, dass die Benutzeroberfläche wie erwartet aussieht.
- **Werkzeuge**: Storybook, Chromatic
- **Beispiele**:
    - Testen, ob `TodoItem` korrekt gestylt ist.
    - Testen, ob `InputTodo` korrekt gerendert wird.

## 5. **Manuelle Tests**
- **Ziel**: Sicherstellen, dass die Anwendung in realen Szenarien wie erwartet funktioniert.
- **Beispiele**:
    - Testen der Anwendung in verschiedenen Browsern.
    - Testen der Anwendung auf verschiedenen Geräten (Desktop, Tablet, Mobil).

## Beispiel für einen Unit Test mit Jest und React Testing Library

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import TodoContainer from './TodoContainer';

test('fügt ein neues Todo hinzu', () => {
  render(<TodoContainer />);

  const inputElement = screen.getByPlaceholderText(/Add todo.../i);
  const addButton = screen.getByRole('button', { name: /plus/i });

  fireEvent.change(inputElement, { target: { value: 'Neues Todo' } });
  fireEvent.click(addButton);

  const todoItem = screen.getByText(/Neues Todo/i);
  expect(todoItem).toBeInTheDocument();
});