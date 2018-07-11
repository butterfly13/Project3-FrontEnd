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
  redirectToTarget = () => {
    this.props.history.push(`/entry/${this.props.match.params.weekNumber}`);
  };
  onClick = e => {
    e.preventDefault();
    this.props.deleteEntry();
  };
  getWeek = () => {
    axios
      .get(`http://localhost:4000/entry/${this.props.match.params.weekNumber}`)
      .then(results => {
        this.setState({ weekEntries: results.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    let week = this.state.weekEntries.map(entry => {
      if (this.props.admin) {
        return (
          <div key={entry._id}>
            {entry.content}
            <button
              onClick={e => {
                e.preventDefault();
                axios
                  .delete(`http://localhost:4000/entry/${entry._id}`)
                  .then(() => {
                    this.getWeek();
                    this.redirectToTarget();
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }}
              type="submit"
            >
              Delete
            </button>
          </div>
        );
      } else {
        return <div key={entry._id}>{entry.content}</div>;
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
