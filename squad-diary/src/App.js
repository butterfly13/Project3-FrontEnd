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
import Logo from "./Logo";


class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      topic: [],
      admin: true
    };
    if (window.location.origin === "http://localhost:3000") {
      this.origin = "http://localhost:4000";
    } else {
      this.origin = "https://boiling-dusk-74498.herokuapp.com";
    }
  }

  onClickAdmin = e => {
    e.preventDefault();
    this.state.admin = true;
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
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <Logo />
          <Link to="/" className="navbar-brand">
            General Assembly
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/entry" className="nav-link">
                  All <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/newEntry" className="nav-link">
                  Add New Entry
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <h1>TITLE PAGE</h1>

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
                  deleteEntry={this.deleteEntry}
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
                  deleteEntry={this.deleteEntry}
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
