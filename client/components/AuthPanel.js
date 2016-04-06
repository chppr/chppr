import React from "react";

export default class AuthPanel extends React.Component {
  handleClick(e) {
  	console.log('button pressed');
  	this.props.authToggle();
  }
  render() {
  	// console.log(this.state.auth);
    return (
      <div>
		<button onClick={this.handleClick.bind(this)}>LOGIN</button>
      </div>
    );
  }
}
