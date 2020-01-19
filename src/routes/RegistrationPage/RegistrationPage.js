import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

export class RegistrationPage extends Component {
  render() {
    return (
      <section className="Registration-page">
        <h2>Register</h2>
        <RegistrationForm />
      </section>
    );
  }
}

export default RegistrationPage;
