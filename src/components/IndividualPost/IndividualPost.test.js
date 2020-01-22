import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import IndividualPost from "./IndividualPost";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const stubPost = [
    {
      id: 1,
      style: "News",
      title: "Test Title",
      content: "Test content",

      number_of_comments: 2,
      author: {
        id: 1,
        user_name: "dunder",
        full_name: "dunder mifflin"
      }
    }
  ];
  ReactDOM.render(
    <BrowserRouter>
      <IndividualPost post={stubPost} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
