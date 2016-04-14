import React from "react";

export default class Head extends React.Component {
  render () {
    return (
      <div class="jumbotron text-center">
      <h1><span class="fa fa-lock"></span> YumSnap!</h1>

      <p>Login or Register with:</p>          

      <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
      <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
      <a href="/auth/github" class="btn btn-primary"><span class="fa fa-github"></span> GitHub</a>

      </div>
    )
  }
}
