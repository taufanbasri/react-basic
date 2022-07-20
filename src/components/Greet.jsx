import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>Welcome from functional component, {props.name}!</h1>

      {props.children}
    </div>
  );
};

export default Greet;
