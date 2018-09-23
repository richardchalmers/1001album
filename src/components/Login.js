import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="login-container">
          <div className="logo">LOGO</div>
          <h2 className="login-header">LOGIN</h2>
          <form>
            <label>
              Email
              <input type="text" name="email" />
            </label>
            <label>
              Password
              <input type="text" name="password" />
            </label>
              <input type="submit" value="SIGN IN" className="login-button" />
              <p className="create-account">Don't have an account? Click here</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
