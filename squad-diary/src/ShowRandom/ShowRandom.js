import React, { Component } from "react";

class ShowRandom extends Component {
  componentDidMount() {
    this.props.getEntries();
  }
  render() {
    let random = this.props.entries[
      Math.floor(Math.random() * this.props.entries.length)
    ];
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2" />
          <div className="card">
            <div className="card-header">
              Welcome to the Squad Diary
              <p className="card-text">
                This is a space where you can find encouragement and motivation,
                share how you feel at any point during your cohort and realize
                you are not alone.<br />
                Go ahead and share your experience. The good, the bad and the
                ugly! <br />
                If you have an amazing lunch conversation please share! We would
                love to know!<br />
                If you have a particular week in mind head over and see how
                different/simmilar is your experience!<br />
                We are so glad you are here! Welcome to GA family!
                <br />
              </p>
            </div>
          </div>
          <blockquote class="quote-card">
            <p>{random && random.content}</p>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default ShowRandom;
