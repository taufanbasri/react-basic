// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
import Message from "./components/Message";

import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}

      {/* <Greet name="Taufan">
        <p>This is children</p>
      </Greet>
      <Greet name="Evita" />
      <hr />
      <Welcome name="Taufan"></Welcome>/
      <Welcome name="Evita" /> */}
    </div>
  );
}

export default App;
