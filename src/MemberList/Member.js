import React, { Component } from 'react'
import './Member.css'
import { deleteMember } from './MemberListAPI.js'

class Member extends Component {

    deleteTheMember = () => {
        deleteMember(this.props.member.id)
        .then(() => this.props.deleteMemberCallback()
        )
    }

    render() {
        return (
            <div className="member">
                <p>{this.props.member.name}</p>
                <button type="button" onClick={() => this.deleteTheMember()} className="DeleteButton">Supprimer</button>
            </div>
        )
    }
}

export default Member