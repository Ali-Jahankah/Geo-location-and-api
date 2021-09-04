import React, { Component } from "react";
import GetSeason from "./Season";

class Nav extends Component {
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  state = {};
  render() {
    return (
      <>
        {
          <div>
            <GetSeason lat={this.state.lat} />
          </div>
        }
        {this.state.errorMessage && <h1>{this.state.errorMessage}</h1>}
        {this.state.lat && <h1>latitude= {this.state.lat}</h1>}
        {this.state.long && <h1>longitude={this.state.long}</h1>}
        <br />
      </>
    );
  }
}

export default Nav;
