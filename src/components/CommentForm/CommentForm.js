import React, { Component } from "react";
import PostContext from "../../contexts/PostContext";
import "./CommentForm.css";

export class CommentForm extends Component {
  static contextType = PostContext;
  handleSubmit = e => {
    e.preventDefault();
    const { text } = e.target;
    const comment = {
      text: text.value
    };
    console.log(comment);
  };
  render() {
    return (
      <form className="CommentForm" onSubmit={this.handleSubmit}>
        <div className="text">
          <textarea
            required
            aria-label="Comment on this post..."
            placeholder="Comment on this post..."
            name="text"
          />
        </div>
        <button className="CommentForm_button" type="submit">
          Post comment
        </button>
      </form>
    );
  }
}

export default CommentForm;
