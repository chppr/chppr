import React from "react";
import AuthPanel from "./AuthPanel"


export default class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <h2>This will be the Toolbar Component</h2>
        <AuthPanel/>
      </div>
    );
  }
}
