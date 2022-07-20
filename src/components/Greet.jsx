import React from "react";

const Greet = ({ name, heroName, children }) => {
  return (
    <div>
      <h1>
        Welcome from functional component, {name} a.k.a {heroName}!
      </h1>

      {children}
    </div>
  );
};

export default Greet;
