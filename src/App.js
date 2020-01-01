import React, { Component } from 'react';
import './App.css'
import Router from './Navigation/Router.js'


class App extends Component {
  state= {
    registeredMember: null
  }

  registerMember = (member) => {
    this.setState({registeredMember: member})
  }

  render() {
    return (
      <div id="App">
        <Router onMemberRegistration={this.registerMember} loggedMember={this.state.registeredMember}/>
      </div>
    )
  }
}

export default App;
