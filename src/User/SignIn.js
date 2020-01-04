import React, { Component } from "react";
import { login } from '../API/CTAManagerAPI.js'

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }
    }

    handleSignInSubmit = (event) => {
        event.preventDefault()
        login(this.state.login, this.state.password)
            .then((response) => localStorage.setItem("accessToken", response.accessToken)

            )
    }

    handleUsernameInput = (event) => {
        event.preventDefault()
        this.setState({ login: event.target.value })
    }

    handlePasswordInput = (event) => {
        event.preventDefault()
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSignInSubmit}>
                    <h3>Se connecter</h3>
                    <div className="form-group">
                        <label>Username/Email</label>
                        <input className="form-control" placeholder="Qui es-tu ?" onChange={this.handleUsernameInput} />
                    </div>

                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input type="password" className="form-control" placeholder="Mot de passe" onChange={this.handlePasswordInput} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi (ça ne sert à rien pour le moment ! Je me souviens de toi !)</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        <a href="/">Mot de passe oublié ?</a>
                    </p>
                </form>
            </div>
        );
    }
}