import React, { Component } from "react";
import Logo from "../Logo";

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
          <div className="card">
            <div className="card-header">
              <h1>Welcome to the Squad Diary</h1>
              <p className="card-text">
                This is a space where you can find encouragement and motivation,
                share how you feel at any point during your cohort and realize
                you are not alone.
              </p>
              <p className="card-text">
                Go ahead and share your experience. The good, the bad and the
                ugly!{" "}
              </p>
              <p className="card-text">
                If you have an amazing lunch conversation please share! We would
                love to know!
              </p>
              <p className="card-text">
                If you have a particular week in mind head over and see how
                different/similar is your experience!
              </p>
              <p className="card-text">
                We are so glad you are here! Welcome to <Logo /> family!
              </p>
            </div>
          </div>
          {/* <div className="row"> */}
          {/* <div className="col-lg-10"> */}
          <blockquote class="quote-card">
            <p>{random && random.content}</p>
          </blockquote>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div> 
    );
  }
}

export default ShowRandom;
