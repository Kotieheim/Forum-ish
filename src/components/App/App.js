import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import PostListPage from "../../routes/PostListPage/PostListPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import PostPage from "../../routes/PostPage/PostPage";
import MakePostPage from "../../routes/MakePostPage/MakePostPage";
import "./App.css";
import { Button } from "../Utils/Utils";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App_header">
          <Header />
        </header>

        <div className="Banner">
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
            <Route path={"/post"} component={PostPage} />
            <Route path={"/make-post"} component={MakePostPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
