import React from "react";

export default class Signup extends React.Component {

render () {
    return (
        <div>
          <h1>Sign Up</h1>
          <form class="inputdata" name="signinForm">
            <input type="text" placeholder="username"/><br/>
            <input type="password" placeholder="password"/><br/>

            <a href="/signup" class="btn btn-sm btn-social btn-vk"><span class="fa fa-fw fa-sign-in"></span> Sign up</a>

          </form>
          <h6>
            <a href="/login">Already have an account?<br/>
              <strong>Welcome back!</strong>
            </a>
          </h6>
          </div>
    )
  }
}