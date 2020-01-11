import React, { Component } from 'react';
import './App.css'
import Router from './Navigation/Router.js'
import { getCurrentUser } from './API/CTAManagerAPI.js'


class App extends Component {
  state = {
    registeredMember: null,
    isAuthenticated: false
  }

  loadCurrentUser = () => {

    getCurrentUser().then(user => {
      this.setState({
        registeredMember: user,
        isAuthenticated: true
      })
    }).catch(error => {
      
    });

  }

  componentDidMount() {
    this.loadCurrentUser()
  }

  handleLogout = () => {
    localStorage.removeItem("accessToken");

    this.setState({
      registeredMember: null,
      isAuthenticated: false
    });

  }

  render() {
    return (
      <div id="App">
        <Router loggedMember={this.state.registeredMember} onUserLogin={this.loadCurrentUser} onUserLogout={this.handleLogout} />
      </div>
    )
  }
}

export default App;
