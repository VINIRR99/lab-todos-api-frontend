import "./App.css";
import Title from "./components/title";
import AddTodo from "./components/form";
import TodosList from "./components/todos-list";

const App = () => {
  return <>
    <Title />
    <section style={{margin: "0 15px"}}>
      <AddTodo />
      <TodosList />
    </section>
  </>;
}

export default App;