import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IndividualPost.css";
export class IndividualPost extends Component {
  render() {
    let posts = this.props.posts;
    console.log(posts);
    return (
      <div className="Individual_post">
        {posts.posts.map(item => {
          return (
            <div className="Individual_post_itm" key={item.title}>
              <Link className="Post-itm" to="/post">
                <header>
                  <h2>{item.title}</h2>
                </header>
                <h4>{item.style}</h4>
                <p>{item.content}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default IndividualPost;
