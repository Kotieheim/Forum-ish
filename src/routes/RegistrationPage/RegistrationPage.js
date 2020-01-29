import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";
import { Link } from "react-router-dom";

// Route for registration and the register form.

export class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/login");
  };
  render() {
    return (
      <section className="Registration-page">
        <h2>Register</h2>
        <Link className="Is_or_is_not_user" to="/login">
          Already a user? Login here
        </Link>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationPage;
