import { useState } from "react";

const Form = () => {
    const [todo, setTodo] = useState("");

    return (
        <form>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
            <button>Adicionar</button>
        </form>
    );
};

export default Form;