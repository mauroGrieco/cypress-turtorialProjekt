
const API_URL = "http://localhost:8080/api/v1/todos";

export const getTodos = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const createTodo = async (todo) => {
    const response = await fetch("http://localhost:8080/api/v1/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: todo.title,
            category: todo.category,
            priority: todo.priority,
            completed: todo.completed,
        }),
    });

    if (!response.ok) {
        throw new Error(`Fehler beim Erstellen des Todos: ${response.statusText}`);
    }

    return response.json();
};


export const deleteTodo = async (id) => {
    await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
    });
};

export const updateTodo = async (todo) => {
    const response = await fetch(`${API_URL}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
    });
    return response.json();
};
