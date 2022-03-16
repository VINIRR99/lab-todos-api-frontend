import { useState, useEffect } from "react";
import "./App.css";
import todosApi from "./utils/todosApi";
import Title from "./components/title";
import AddTodo from "./components/add-todo";
import TodosList from "./components/todos-list";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => (async () => setTodos(await todosApi.getTodos()))(), []);

  return <>
    <Title />
    <section style={{margin: "0 15px"}}>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodosList todos={todos} setTodos={setTodos} />
    </section>
  </>;
}

export default App;