import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import { PostListProvider } from "./contexts/PostListContext";
import { PostProvider } from "./contexts/PostContext";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <BrowserRouter>
    <PostListProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </PostListProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
