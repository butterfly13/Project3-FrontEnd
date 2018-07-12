import React, { Component } from "react";
import axios from "axios";
import './NewTopic.css'

class NewTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newLunchTopic: "",
      newEntry: "",
      weekNumber: null
    };

    if (window.location.origin === "http://localhost:3000") {
      this.origin = "http://localhost:4000";
    } else {
      this.origin = "https://boiling-dusk-74498.herokuapp.com";
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewEntry = this.handleNewEntry.bind(this);
    this.handleNewTopic = this.handleNewTopic.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleNewTopic() {
    if (this.state.newLunchTopic.length > 0) {
      const newLunchTopic = {
        content: this.state.newLunchTopic
      };
      axios
        .post(`${this.origin}`, { newLunchTopic })
        .then(res => {
          console.log(res);
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    // to clear out the input form after the user hits submit
    this.setState({
      newLunchTopic: ""
      
    });
  }

  handleNewEntry() {
    console.log(this.state.weekNumber);
    if (
      this.state.weekNumber > 0 &&
      this.state.weekNumber < 13 &&
      this.state.newEntry.length > 0
    ) {
      axios
        .post(`${this.origin}/entry`, {
          weekNumber: this.state.weekNumber,
          content: this.state.newEntry
        })
        .then(res => {
          console.log(`in handleNewEntry`);
        });
    }
    // to clear out the input form after the user hits submit
    this.setState({
      //   newLunchTopic: "",
      newEntry: "",
      weekNumber: null
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleNewTopic();
    this.handleNewEntry();
    this.props.history.push("/entry");
  }
  render() {
    return (
      <div className="container">
           <h3>Add New Entry and Lunch Topic</h3>
           
           <div className="row">
           <div className="col-lg-2 col-md-2"></div>
           <div className="col-lg-8 col-md-8 col-sm-12">
          <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Suggest Lunch Topic:</label>
                    <textarea 
                    name="newLunchTopic"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="form-control"
                   
                  />{" "}
                 
                </div>
                <div className="form-group">
                    <label>Share Your experience:</label>
                    <textarea
                        name="newEntry"
                        value={this.state.value}
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
                        value={this.state.value}
                        onChange={this.handleChange}
                        className="form-control"
                        />{" "}
                </div>
                <button className="btn btn-lg btn-block btn-info">Add Entry / Topic</button>


            </form>
            </div>
            </div>

      </div>
    );
  }
}

export default NewTopic;
