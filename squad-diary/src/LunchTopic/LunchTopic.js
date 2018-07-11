import React, { Component } from "react";

class LunchTopic extends Component {
  componentDidMount = () => {
    this.props.getLunchTopic();
  };

  render() {
    let topics = this.props.topic.map(topics => topics.content);
    let topic = topics[Math.floor(Math.random() * topics.length)];
    return (
      <div>
        <h6>Suggested Lunch Topic: {topic}</h6>
      </div>
    );
  }
}

export default LunchTopic;
