import "./App.css";
import Title from "./components/title";
import Form from "./components/form";

const App = () => {
  return <>
    <Title />
    <section style={{margin: "0 15px"}}>
      <Form />
    </section>
  </>;
}

export default App;