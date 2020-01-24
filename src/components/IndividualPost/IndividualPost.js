import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IndividualPost.css";
import Moment from "moment";
export class IndividualPost extends Component {
  render() {
    Moment.locale("en");
    const { post } = this.props;
    console.log(post);
    return (
      <div className="panel">
        <Link
          aria-label="conversation post"
          to={`/post/${post.id}`}
          className="IndividualPost"
        >
          <header className="IndividualPost_header">
            <div className="text top-left">
              <span>author: {post.author.user_name}</span>
              {/* <span>{Moment(post.date_created).format("MMM do YYYY")}</span> */}
            </div>
            <footer className="IndividualItem_footer">
              <h2 className="IndividualPost_title">{post.title}</h2>
              <div className="text bottom-right">
                <span>topic: {post.style}</span>
                <span>comments: {post.number_of_comments}</span>
              </div>
              <p className="read-more">Read more...</p>
            </footer>
          </header>
        </Link>
      </div>
    );
  }
}

IndividualPost.defaultProps = {
  post: []
};

export default IndividualPost;
