import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";
export class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <h2>Login</h2>
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
