import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";
import { Link } from "react-router-dom";

// Route for the login page and form.

export class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };
  render() {
    return (
      <div>
        <section className="login-page">
          <h2>Login</h2>
          <Link className="Is_or_is_not_user" to="/register">
            Not a user? Signup here
          </Link>
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </section>
      </div>
    );
  }
}

export default LoginPage;
