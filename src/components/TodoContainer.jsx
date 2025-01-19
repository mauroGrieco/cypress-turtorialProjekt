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
    const [editTodo, setEditTodo] = useState({ title: "", priority: "", category: "", completed: false });

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

    const addTodoItem = async (title, priority, category) => {
        const newTodo = { title, priority: parseInt(priority, 10), category, completed: false };
        try {
            const savedTodo = await createTodo(newTodo);
            setTodos([...todos, savedTodo]);
        } catch (error) {
            console.error("Fehler beim Erstellen des Todos:", error);
        }
    };

    const delTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {            console.error("Fehler beim Löschen des Todos:", error);
        }
    };

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

    const handleEditChange = (field, value) => {
        setEditTodo({ ...editTodo, [field]: value });
    };

    const saveChanges = async () => {
        try {
            await updateTodo(editTodo);
            fetchTodos();
            setSelectedTodo(null);
        } catch (error) {
            console.error("Fehler beim Speichern der Änderungen:", error);
        }
    };

    const openDetailView = (todo) => {
        setSelectedTodo(todo);
        setEditTodo(todo);
    };

    const closeDetailView = () => setSelectedTodo(null);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const getSortedTodos = () => {
        if (sortOrder === "none") return todos;

        return [...todos].sort((a, b) => {
            if (sortOrder === "asc") return a.priority - b.priority;
            if (sortOrder === "desc") return b.priority - a.priority;
            return 0;
        });
    };

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
                openDetailView={openDetailView}
            />
            {selectedTodo && (
                <div className={styles.modal}>
                    <h2>Todo Details bearbeiten</h2>
                    <label>Title:</label>
                    <input type="text" value={editTodo.title} onChange={(e) => handleEditChange("title", e.target.value)} />
                    <label>Priority:</label>
                    <input type="number" value={editTodo.priority} onChange={(e) => handleEditChange("priority", e.target.value)} />
                    <label>Category:</label>
                    <input type="text" value={editTodo.category} onChange={(e) => handleEditChange("category", e.target.value)} />
                    <label>Completed:</label>
                    <input type="checkbox" checked={editTodo.completed} onChange={(e) => handleEditChange("completed", e.target.checked)} />
                    <button onClick={saveChanges}>Speichern</button>
                    <button onClick={closeDetailView}>Schließen</button>
                </div>
            )}
        </div>
    );
};

export default TodoContainer;
