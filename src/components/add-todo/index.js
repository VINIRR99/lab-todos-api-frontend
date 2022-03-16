import { useState } from "react";
import todosApi from "../../utils/todosApi";
import { Form, AddButton } from "./styles";

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
        <Form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <AddButton>Adicionar</AddButton>
        </Form>
    );
};

export default AddTodo;