import React, { Component } from "react";
import "./PostPage.css";
import config from "../../config";
import PostContext from "../../contexts/PostContext";
import Moment from "moment";
import CommentForm from "../CommentForm/CommentForm";
import TokenService from "../../services/token-service";
import { Link, withRouter } from "react-router-dom";

// Page containing full post by a user. other users are able to comment on post page as long as they are logged in and a delete button only rendered to those logged on. Users can only delete their own posts.

export class PostPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };
  static contextType = PostContext;
  state = { error: null };
  handleDelete = e => {
    const { postId } = this.props.match.params;

    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err));
        }
        return res;
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  componentDidMount() {
    const { postId } = this.props.match.params;
    Promise.all([
      fetch(`${config.API_ENDPOINT}/posts/${postId}`),
      fetch(`${config.API_ENDPOINT}/posts/${postId}/comments`)
    ])
      .then(([postRes, commentsRes]) => {
        return Promise.all([postRes.json(), commentsRes.json()]);
      })
      .then(([postData, commentsData]) => {
        this.context.setPost(postData);
        this.context.setComments(commentsData);
      });
  }

  render() {
    const { post, comments } = this.context;
    const { error } = this.state;
    return (
      <div className="PostPage">
        <section className="PostPage_section">
          <div role="alert" className="Handle_Delete">
            {error && <p className="error_black">*{error}*</p>}
          </div>
          {TokenService.hasAuthToken() ? (
            <button
              onClick={e => {
                if (
                  window.confirm("Are you sure you wish to delete this post?")
                )
                  this.handleDelete(e);
              }}
              className="Delete_post"
            >
              Delete
            </button>
          ) : (
            ""
          )}
          <header className="PostPage_header">
            <div>
              <h2>author: </h2>

              <h2>{post.author.user_name}</h2>
            </div>
            <div>
              <h3>posted</h3>
              <p>{Moment(post.date_created).format("MMM Do YYYY")}</p>
            </div>
          </header>
          <h1 className="PostPage_title">{post.title}</h1>
          <p className="PostPage_content">{post.content}</p>
        </section>
        {TokenService.hasAuthToken() ? (
          <CommentForm />
        ) : (
          <Link to="/login" className="CommentForm_not-logged-in">
            Log In to comment
          </Link>
        )}
        <span className="Comment_list">Comment list</span>
        <ul className="PostPage_comment-list">
          {comments &&
            comments.map(function(item) {
              return (
                <li className="PostPage_comment" key={item.id}>
                  <p className="PostPage_comment-text">{item.text}</p>
                  <p className="PostPage_comment-user">{item.user.user_name}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default withRouter(PostPage);
