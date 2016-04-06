import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';

import Toolbar from "./components/Toolbar"
import CardFeed from "./components/CardFeed"
injectTapEventPlugin();

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      testVal: "Testing",
      auth: false
    };
  }
  changeVariable(testVal) {
    this.setState({testVal});
  }
  authToggle() {
  	this.setState({auth: !this.state.auth});
  }
  render() {
  	console.log("client.js props:", this.props);
  	console.log("client.js state:", this.state);
  	return (
  	  <div>
  	    <p>YumSnap! Main Component</p>
  	    <Toolbar changeVariable={this.changeVariable.bind(this)} testVal={this.state.testVal} authToggle={this.authToggle.bind(this)} auth={this.state.auth}/>
  	    <p>this.state.testVal is - {this.state.testVal}</p>
  	    <p>this.state.auth is - {String(this.state.auth)}</p>
  	    <CardFeed/>
  	  </div>
  	);
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
