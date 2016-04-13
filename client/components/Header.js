import React from "react";

export default class Head extends React.Component {
  render () {
    return (
      <div class="jumbotron text-center">
      <h1><span class="fa fa-lock"></span> Yum Snap</h1>

      <p>Login or Register with:</p>          

      <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
      <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
      <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>
      <a href="/auth/twitter" class="btn btn-info"><span class="fa fa-twitter"></span> Twitter</a>

      </div>
    )
  }
}
