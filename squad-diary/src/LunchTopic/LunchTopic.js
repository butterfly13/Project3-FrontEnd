import React, { Component } from "react";
import "./LunchTopic.css";

class LunchTopic extends Component {
  componentDidMount = () => {
    this.props.getLunchTopic();
  };

  render() {
    let topics = this.props.topic.map(topics => topics.content);
    let topic = topics[Math.floor(Math.random() * topics.length)];
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col-lg-2 col-md-2 "> </div>
      //     <div className="col-lg-8 col-md-8 col-sm-12">
      //       <h4>Suggested Lunch Topic: </h4>
      //       <div className="alert alert-success" role="alert">
      //         <p className="mb-0">{topic}</p>
      //       </div>
      //     </div>
      //     <div className="col-lg-8 col-md-8 col-sm-12"> </div>
      //   </div>
      // </div>
      // <div class="container">
      <div>
        // <div className="row">
          {/* <div className="col-lg-1 col-md-2" /> */}
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="container">
              <blockquote className="quote-card">
                <p>When you need a break have a conversation about:</p>
                <button className="btn btn-lg btn-block btn-secondary off">
                  {topic}
                </button>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LunchTopic;
