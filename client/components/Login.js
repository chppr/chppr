import React from "react";

export default class Login extends React.Component {

render () {
    return (
        <div>
          <h1>Sign In</h1>
          <form class="inputdata" name="signinForm">
            <input type="text" placeholder="username"/><br/>
            <input type="password" placeholder="password"/><br/>
            <button class="btn btn-sm btn-submit">sign in</button>
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