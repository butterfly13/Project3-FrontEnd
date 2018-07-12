import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class ShowListAll extends Component {
  redirectToTarget = () => {
    this.props.history.push(`/entry`);
  };
  render() {
    if (window.location.origin === "http://localhost:3000") {
      this.origin = "http://localhost:4000";
    } else {
      this.origin = "https://boiling-dusk-74498.herokuapp.com";
    }
    let entries = this.props.entries.map(entry => {
      if (this.props.admin) {
        return (
          <li key={entry._id}>
            <Link to={`/entry/${entry.weekNumber}`}>
              Week {entry.weekNumber}
            </Link>
            <h3>{entry.content}</h3>
            <button
              onClick={e => {
                e.preventDefault();
                axios
                  .delete(`${this.origin}/entry/${entry._id}`)
                  .then(() => {
                    this.props.getEntries();
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
          </li>
        );
      } else {
        return (
          <li>
            <Link to={`/entry/${entry.weekNumber}`}>
              Week {entry.weekNumber}
            </Link>
            <h3>{entry.content}</h3>
          </li>
        );
      }
    });
    return (
      <div>
        <ul>{entries}</ul>
      </div>
    );
  }
}

export default ShowListAll;
