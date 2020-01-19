import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IndividualPost.css";
import Moment from "moment";
export class IndividualPost extends Component {
  render() {
    Moment.locale("en");
    const { post } = this.props;
    return (
      <Link to={`/post/${post.id}`} className="IndividualPost">
        <header className="IndividualPost_header">
          <span className="item-author">author: {post.author.user_name}</span>
          <span>{Moment(post.date_created).format("MMM do YYYY")}</span>
          <footer className="IndividualItem_footer">
            <h2 className="IndividualPost_title">{post.title}</h2>
            <span className="item-style">topic: {post.style}</span>
            <span className="item-comments">
              comments: {post.number_of_comments}
            </span>
            <p>Read more...</p>
          </footer>
        </header>
      </Link>
    );
  }
}

export default IndividualPost;
