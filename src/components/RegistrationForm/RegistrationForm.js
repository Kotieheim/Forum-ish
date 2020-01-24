import React, { Component } from "react";
import "./RegistrationForm.css";
import AuthApiService from "../../services/auth-api-service";
export class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };
  state = { error: null };

  handleSubmit = e => {
    e.preventDefault();
    const { full_name, user_name, password } = e.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value
    })
      .then(user => {
        full_name.value = "";
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegisterationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="error_red">{error}</p>}</div>
        <div className="full_name">
          <label aria-label="form input" htmlFor="fullname"></label>
          <input
            required
            name="full_name"
            autoComplete="fullname"
            placeholder="Full Name"
            id="fullname"
          />
        </div>

        <div className="user_name">
          <label aria-label="form input" htmlFor="username"></label>
          <input
            required
            id="username"
            autoComplete="username"
            name="user_name"
            placeholder="User Name"
          />
        </div>
        <div className="password">
          <label aria-label="form input" htmlFor="password"></label>
          <input
            required
            id="password"
            autoComplete="password"
            name="password"
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
