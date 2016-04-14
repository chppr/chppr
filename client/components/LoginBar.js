import React from "react";

export default class LoginBar extends React.Component{
  render () {
    return (

      <div>
      <p>Login or Register with:</p>          

      <a href="/login" class="btn btn-social btn-vk"><span class="fa fa-user"></span> Login</a>
      <a href="/signup" class="btn btn-social btn-vk"><span class="fa fa-user"></span> Signup</a>
      <a href="/auth/github" class="btn btn-social btn-github"><span class="fa fa-twitter"></span> GitHub</a>
      <a href="/auth/twitter" class="btn btn-social btn-vk"><span class="fa fa-google"></span> Twitter</a>
      <a href="/auth/google" class="btn btn-social btn-vk"><span class="fa fa-google"></span> Google</a>

      </div>
    )
  }
}
