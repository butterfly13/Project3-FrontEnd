import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowListAll extends Component {
  componentDidMount() {
    this.props.getEntries();
  }
  render() {
    let entries = this.props.entries.map(entry => {
      return (
        <div>
          <h2>
            Week <Link to={`/entry/${entry._id}`}>{entry.weekNumber}</Link>
          </h2>
          <h3>{entry.content}</h3>
        </div>
      );
    });
    console.log(entries);
    return (
      <div>
        <h1>{entries}</h1>
      </div>
    );
  }
}

export default ShowListAll;
