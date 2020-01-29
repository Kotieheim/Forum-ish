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
      <div>
        <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">
            {error && <p className="error_red">*{error}</p>}
          </div>
          <div className="user_name">
            <label aria-label="password" htmlFor="username"></label>
            <input
              required
              autoComplete="username"
              name="user_name"
              id="username"
              placeholder="user name"
            />
          </div>
          <div className="password">
            <label aria-label="password" htmlFor="password"></label>

            <input
              required
              autoComplete="password"
              name="password"
              type="password"
              placeholder="password"
              id="password"
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
        <div className="Dummy_container">
          <h2>Dummy Logins</h2>
          <div className="Dummy_logins">
            <div className="Dummy_credentials">
              <p>jules</p>
              <p>L0veP4per!</p>
            </div>

            <div className="Dummy_credentials">
              <p>kodes</p>
              <p>P@ssw0rd</p>
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

export default LoginForm;
