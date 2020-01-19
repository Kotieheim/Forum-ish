import React, { Component } from "react";
import "./RegistrationForm.css";

export class RegistrationForm extends Component {
  state = { error: null };
  render() {
    const { error } = this.state;
    return (
      <form className="RegisterationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="error_red">{error}</p>}</div>
        <div className="full_name">
          <input
            required
            name="Login_full_name"
            autoComplete="fullname"
            placeholder="Full Name"
          />
        </div>

        <div className="user_name">
          <input
            required
            autoComplete="username"
            name="Login_user_name"
            placeholder="User Name"
          />
        </div>
        <div className="password">
          <input
            required
            autoComplete="password"
            name="Registration_password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="Registration_button" type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
