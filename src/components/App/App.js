import React, { Component } from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import Header from "../Header/Header";
import PostListPage from "../../routes/PostListPage/PostListPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import PostPage from "../../routes/PostPage/PostPage";
import MakePostPage from "../../routes/MakePostPage/MakePostPage";
import "./App.css";
import PrivateRoute from "../Utils/PrivateRoute";

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
        <header className="App_header">
          <Header isLoggedIn={isLoggedIn} />
        </header>

        <div className="Banner">
          <Link className="fa fa-chevron-left Banner_home_button" to="/"></Link>
          <h1>FORUM-ISH</h1>
          <p>
            When you need to get something off your chest and someone'll catch
            it
          </p>
          <span>* users must register/login to post or comment</span>
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
