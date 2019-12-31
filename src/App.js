import React, { Component } from 'react';
import './App.css'
import Router from './Navigation/Router.js'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Router />
      </div>
    )
  }
}

export default App;
