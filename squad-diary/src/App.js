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
