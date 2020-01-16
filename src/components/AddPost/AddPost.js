import React, { Component } from "react";
import "./AddPost.css";

export class AddPost extends Component {
  render() {
    return (
      <form className="add-post-page">
        <label>Title</label>
        <input placeholder="Y'know, somethin nice" />
        <label>Content</label>
        <textarea className="post-content" />
        <button type="submit">Make Post</button>
      </form>
    );
  }
}

export default AddPost;
