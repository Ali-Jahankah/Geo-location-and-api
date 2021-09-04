import React, { Component } from "react";
import "./Form.css";
import Comment from "./NewComment";

class Newform extends Component {
  constructor(props) {
    super(props);
    this.button = React.createRef();
  }
  state = {
    userName: "",
    comment: "",
    search: "",
  };
  sub(e) {
    e.preventDefault();
    this.props.userProps(this.state.userName);
  }
  searching = () => {
    this.props.userSearch(this.state.search);
  };

  render() {
    return (
      <>
        <main id="main">
          <form className="data-form" onSubmit={this.sub.bind(this)}>
            <h1 className="form-title">Write Your Comment!</h1>
            <input
              type="text"
              name="user"
              className="form-username"
              placeholder="Full Name"
              onChange={(e) => {
                this.setState({
                  userName: e.target.value,
                });
              }}
              value={this.state.userName}
            ></input>
            <textarea
              className="form-text"
              placeholder="Write your comment..."
              onChange={(e) => {
                this.setState({
                  comment: e.target.value,
                });
              }}
              value={this.state.comment}
            ></textarea>
            <hr />
            <label forhtml="formAvatar">
              Please upload your avatar:
              <input
                type="file"
                name="avatar"
                id="formAvatar"
                className="form-avatar"
              ></input>
            </label>
            <br />

            <br />
            <br />
            <button type="submit" className="form-submit" ref={this.button}>
              Submit
            </button>
          </form>
          <br />
          <div className="search-div">
            <input
              type="text"
              placeholder="search your favourite..."
              className="search-bar"
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
              value={this.state.search}
            ></input>
            <br></br>
            <button
              type="button"
              className="search-button"
              onClick={this.searching.bind(this)}
            >
              SEARCH
            </button>
          </div>
        </main>
      </>
    );
  }
}

export default Newform;
