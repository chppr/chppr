import React from "react";
import ReactDOM from "react-dom";

import Toolbar from "./components/Toolbar"
import CardFeed from "./components/CardFeed"

// import Layout from "./components/Layout";
class Layout extends React.Component {
  
  render() {
  	return (
  	  <div>
  	    <p>Main Layout Rendering</p>
  	    <Toolbar/>
  	    <CardFeed/>
  	  </div>
  	);
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
