import React, { Component } from "react";
import {createNewUser} from '../API/CTAManagerAPI.js'

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            name: ""
        }
    }

    handleSignUpSubmit = (event) => {
        event.preventDefault()
        createNewUser(this.state.name, this.state.username, this.state.email, this.state.password)

    }

    handleUsernameInput = (event) => {
        event.preventDefault()
        this.setState({ username: event.target.value })
    }

    handleEmailInput = (event) => {
        event.preventDefault()
        this.setState({ email: event.target.value })
    }

    handleNameInput = (event) => {
        event.preventDefault()
        this.setState({ name: event.target.value })
    }

    handlePasswordInput = (event) => {
        event.preventDefault()
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSignUpSubmit}>
                    <h3>Se connecter</h3>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" placeholder="Ton login" onChange={this.handleUsernameInput} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" placeholder="Ton email" onChange={this.handleEmailInput} />
                    </div>

                    <div className="form-group">
                        <label>Pseudo</label>
                        <input className="form-control" placeholder="Ton pseudo ingame" onChange={this.handleNameInput} />
                    </div>

                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input type="password" className="form-control" placeholder="Mot de passe" onChange={this.handlePasswordInput} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">S'enregistrer</button>
                </form>
            </div>
        );
    }
}