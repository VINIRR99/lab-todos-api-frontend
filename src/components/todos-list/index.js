const TodosList = ({ todos }) => {
    return (
        <div>
            {todos.map(todo => <h2 key={todo._id}>{todo.title}</h2>)}
        </div>
    );
};

export default TodosList;