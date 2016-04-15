import React from "react";

export default class Signup extends React.Component {

render () {
    return (
        <div>
          <h1>Sign Up</h1>
          <form class="inputdata" name="signinForm">
            <input type="text" placeholder="username"/><br/>
            <input type="password" placeholder="password"/><br/>
            <button class="btn btn-sm btn-submit">sign up</button>
          </form>
          <h6>
            <a href="/signin">Already have an account?<br/>
              <strong>Welcome back!</strong>
            </a>
          </h6>
          </div>
    )
  }
}