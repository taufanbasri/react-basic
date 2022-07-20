import { Component } from "react";

class Welcome extends Component {
  render() {
    
    const { name, heroName, children } = this.props;
    
    return (
      <div>
        <h1>Welcome from Class component, {name} a.k.a {heroName}!</h1>
        {children}
      </div>
    );
  }
}

export default Welcome;
