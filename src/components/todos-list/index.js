import { todosApi } from "../../utils/todosApi";
import { Div, Button } from "./styles";

const TodosList = ({ todos, setTodos }) => {
    const handleChange = async (event, id) => {
        const updatedTodo = await todosApi.updateCompleted(id, event.currentTarget.checked);
        const updatedState = [...todos].map(todo => (todo._id === id) ? updatedTodo : todo);
        setTodos(updatedState);
    };

    const handleClick = async id => {
        await todosApi.deleteTodo(id);
        const removeSelectedTodo = [...todos].filter(todo => todo._id !== id);
        setTodos(removeSelectedTodo);
    };

    return (
        <div>
            {todos.map(todo => (
                <Div key={todo._id} completed={todo.completed}>
                    <span>
                        <input type="checkbox" checked={todo.completed} onChange={e => handleChange(e, todo._id)} />
                        {todo.title}
                    </span>
                    <Button onClick={() => handleClick(todo._id)}>x</Button>
                </Div>
            ))}
        </div>
    );
};

export default TodosList;