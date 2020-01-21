import React, { Component } from "react";
import PostContext from "../../contexts/PostContext";
import "./CommentForm.css";
import config from "../../config";
import TokenService from "../../services/token-service";
import PostApiService from "../../services/post-api-service";

export class CommentForm extends Component {
  static contextType = PostContext;
  handleSubmit = e => {
    e.preventDefault();
    const { post } = this.context;
    const { text } = e.target;

    const newComment = {
      post_id: post.id,
      text: text.value
    };
    fetch(`${config.API_ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newComment)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(commentData => {
        this.context.addComment(commentData);
        text.value = "";
      });
    // PostApiService.postComment(post.id, text.value)
    //   .then(this.context.addComment)
    //   .then(() => {
    //     text.value = "";
    //   })
    //   .catch(this.context.setError);
  };
  render() {
    console.log(this.context);
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
