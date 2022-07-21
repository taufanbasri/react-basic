import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Azizah",
    };
  }

  componentDidMount() {
    // if just use extends component, component will be rendered every 2 seconds
    // but if use PureComponent, component just renders whenever state changes
    // never mutate the state when use pure component
    setInterval(() => {
      this.setState({ name: "Azizah" });
    }, 2000);
  }

  render() {
    console.log("parent component rendered");
    return (
      <div>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
