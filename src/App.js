import { useState, useEffect } from "react";
import "./App.css";
import { todosApi } from "./utils/todosApi";
import Title from "./components/title";
import AddTodo from "./components/form";
import TodosList from "./components/todos-list";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => (async () => setTodos(await todosApi.getTodos()))(), []);

  return <>
    <Title />
    <section style={{margin: "0 15px"}}>
      <AddTodo />
      <TodosList todos={todos} />
    </section>
  </>;
}

export default App;