import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  renderLogoutLink() {
    return (
      <div>
        <Link to="/">Logout</Link>
      </div>
    );
  }
  renderLoginLink() {
    return (
      <div className="Header_not-logged-in">
        <Link className="login" to="/login">
          Login
        </Link>
        <Link className="register" to="/register">
          Sign Up
        </Link>
      </div>
    );
  }
  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">Forum-Ish</Link>
        </h1>
        {this.renderLoginLink()}
      </nav>
    );
  }
}

export default Header;
