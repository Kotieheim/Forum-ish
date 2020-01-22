import React, { Component } from "react";

export const nullPost = {
  author: {},
  tags: []
};
const PostContext = React.createContext({
  isLoggedIn: false,
  post: nullPost,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPost: () => {},
  addPost: () => {},
  clearPost: () => {},
  setComments: () => {},
  addComment: () => {},
  handleLogin: () => {},
  handleLogout: () => {}
});

export default PostContext;

export class PostProvider extends Component {
  state = {
    post: nullPost,
    error: null
  };
  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };
  setPost = post => {
    this.setState({ post });
  };
  addPost = posts => {
    console.log(this.state, posts);
    this.setState({
      post: [...this.state.post, posts]
    });
  };
  clearPost = () => {
    this.setPost(nullPost);
    this.setComments([]);
  };
  setComments = comments => {
    console.log("set comments state");
    this.setState({ comments });
  };
  clearArticle = () => {
    this.setPost(nullPost);
    this.setComments([]);
  };
  addComment = comment => {
    this.setComments([...this.state.comments, comment]);
  };
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };
  render() {
    const value = {
      post: this.state.post,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPost: this.setPost,
      addPost: this.addPost,
      setComments: this.setComments,
      clearPost: this.clearPost,
      addComment: this.addComment,
      handleLogin: this.handleLogin,
      handleLogout: this.handleLogout
    };
    return (
      <PostContext.Provider value={value}>
        {this.props.children}
      </PostContext.Provider>
    );
  }
}
