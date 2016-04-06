import React from "react";

export default class AuthPanel extends React.Component {
  handleClick(e) {
    console.log("button pressed");
    this.props.authToggle();
  }
  authStatus() {
    return this.props.auth ? "LOGOUT" : "LOGIN";
  }
  render() {
    console.log("AuthPanel props:", this.props);
    return (
      <div>
        <h5>AuthPanel Component nested inside the Toolbar</h5>
        <button onClick={this.handleClick.bind(this)}>
          {this.authStatus()}
        </button>
      </div>
    );
  }
}
