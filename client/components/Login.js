import React from "react";

export default class Login extends React.Component {

render () {
    return (
        <div>
          <h1>Sign In</h1>
          <form class="inputdata" name="signinForm">
            <input type="text" placeholder="username"/><br/>
            <input type="password" placeholder="password"/><br/>

<a href="/login" class="btn btn-sm btn-social btn-vk"><span class="fa fa-fw fa-sign-in"></span> Login</a>

          </form>
          <h6>
            <a href="/signup">Don't have an account?<br/>
              <strong>Create one!</strong>
            </a>
          </h6>
          </div>
    )
  }
}