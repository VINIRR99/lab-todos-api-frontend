const TodosList = ({ todos }) => {
    return (
        <div>
            {todos.map(todo => (
                <div key={todo._id}>
                    <input type="checkbox" checked={todo.completed} />
                    {todo.title}
                </div>
            ))}
        </div>
    );
};

export default TodosList;