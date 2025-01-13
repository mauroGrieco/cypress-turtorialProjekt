import { useState, useEffect } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import TodoDetail from "./TodoDetail";
import styles from "./TodoContainer.module.css";
import { getTodos, createTodo, deleteTodo, updateTodo } from "../api/todoService";

const TodoContainer = () => {
    const [todos, setTodos] = useState([]);
    const [sortOrder, setSortOrder] = useState("none");
    const [selectedTodo, setSelectedTodo] = useState(null);

    // Todos vom Backend laden
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const data = await getTodos();
            setTodos(data);
        } catch (error) {
            console.error("Fehler beim Laden der Todos:", error);
        }
    };

    // Neues Todo hinzufügen
    const addTodoItem = async (title, priority, category) => {
        const newTodo = { title, priority: parseInt(priority, 10), category, completed: false };
        try {
            const savedTodo = await createTodo(newTodo);
            setTodos([...todos, savedTodo]);
        } catch (error) {
            console.error("Fehler beim Erstellen des Todos:", error);
        }
    };

    // Todo löschen
    const delTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error("Fehler beim Löschen des Todos:", error);
        }
    };

    // Todo abschließen (toggle completed)
    const handleChange = async (id) => {
        const todoToUpdate = todos.find((todo) => todo.id === id);
        const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
        try {
            await updateTodo(updatedTodo);
            setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
        } catch (error) {
            console.error("Fehler beim Aktualisieren des Todos:", error);
        }
    };

    // Titel des Todos aktualisieren
    const setUpdate = async (updatedTitle, id) => {
        const todoToUpdate = todos.find((todo) => todo.id === id);
        const updatedTodo = { ...todoToUpdate, title: updatedTitle };
        try {
            await updateTodo(updatedTodo);
            setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
        } catch (error) {
            console.error("Fehler beim Aktualisieren des Titels:", error);
        }
    };

    // Priorität des Todos aktualisieren
    const setPriority = async (id, priority) => {
        const todoToUpdate = todos.find((todo) => todo.id === id);
        const updatedTodo = { ...todoToUpdate, priority };
        try {
            await updateTodo(updatedTodo);
            setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
        } catch (error) {
            console.error("Fehler beim Aktualisieren der Priorität:", error);
        }
    };

    // Sortierung ändern
    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    // Todos nach Priorität sortieren
    const getSortedTodos = () => {
        if (sortOrder === "none") return todos;

        return [...todos].sort((a, b) => {
            if (sortOrder === "asc") return a.priority - b.priority;
            if (sortOrder === "desc") return b.priority - a.priority;
            return 0;
        });
    };

    const openDetailView = (todo) => setSelectedTodo(todo);
    const closeDetailView = () => setSelectedTodo(null);

    return (
        <div className={styles.inner}>
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <div>
                <label>Sortiere nach Priorität: </label>
                <select value={sortOrder} onChange={handleSortChange}>
                    <option value="none">Keine Sortierung</option>
                    <option value="asc">Priorität aufsteigend</option>
                    <option value="desc">Priorität absteigend</option>
                </select>
            </div>
            <TodosList
                todos={getSortedTodos()}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
                setPriority={setPriority}
                openDetailView={openDetailView}
            />
            {selectedTodo && <TodoDetail todo={selectedTodo} onClose={closeDetailView} />}
        </div>
    );
};

export default TodoContainer;
