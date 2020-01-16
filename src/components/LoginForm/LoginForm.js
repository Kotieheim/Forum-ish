import React, { Component } from "react";
import "./LoginForm.css";
export class LoginForm extends Component {
  render() {
    return (
      <form className="login-form">
        <label>User name</label>
        <input placeholder="Y'know, user name" />
        <label>Password</label>
        <input placeholder="Y'know, password" />
        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default LoginForm;
