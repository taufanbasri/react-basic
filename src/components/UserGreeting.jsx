import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    let message;

    if (this.state.isLoggedIn) {
      message = <div>Welcome Taufan</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return (
      <div>
        <div>{message}</div>
      </div>
    );
  }
}

export default UserGreeting;
