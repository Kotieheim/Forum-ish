import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import IndividualPost from "../../components/IndividualPost/IndividualPost";
import posts from "../stores/PostStore";
import "./PostListPage.css";
import AddPost from "../../components/AddPost/AddPost";

export class PostListPage extends Component {
  render() {
    console.log(posts);
    return (
      <div>
        <NavLink
          to="/make-post"
          type="button"
          className="AddPost_add-post-button"
        >
          Make a post
        </NavLink>
        <IndividualPost posts={posts} />
      </div>
    );
  }
}

export default PostListPage;
