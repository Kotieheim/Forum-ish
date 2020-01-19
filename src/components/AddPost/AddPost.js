import React, { Component } from "react";
import "./AddPost.css";

export class AddPost extends Component {
  render() {
    return (
      <form className="AddPost" onSubmit={this.handleSubmit}>
        <div className="AddPost_title">
          <input name="AddPost_title" placeholder="Title" />
        </div>
        <div className="AddPost_content">
          <textarea
            required
            placeholder="Type something meaingful here, or not. What do I care I'm some text, not a cop."
          />
        </div>
        <button className="AddPost_button" type="submit">
          Make post
        </button>
      </form>
    );
  }
}

export default AddPost;
