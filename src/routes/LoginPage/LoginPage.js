import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";
import { Link } from "react-router-dom";
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
        <div className="Dummy_container">
          <h2>Dummy Logins</h2>
          <div className="Dummy_logins">
            <div className="Dummy_credentials">
              <p>Username:</p>
              <p>Password:</p>
            </div>

            <div className="Dummy_credentials">
              <p>Kodes</p>
              <p>P@ssw0rd!</p>
            </div>
            <div className="Dummy_credentials">
              <p>dunder</p>
              <p>L0veP4per!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
