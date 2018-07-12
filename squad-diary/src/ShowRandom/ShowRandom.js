import React, { Component } from "react";

class ShowRandom extends Component {
  componentDidMount() {
    this.props.getEntries();
  }
  render() {
    // let entries = this.props.entries.map(entry => entry.content);
    let random = this.props.entries[
      Math.floor(Math.random() * this.props.entries.length)
    ];
    return (
      <div>
        Week {random && random.weekNumber}
        <br />
        {random && random.content}
      </div>
    );
  }
}

export default ShowRandom;
