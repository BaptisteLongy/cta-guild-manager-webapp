import React, { Component } from 'react';
import './Home.css'
import { getMemberList } from '../MemberList/MemberListAPI.js'


class Home extends Component {
  state = {
    memberList: []
  }

  updateMemberList = () => {
    getMemberList()
      .then((data) => { this.setState({ memberList: data }) })
  }

  componentDidMount() {
    this.updateMemberList()
  }

  saveLoggedMember = (event) => {
    event.preventDefault()
    this.props.onMemberSelected(event.target.value)
  }

  render() {
    return (
      <div>
        <h1>Bienvenue sur le CTA Manager de Bugs !</h1>
        <div className="memberSelector">
          <select onChange={this.saveLoggedMember} >
            {this.state.memberList.map(
              (member) => {
              return <option value={member.id} key={member.id}>{member.name}</option>
              }
            )}
          </select>
          </div>
      </div>
    )
  }
}

export default Home;