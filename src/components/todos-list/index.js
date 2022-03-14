import { todosApi } from "../../utils/todosApi";

const TodosList = ({ todos, setTodos }) => {
    const handleChange = async (event, id) => {
        const updatedTodo = await todosApi.updateCompleted(id, event.currentTarget.checked);
    };

    return (
        <div>
            {todos.map(todo => (
                <div key={todo._id}>
                    <input type="checkbox" checked={todo.completed} onChange={e => handleChange(e, todo._id)} />
                    {todo.title}
                </div>
            ))}
        </div>
    );
};

export default TodosList;