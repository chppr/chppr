import React from "react";

export default class Signup extends React.Component {

render () {
    return (
        <div class="container">
          <div class="loginbox">
            <h1>Sign Up</h1>
            <form class="inputdata" name="signinForm" action="/signup" method="post">
              <input type="text" name="username" placeholder="username"/><br/>
              <input type="password" name="password" placeholder="password"/><br/>
              <button class="btn btn-sm btn-social btn-vk"><span class="fa fa-fw fa-sign-in"></span> Sign up</button>
            </form>
          </div>
        </div>
    )
  }
}