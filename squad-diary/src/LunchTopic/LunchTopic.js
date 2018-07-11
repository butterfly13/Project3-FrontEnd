import React, { Component } from "react";

class LunchTopic extends Component {
  componentDidMount = () => {
    this.props.getLunchTopic();
  };

  render() {
    console.log(this.props.topic);
    return (
      <div>
        <h1>LunchTopic</h1>
      </div>
    );
  }
}

export default LunchTopic;
