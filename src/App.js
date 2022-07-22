import React, { Component } from "react";
import "./App.css";
import ClickCounterTwo from "./components/ClickCounterTwo";
import Counter from "./components/Counter";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <Counter>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter>

        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User
          render={(isLoggedIn) => (isLoggedIn ? "Taufan Prasetyo" : "Guest")}
        /> */}
      </div>
    );
  }
}

export default App;
