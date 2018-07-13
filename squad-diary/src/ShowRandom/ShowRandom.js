import React, { Component } from "react";
import './ShowRandom.css'

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
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="card">
              <div className="card-body">
                <p className="card-text">Welcome to the Squad Diaries Homepage <br /><br />
                  This is a space where students can anonymously share how they're feeling during their cohort.<br /><br /> Go ahead and click on the add new entry link and head to the form to share your experience. <br />
                  Also you can share interesting topics you've discussed with your classmates during lunch. <br /><br />If you head over to the main list of submissions, you'll able to click on the "week #" link to see all of the posts for that specific week in the cohort.
                  <br /><br />

                </p>
              </div>
            </div>
            <blockquote class="quote-card">
              <p>{random && random.content}</p>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowRandom;
