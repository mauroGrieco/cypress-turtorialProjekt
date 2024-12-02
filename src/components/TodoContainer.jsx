import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import styles from "./TodoContainer.module.css";

const TodoContainer = () => {
    const getInitialTodos = () => {
        const temp = localStorage.getItem("todos");
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
    };

    const [todos, setTodos] = useState(getInitialTodos());
    const [sortOrder, setSortOrder] = useState("none");

    const handleChange = (id) => {
        setTodos((prevState) =>
            prevState.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    };

    const delTodo = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)]);
    };

    const addTodoItem = (title, priority) => {
        const newTodo = {
            id: uuidv4(),
            title,
            priority,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.title = updatedTitle;
                }
                return todo;
            })
        );
    };

    const setPriority = (id, priority) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.priority = priority;
                }
                return todo;
            })
        );
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const getSortedTodos = () => {
        if (sortOrder === "none") return todos;
        return [...todos].sort((a, b) => a.priority - b.priority);
    };

    useEffect(() => {
        const temp = JSON.stringify(todos);
        localStorage.setItem("todos", temp);
    }, [todos]);

    return (
        <div className={styles.inner}>
            <Header />
            <InputTodo addTodoProps={(title, priority) => addTodoItem(title, priority)} />
            <div>
                <label>Sortiere nach Priorität: </label>
                <select value={sortOrder} onChange={handleSortChange}>
                    <option value="none">Keine</option>
                    <option value={1}>Hoch</option>
                    <option value={2}>Mittel</option>
                    <option value={3}>Niedrig</option>
                </select>
            </div>
            <TodosList
                todos={getSortedTodos()}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
                setPriority={setPriority}
            />
        </div>
    );
};

export default TodoContainer;