import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";

import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Message /> */}
      <Greet name="Taufan" heroName="Tamvan">
        <p>This is children</p>
      </Greet>
      <hr />
      <Welcome name="Taufan" heroName="Tamvan">
        <p>This is children</p>
      </Welcome>
    </div>
  );
}

export default App;
