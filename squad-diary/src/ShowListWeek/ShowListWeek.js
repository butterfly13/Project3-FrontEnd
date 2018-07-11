import React, { Component } from "react";
import axios from "axios";

class ShowListWeek extends Component {
  constructor(props) {
    super();
    this.state = {
      weekEntries: []
    };
  }
  componentDidMount() {
    this.getWeek();
  }

  getWeek = () => {
    axios
      .get(`http://localhost:4000/entry/${this.props.match.params.weekNumber}`)
      .then(results => {
        this.setState({ weekEntries: results.data });
        console.log(results.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    let week = this.state.weekEntries.map(entry => {
      if (this.props.admin) {
        return (
          <div>
            {entry.content}
            <button type="submit">Delete</button>
          </div>
        );
      } else {
        return <div>{entry.content}</div>;
      }
    });
    return (
      <div>
        <h1>Week {this.props.match.params.weekNumber}</h1>
        {week}
      </div>
    );
  }
}

export default ShowListWeek;
