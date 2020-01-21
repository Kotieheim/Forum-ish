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

  static contextType = PostContext;

  componentDidMount() {
    const { postId } = this.props.match.params;
    Promise.all([
      fetch(`${config.API_ENDPOINT}/posts/${postId}`),
      fetch(`${config.API_ENDPOINT}/posts/${postId}/comments`)
    ])
      .then(([postRes, commentsRes]) => {
        console.log(postRes, commentsRes);
        return Promise.all([postRes.json(), commentsRes.json()]);
      })
      .then(([postData, commentsData]) => {
        console.log(postData, commentsData);
        this.context.setPost(postData);
        this.context.setComments(commentsData);
      });
    // console.log(this.context);
    // this.context.clearError();
    // PostApiService.getFullPost(postId)
    //   .then(this.context.setPost)
    //   .catch(this.context.setError);
    // PostApiService.getPostComments(postId)
    //   .then(this.context.setComments)
    //   .catch(this.context.setError);
  }

  render() {
    const { post, comments } = this.context;
    console.log(post);
    console.log(comments);
    return (
      <div>
        <section>
          <header className="PostPage_header">
            <div>
              <h3>author: </h3>

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
        <CommentForm />
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

// const getNestedObject = (nestedObj, pathArr) => {
//   return pathArr.reduce(
//     (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
//     nestedObj
//   );
// };

export default PostPage;
