<<<<<<< HEAD
import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import LunchTopic from './LunchTopic/LunchTopic'
import ShowAdmin from './ShowAdmin/ShowAdmin'
import ShowListAll from './ShowListAll/ShowListAll'
import ShowListWeek from './ShowListWeek/ShowListWeek'
import ShowRandom from './ShowRandom/ShowRandom'
import './App.css'

class App extends Component {
  render () {
=======
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
>>>>>>> f9f47793a89a193c1771a6681d011ccc5ad9f977
    return (
      <div className='App'>
        <header>
          <h1>TITLE PAGE</h1>
          <nav>
            <Link to='/'>
          Random
            </Link>
            <Link to='/list'>
          All
            </Link>
            <Link to='/week'>
          By week
            </Link>
            <Link to='/lunch'>
          Lunch Topics
            </Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              path='/'
              component={ShowRandom}
            />
            <Route
              path='/list'
              component={ShowListAll}
            />
            <Route
              path='/week'
              component={ShowListWeek}
            />
            <Route
              path='/lunch'
              component={LunchTopic}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
