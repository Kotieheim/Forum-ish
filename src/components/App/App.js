import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "../Header/Header";
import PostListPage from "../../routes/PostListPage/PostListPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import PostPage from "../../routes/PostPage/PostPage";
import MakePostPage from "../../routes/MakePostPage/MakePostPage";
import "./App.css";
import config from "../../config";

export class App extends Component {
  state = {
    isLoggedIn: false,
    hasError: false,
    post: [],
    comments: []
  };
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/posts`, {
      headers: {
        // Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json();
      })
      .then(post => {
        console.log(post);
        this.setState({
          post
        });
      })
      .catch(e => {
        console.error(e);
      });
  }
  static getStateFromError(e) {
    console.error(e);
    return { hasError: true };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };
  render() {
    let { isLoggedIn, post } = this.state;
    console.log(isLoggedIn);
    return (
      <div className="App">
        <header className="App_header">
          <Header isLoggedIn={isLoggedIn} />
        </header>

        <div className="Banner">
          <Link className="Banner_home_button" to="/">
            Return Home
          </Link>
          <h1>Forum-Ish</h1>
          <p>
            When you need to get something off your chest and someone can catch
            it
          </p>
        </div>
        <main className="App_main">
          <Switch>
            <Route exact path={"/"} component={PostListPage} />
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/register"} component={RegistrationPage} />
            <Route path={"/post/:postId"} component={PostPage} />
            <Route path={"/make-post"} component={MakePostPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
