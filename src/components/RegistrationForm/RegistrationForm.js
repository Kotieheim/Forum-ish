import React, { Component } from "react";

export class RegistrationForm extends Component {
  render() {
    return (
      <form className="login-form">
        <label>Full Name</label>
        <input placeholder="Y'know, name" />
        <label>User name</label>
        <input placeholder="Y'know, user name" />
        <label>Password</label>
        <input placeholder="Y'know, password" />
        <label>password AGAIN</label>
        <input placeholder="Y'know, password x 2" />
        <button type="submit">Make Account</button>
      </form>
    );
  }
}

export default RegistrationForm;
