import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import LunchTopic from "./LunchTopic/LunchTopic";
import ShowAdmin from "./ShowAdmin/ShowAdmin";
import ShowListAll from "./ShowListAll/ShowListAll";
import ShowListWeek from "./ShowListWeek/ShowListWeek";
import ShowRandom from "./ShowRandom/ShowRandom";
import NewTopic from "./NewTopic/NewTopic";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      topic: [],
      admin: null
    };

    if (window.location.origin === "http://localhost:3000") {
      this.origin = "http://localhost:4000";
    } else {
      this.origin = "https://murmuring-badlands-90875.herokuapp.com";
    }
  }
  onClickAdmin = e => {
    e.preventDefault();
    this.state.admin = true;
    console.log(this.state.admin);
  };
  getEntries = () => {
    axios
      .get(`${this.origin}/entry`)
      .then(results => {
        this.setState({ entries: results.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getEntries();
    this.getLunchTopic();
    console.log(this.state.admin);
  }
  getLunchTopic = () => {
    axios
      .get(`${this.origin}`)
      .then(results => {
        this.setState({ topic: results.data });
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
            <Link to="/entry">All</Link>
            <Link to="/newEntry">Add New Entry</Link>
          </nav>
        </header>
        <main>
          <Route
            path="/entry"
            exact
            render={routerParams => {
              return (
                <ShowListAll
                  entries={this.state.entries}
                  admin={this.state.admin}
                  getEntries={this.getEntries}
                  {...routerParams}
                />
              );
            }}
          />
          <Route
            path="/entry/:weekNumber"
            exact
            render={routerParams => {
              return (
                <ShowListWeek
                  entries={this.state.entries}
                  admin={this.state.admin}
                  getEntries={this.getEntries}
                  {...routerParams}
                />
              );
            }}
          />
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
          <Route path="/newEntry" component={NewTopic} />
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
            path="/5b463c0cd3af23f8ef66d953"
            render={routerParams => {
              return (
                <ShowAdmin onClickAdmin={this.onClickAdmin} {...routerParams} />
              );
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
