import React, { Component } from "react";
import axios from "axios";
import "./NewTopic.css";

class NewTopic extends Component {
  render() {
    return (
      <div className="container">
        <h3>Add New Entry and Lunch Topic</h3>

        <div className="row">
          <div className="col-lg-2 col-md-2" />
          <div className="col-lg-8 col-md-8 col-sm-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Suggest Lunch Topic:</label>
                <textarea
                  name="newLunchTopic"
                  onChange={this.handleChange}
                  className="form-control"
                />{" "}
              </div>
              <div className="form-group">
                <label>Share Your experience:</label>
                <textarea
                  name="newEntry"
                  onChange={this.handleChange}
                  placeholder="Your recommendation, high, or low "
                  className="form-control"
                />{" "}
              </div>
              <div className="form-group">
                <label>WeekNumber (1 - 12):</label>
                <input
                  type="number"
                  name="weekNumber"
                  onChange={this.handleChange}
                  className="form-control"
                />{" "}
              </div>
              <button className="btn btn-lg btn-block btn-info">
                Add Entry / Topic
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTopic;
