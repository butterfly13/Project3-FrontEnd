import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowListAll extends Component {
  render() {
    console.log(this.props);
    let entries = this.props.entries.map(entry => {
      return (
        <li>
          <Link to={`/entry/${entry.weekNumber}`}>Week {entry.weekNumber}</Link>
          <h3>{entry.content}</h3>
        </li>
      );
    });
    return (
      <div>
        <ul>{entries}</ul>
      </div>
    );
  }
}

export default ShowListAll;
