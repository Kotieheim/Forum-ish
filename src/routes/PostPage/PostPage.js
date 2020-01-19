import React, { Component } from "react";
import "./PostPage.css";
import config from "../../config";
import PostContext from "../../contexts/PostContext";
import Moment from "moment";
import CommentForm from "../../components/CommentForm/CommentForm";
import PostApiService from "../../services/post-api-service";

export class PostPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  state = {
    post: [],
    comments: []
  };
  static contextType = PostContext;

  componentDidMount() {
    const { postId } = this.props.match.params;
    fetch(`${config.API_ENDPOINT}/posts/${postId}`)
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json();
      })
      .then(post => {
        this.setState({
          post
        });
      });
    fetch(`${config.API_ENDPOINT}/posts/${postId}/comments`)
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json();
      })
      .then(comments => {
        this.setState({
          comments
        });
      });
  }
  componentWillUnmount() {
    this.context.clearPost();
  }
  renderPost() {
    Moment.locale("en");
    const { post } = this.state;

    const name = getNestedObject(post, ["author", "user_name"]);
    console.log(name);
    return (
      <section>
        <header className="PostPage_header">
          <div>
            <h3>author</h3>

            <h2>{name}</h2>
          </div>
          <div>
            <h3>posted</h3>
            <p>{Moment(post.date_created).format("MMM Do YYYY")}</p>
          </div>
        </header>
        <h1 className="PostPage_title">{post.title}</h1>
        <p className="PostPage_content">{post.content}</p>
      </section>
    );
  }
  renderComments() {
    const { comments } = this.state;
    console.log(comments);
    return (
      <div className="PostPage_comment-list">
        <ul>
          {comments.map(comment => (
            <li key={comment.id} className="PostPage_comment">
              <p className="PostPage_comment-text">{comment.text}</p>
              <p className="PostPage_comment-user">{comment.user.user_name}</p>
            </li>
          ))}
        </ul>
        <CommentForm />
      </div>
    );
  }

  render() {
    console.log(this.context);
    return (
      <div>
        <div>{this.renderPost()}</div>
        <div>{this.renderComments()}</div>
      </div>
    );
  }
}
const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    nestedObj
  );
};

export default PostPage;
