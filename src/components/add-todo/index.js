import { useState } from "react";
import { todosApi } from "../../utils/todosApi";

const AddTodo = ({ todos, setTodos }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        if (title.length !== 0) {
            alert(`Adding "${title}" to the list!`);

            (async () => {
                const newTodo = await todosApi.postTodo(title);
                setTodos([...todos, newTodo]);
                setTitle("");
            })();
        } else {
            alert("Please add a Todo");
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button>Adicionar</button>
        </form>
    );
};

export default AddTodo;