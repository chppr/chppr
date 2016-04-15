import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';

export default class Login extends React.Component {

render () {
    return (
        <div class="container">

          <div class="loginbox">
          <h1>Sign In</h1>

          <form class="inputdata" name="signinForm" action="/login" method="post">
          <input type="text" name="username" placeholder="username"/><br/>
            <input type="password" name="password" placeholder="password"/><br/>
            <button class="btn btn-sm btn-social btn-vk"><span class="fa fa-fw fa-sign-in"></span> Login</button>
             </form>
              <h6>
            <a href="/signup">Don't have an account?<br/>
           <strong>Create one!</strong>
         </a>
       </h6>
       </div>

     </div>
    )
  }
}


