import "./App.css";
import Title from "./components/title";
import AddTodo from "./components/form";

const App = () => {
  return <>
    <Title />
    <section style={{margin: "0 15px"}}>
      <AddTodo />
    </section>
  </>;
}

export default App;