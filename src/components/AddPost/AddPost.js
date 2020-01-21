import React, { Component } from "react";
import "./AddPost.css";
import config from "../../config";
import TokenService from "../../services/token-service";
import PostContext from "../../contexts/PostContext";
import PropTypes from "prop-types";

// SET UP ROUTE TO POST ON SERVER

export class AddPost extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    })
  };
  static contextType = PostContext;
  handleSubmit = e => {
    e.preventDefault();
    const { style, title, content } = e.target;

    const post = {
      style: style.value,
      title: title.value,
      content: content.value,
      date_created: new Date()
    };
    console.log(post);
    this.setState({ error: null });
    fetch(`${config.API_ENDPOINT}/posts`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(data => {
        style.value = "";
        title.value = "";
        content.value = "";
        this.context.addPost(data);
        this.props.history.push("/");
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  };

  render() {
    return (
      <form className="AddPost" onSubmit={this.handleSubmit}>
        <select required name="style" className="AddPost_style">
          <option value={null}>Topic Style</option>
          <option>Music</option>
          <option>School</option>
          <option>News</option>
          <option>Misc</option>
        </select>
        <div className="AddPost_title">
          <input name="title" placeholder="Title" />
        </div>
        <div className="AddPost_content">
          <textarea
            required
            name="content"
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

// 801 369 7243
