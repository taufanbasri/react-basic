import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>
        <h1>Greet parent</h1>
      </button>
    </div>
  );
};

export default ChildComponent;
