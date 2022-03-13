import { useState, useEffect } from "react";
import { todosApi } from "../../utils/todosApi";

const TodosList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => (async () => setTodos(await todosApi.getTodos()))(), []);

    return (
        <div>
            {todos.map(todo => <h2 key={todo._id}>{todo.title}</h2>)}
        </div>
    );
};

export default TodosList;