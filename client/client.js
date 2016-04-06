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
      auth: false,
      veg: false,
      category: "all"
    };
  }
  changeVariable(testVal) {
    this.setState({testVal});
  }
  authToggle() {
    this.setState({auth: !this.state.auth});
  }
  vegToggle() {
    this.setState({veg: !this.state.veg});
  }
  categorySelect(category) {
    this.setState({category});
  }

  render() {
    console.log("client.js state:", this.state);
    return (
      <div>
        <p>YumSnap! Main Component</p>
        {/* Pass methods & state vars to Toolbar Component through props */}
        <Toolbar
          testVal={this.state.testVal}
          changeVariable={this.changeVariable.bind(this)}
          auth={this.state.auth}
          authToggle={this.authToggle.bind(this)}
          veg={this.state.veg}
          vegToggle={this.vegToggle.bind(this)}
          category={this.state.category}
          categorySelect={this.categorySelect.bind(this)}
        />
        <br/>
        <p>this.state.testVal is - {this.state.testVal}</p>
        <p>this.state.auth is - {String(this.state.auth)}</p>
        <p>this.state.veg is - {String(this.state.veg)}</p>
        <p>this.state.category is - {this.state.category}</p>
        <CardFeed/>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
