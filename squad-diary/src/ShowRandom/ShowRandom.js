import React, { Component } from "react";

class ShowRandom extends Component {
  componentDidMount() {
    this.props.getEntries();
  }
  render() {
    let entries = this.props.entries.map(entry => {
      return (
        <div>
          <h2>Week {entry.weekNumber}</h2>
          <h3>{entry.content}</h3>
        </div>
      );
    });
    console.log(this.props.entries);
    return (
      <div>
        <h1 />
      </div>
    );
  }
}

export default ShowRandom;
