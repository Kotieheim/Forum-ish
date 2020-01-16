import React, { Component } from "react";
import "./PostPage.css";
import posts from "../stores/PostStore";

export class PostPage extends Component {
  render() {
    console.log(posts);
    return (
      <div>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
          consequuntur deserunt commodi, nobis qui inventore corrupti iusto
          aliquid debitis unde non. Adipisci, pariatur. Molestiae, libero esse
          hic adipisci autem neque?
        </p>
        <img
          src="https://i.picsum.photos/id/434/400/300.jpg"
          alt="placeholder"
        />
        <div className="Individual_post">
          {posts.posts.map(item => {
            return (
              <div className="Individual_post_itm" key={item.title}>
                <h4>{item.author.user_name}</h4>
                <p>{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostPage;
