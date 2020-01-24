import React, { Component } from "react";
import AddPost from "../../components/AddPost/AddPost";
import "./MakePostPage.css";

export class MakePostPage extends Component {
  render() {
    return (
      <div className="MakePostPage">
        <h2 className="MakePost_title">Make a post!</h2>
        <AddPost />
      </div>
    );
  }
}

export default MakePostPage;
