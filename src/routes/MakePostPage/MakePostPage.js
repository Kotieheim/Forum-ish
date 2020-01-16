import React, { Component } from "react";
import AddPost from "../../components/AddPost/AddPost";
import "./MakePostPage.css";

export class MakePostPage extends Component {
  render() {
    return (
      <div>
        <h2>Post something! (or else)</h2>
        <AddPost />
      </div>
    );
  }
}

export default MakePostPage;
