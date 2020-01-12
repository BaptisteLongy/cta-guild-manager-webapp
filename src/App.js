import React, { Component } from 'react';
import './App.css'
import Router from './Navigation/Router.js'
import { getCurrentUser, getUserInfo } from './API/CTAManagerAPI.js'


class App extends Component {
  state = {
    registeredMember: null,
    isAuthenticated: false,
    userRoles: []
  }

  loadCurrentUser = () => {

    getCurrentUser().then(user => {
      this.setState({
        registeredMember: user,
        isAuthenticated: true
      })
      this.loadUserRights()
    }).catch(error => {
      
    });

  }

  loadUserRights() {
    getUserInfo(this.state.registeredMember.username).then(
      (userInfo) => 
      this.setState({
userRoles: userInfo.roles
      })
    )
  }

  componentDidMount() {
    this.loadCurrentUser()
  }

  handleLogout = () => {
    localStorage.removeItem("accessToken");

    this.setState({
      registeredMember: null,
      isAuthenticated: false,
      userRoles: []
    });

  }

  render() {
    return (
      <div id="App">
        <Router loggedMember={this.state.registeredMember} onUserLogin={this.loadCurrentUser} onUserLogout={this.handleLogout} loggedMemberRoles={this.state.userRoles}/>
      </div>
    )
  }
}

export default App;
