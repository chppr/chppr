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
      testVal: "Testing"
    };
  }
  changeVariable(testVal) {
    this.setState({testVal});
  }
  render() {
  	return (
  	  <div>
  	    <p>YumSnap! Main Component</p>
  	    <Toolbar changeVariable={this.changeVariable.bind(this)} value={this.state.testVal}/>
  	    <p>this.state is - {this.state.testVal}</p>
  	    <CardFeed/>
  	  </div>
  	);
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
