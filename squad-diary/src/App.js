import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: []
    };

    if (window.location.origin === "http://localhost:3000") {
      this.origin = "http://localhost:4000";
    } else {
      this.origin = "https://cryptic-meadow-80214.herokuapp.com";
    }
  }
  getEntries = () => {
    axios
      .get(`${this.origin}`)
      .then(results => {
        this.setState({ items: results.data });
        console.log(results.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getEntries();
  }

  render() {
    return (
      <div className="App">
        <h1>TITLE PAGE</h1>
      </div>
    );
  }
}

export default App;
