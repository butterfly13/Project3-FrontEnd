import React, { Component } from "react";

class ShowRandom extends Component {
  componentDidMount() {
    this.props.getEntries();
  }
  render() {
    let entries = this.props.entries.map(entry => entry.content);

    return (
      <div>
        <h1 />
      </div>
    );
  }
}

export default ShowRandom;
