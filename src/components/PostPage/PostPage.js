import React, { Component } from "react";
import "./PostPage.css";
import config from "../../config";
import PostContext from "../../contexts/PostContext";
import Moment from "moment";
import CommentForm from "../CommentForm/CommentForm";
import TokenService from "../../services/token-service";
import { Link } from "react-router-dom";

export class PostPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = PostContext;

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

    return (
      <div className="PostPage">
        <section className="PostPage_section">
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

export default PostPage;
