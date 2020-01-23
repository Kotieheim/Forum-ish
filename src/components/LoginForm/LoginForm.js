import React, { Component } from "react";
import "./LoginForm.css";
import AuthApiServie from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import PostContext from "../../contexts/PostContext";
export class LoginForm extends Component {
  static contextType = PostContext;
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };
  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;

    AuthApiServie.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();

        this.context.handleLogin();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="error_red">{error}</p>}</div>
        <div className="user_name">
          {/* <label required name="user_name" htmlFor="Login_user_name">
            User name
          </label> */}
          <input
            required
            autoComplete="username"
            name="user_name"
            placeholder="User Name"
          />
        </div>
        <div className="password">
          {/* <label name="password" type="password" htmlFor="Login_password">
            Password
          </label> */}
          <input
            required
            autoComplete="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={this.props.handleLogin}
          className="LoginPage_button"
          type="submit"
        >
          Log In
        </button>
      </form>
    );
  }
}

export default LoginForm;
