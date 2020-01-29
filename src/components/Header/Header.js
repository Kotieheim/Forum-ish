import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TokenService from "../../services/token-service";
import PostContext from "../../contexts/PostContext";

// Renders either login and register or logout in the header depending on weather the user is logged in or not.

export class Header extends Component {
  static contextType = PostContext;
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.setState({
      isLoggedIn: false
    });
  };
  renderLogoutLink() {
    return (
      <div>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
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
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default Header;
