import React, { Component } from "react";
import Nav from "./Navigator";
import Newform from "./Form";
import axios from "axios";
import Images from "./Images";

import Comment from "./NewComment";

class App extends Component {
  state = {
    username: "",
    userSearch: "",
    images: [],
  };
  showUser = (name) => {
    this.setState({ username: name });
  };

  async showSearch(userSearch) {
    const { data } = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        authorization: "Client-ID xbB1n6S6_XJRcSVshOewlakYkSuud82Z2IQ096l9UOo",
      },
      params: {
        query: userSearch,
      },
    });
    this.setState({ images: data.results });
  }

  render() {
    return (
      <>
        <Nav />
        <Newform
          userProps={this.showUser.bind(this)}
          userSearch={this.showSearch.bind(this)}
        />
        <h2>{this.state.username}</h2>
        <h1>{this.state.userSearch}</h1>
        <h1
          style={{
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          {this.state.images.length >= 0 &&
            "تعداد " + this.state.images.length + "عکس یافت شد"}
        </h1>
        <Images getImages={this.state.images} />
      </>
    );
  }
}

export default App;
