import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet parent</button>
    </div>
  );
};

export default ChildComponent;
