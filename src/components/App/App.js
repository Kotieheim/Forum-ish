import React, { Component } from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import Header from "../Header/Header";
import TokenService from "../../services/token-service";
import PostListPage from "../../routes/PostListPage/PostListPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import PostPage from "../PostPage/PostPage";
import MakePostPage from "../../routes/MakePostPage/MakePostPage";
import "./App.css";
import PrivateRoute from "../Utils/PrivateRoute";
import bannerlogo from "../../images/bannerlogo.PNG";

// Main app component containing all routes and components. Also displays header with login, registration and banner logo.

export class App extends Component {
  state = {
    isLoggedIn: false,
    hasError: false,
    post: [],
    comments: []
  };
  static getStateFromError(e) {
    console.error(e);
    return { hasError: true };
  }

  render() {
    let { isLoggedIn } = this.state;
    return (
      <div className="App">
        <header role="banner" className="App_header">
          <Header isLoggedIn={isLoggedIn} />
        </header>

        <div role="contentinfo" className="Banner">
          <Link
            value="back home"
            role="button"
            className="fa fa-chevron-left Banner_home_button"
            to="/"
            aria-label="home"
          ></Link>

          <img className="Banner_title" src={bannerlogo} alt="forum-ish logo" />
          {TokenService.hasAuthToken() ? (
            <p className="Banner_saying">{""}</p>
          ) : (
            <p className="Banner_saying">register or log in to post/comment</p>
          )}
        </div>
        <main className="App_main">
          <Switch>
            <Route exact path={"/"} component={PostListPage} />
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/register"} component={RegistrationPage} />
            <Route path={"/post/:postId"} component={PostPage} />
            <PrivateRoute path={"/make-post"} component={MakePostPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
