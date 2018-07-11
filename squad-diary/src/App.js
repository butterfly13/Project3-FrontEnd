import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import LunchTopic from "./LunchTopic/LunchTopic";
import ShowAdmin from "./ShowAdmin/ShowAdmin";
import ShowListAll from "./ShowListAll/ShowListAll";
import ShowListWeek from "./ShowListWeek/ShowListWeek";
import ShowRandom from "./ShowRandom/ShowRandom";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      topic: []
    };

    if (window.location.origin === "http://localhost:3000") {
      this.origin = "http://localhost:4000";
    } else {
      this.origin = "https://murmuring-badlands-90875.herokuapp.com";
    }
  }
  getEntries = () => {
    axios
      .get(`${this.origin}/entry`)
      .then(results => {
        this.setState({ entries: results.data });
        console.log(results.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getEntries();
    this.getLunchTopic();
  }
  getLunchTopic = () => {
    axios
      .get(`${this.origin}`)
      .then(results => {
        this.setState({ topic: results.data });
        console.log(results.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>TITLE PAGE</h1>
          <nav>
            <Link to="/">Random</Link>
            <Link to="/entry">All</Link>
            <Link to="/entry/:week">By week</Link>
          </nav>
        </header>
        <main>
          <Route
            path="/"
            render={routerParams => {
              return (
                <LunchTopic
                  topic={this.state.topic}
                  getLunchTopic={this.getLunchTopic}
                  {...routerParams}
                />
              );
            }}
          />
          <Route
            path="/entry"
            exact
            render={routerParams => {
              return (
                <ShowListAll
                  entries={this.state.entries}
                  getEntries={this.getEntries}
                  {...routerParams}
                />
              );
            }}
          />
          <Route path="/entry/:week" component={ShowListWeek} />
          <Route
            path="/"
            exact
            render={routerParams => {
              return (
                <ShowRandom
                  entries={this.state.entries}
                  getEntries={this.getEntries}
                  {...routerParams}
                />
              );
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
