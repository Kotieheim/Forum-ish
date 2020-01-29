import React, { Component } from "react";
import IndividualPost from "../../components/IndividualPost/IndividualPost";
import "./PostListPage.css";
import PostListContext from "../../contexts/PostListContext";
import PostApiService from "../../services/post-api-service";
import { Link } from "react-router-dom";

// Main page route, rendering all individual posts summary snippets.

export class PostListPage extends Component {
  static contextType = PostListContext;

  componentDidMount() {
    this.context.clearError();
    PostApiService.getPosts()
      .then(this.context.setPostList)
      .catch(this.context.setError);
  }
  renderPosts() {
    const { postList = [] } = this.context;
    return postList.map(post => <IndividualPost key={post.id} post={post} />);
  }
  render() {
    const { error } = this.context;
    return (
      <section className="PostListPage">
        <header className="PostListPage_header">
          <p className="Post_feed">Post Feed</p>

          <Link className="AddPost_button" to="/make-post">
            Add post
          </Link>
        </header>
        <div className="PostListPage_panels">
          {error ? <p>An error has ocurred</p> : this.renderPosts()}
        </div>
      </section>
    );
  }
}

export default PostListPage;
