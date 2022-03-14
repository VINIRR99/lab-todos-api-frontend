import { useState } from "react";
import { todosApi } from "../../utils/todosApi";

const AddTodo = ({ todos, setTodos }) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        if (todo.length !== 0) {
            alert(`Adding "${todo}" to the list`);

            (async () => {
                const newTodo = await todosApi.postTodo(todo);
                setTodos([...todos, newTodo]);
                setTodo("");
            })();
        } else {
            alert("Please add a Todo");
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
            <button>Adicionar</button>
        </form>
    );
};

export default AddTodo;