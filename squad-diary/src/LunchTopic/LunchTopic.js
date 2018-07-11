import React, { Component } from "react";

class LunchTopic extends Component {
  componentDidMount = () => {
    this.props.getLunchTopic();
  };

  render() {
    console.log(this.props.topic);
    let topics = this.props.topic.map(topics => topics.content);
    console.log(topics);
    let topic = topics[Math.floor(Math.random() * topics.length)];
    return (
      <div>
        <h1>{topic}</h1>
      </div>
    );
  }
}

export default LunchTopic;
