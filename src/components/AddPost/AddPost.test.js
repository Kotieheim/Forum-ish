import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddPost from "./AddPost";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AddPost />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
