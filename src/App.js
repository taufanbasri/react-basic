import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Greet name="Taufan">
        <p>This is children component</p>
      </Greet>
      <Greet name="Evita" />
      <hr />

      <Welcome name="Taufan">
        <p>This is children component</p>
      </Welcome>
      <Welcome name="Evita" />
    </div>
  );
}

export default App;
