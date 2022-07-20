import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this for third approach
    this.clickHandler = this.clickHandler.bind(this);
  }

  // this used for 1 - 3 approach
  clickHandler() {
    this.setState({
      message: "Goodbye",
    });
  }

  newClickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* first approach */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* second approach */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* third approach */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* fourth approach */}
        <button onClick={this.newClickHandler}>Click</button>

        {/* React documentation recommend approach number 3 or 4 */}
      </div>
    );
  }
}

export default EventBind;
