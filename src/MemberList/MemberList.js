import React, { Component } from 'react'
import { getMemberList } from './MemberListAPI.js'
import Member from './Member.js'
import MemberCreation from './MemberCreation.js'

class MemberList extends Component {
    state = {
        memberList: [],
        showMemberCreationPopup: false
    }

    toggleMemberCreationPopup() {
        this.setState({
            showMemberCreationPopup: !this.state.showMemberCreationPopup
        });
    }

    updateMemberList = () => {
        getMemberList()
            .then((data) => { this.setState({ memberList: data }) })
    }

    componentDidMount() {
        this.updateMemberList()
    }

    render() {
        return (
            <div className="memberList">
                <h1>Liste des membres de la guilde</h1>
                {this.state.memberList.map(
                    (data) => <Member member={data} key={data.id} deleteMemberCallback={this.updateMemberList}/>)
                }
                <div className="memberCreation">
                    <button onClick={this.toggleMemberCreationPopup.bind(this)}>Ajouter un membre</button>
                    {this.state.showMemberCreationPopup ?
                        <MemberCreation
                            closePopup={this.toggleMemberCreationPopup.bind(this)}
                            creationCallback={this.updateMemberList}
                        />
                        : null
                    }
                </div>
            </div>
        )

    }
}

export default MemberList