import { useState, useEffect } from "react";
import { todosApi } from "../../utils/todosApi";

const list = [
    {
        _id: "622d622ec10973fb454ed8f5",
        title: "Do the laundry",
        completed: true
    },
    {
        _id: "622d6230c10973fb454ed8f7",
        title: "Do the frontend",
        completed: false
    },
    {
        _id: "622d6284c10973fb454ed8fc",
        title: "Do the dishes",
        completed: true
    }
];

const TodosList = () => {
    const [todos, setTodos] = useState([]);

    const [test, setTest] = useState([]);

    useEffect(() => (async () => {
        setTodos(list);

        setTest(await todosApi.getTodos());
    })(), []);

    console.log("Test", test);

    return (
        <div>
            {todos.map(todo => <h2 key={todo._id}>{todo.title}</h2>)}
        </div>
    );
};

export default TodosList;