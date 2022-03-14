import { todosApi } from "../../utils/todosApi";

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
                <div key={todo._id}>
                    <input type="checkbox" checked={todo.completed} onChange={e => handleChange(e, todo._id)} />
                    {todo.title}
                    <button onClick={() => handleClick(todo._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TodosList;