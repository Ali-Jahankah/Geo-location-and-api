import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  state = {
    user: "",
  };
  render() {
    return (
      <React.Fragment>
        <div class="comment-box">
          <div class="comment-avatar comment-child">
            <img
              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              width="150px"
              height="150px"
            ></img>
          </div>

          <h3 class="comment-name comment-child"></h3>
          <div class="comment-text comment-child">
            lorem ipsum dolor sit amet, consectetur adipis
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Comment;
