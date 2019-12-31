import React, { Component } from 'react'
import './MemberCreation.css'
import { addNewMember } from './MemberListAPI.js'

class MemberCreation extends Component {
    constructor(props) {
        super(props);
        this.state = { memberName: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ memberName: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        addNewMember(this.state.memberName).then((response) => {
            this.props.closePopup()
            this.props.creationCallback()
        })

    }

    render() {
        return (
            <div className='memberCreationPopup'>
                <div className='memberCreationPopup_inner'>
                    <h1>Nouveau membre</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="memberForm">
                            <label>
                                Nom :
                           <input type="text" value={this.state.memberName} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="button-bar">
                            <input type="submit" value="Créer" />
                            <input type="button" value="Annuler" onClick={() => this.props.closePopup()} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default MemberCreation