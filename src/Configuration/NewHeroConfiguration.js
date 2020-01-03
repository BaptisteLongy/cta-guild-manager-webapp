import React, { Component } from 'react'
import './NewHeroConfiguration.css'
import { addNewHeroConfiguration } from '../API/CTAManagerAPI.js'

class NewHeroConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = { heroName: '', heroElement: '' };

        this.handleHeroNameChange = this.handleHeroNameChange.bind(this);
        this.handleHeroElementChange = this.handleHeroElementChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleHeroNameChange(event) {
        this.setState({ heroName: event.target.value });
    }

    handleHeroElementChange(event) {
        this.setState({ heroElement: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        addNewHeroConfiguration(this.state.heroName, this.state.heroElement).then((response) => {
            this.props.closePopup()
            this.props.configurationCreationCallback()
        })

    }

    render() {
        return (
            <div className='heroConfigurationCreationPopup'>
                <div className='heroConfigurationCreationPopup_inner'>
                    <h1>Nouveau héros</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="heroConfigurationCreationForm">
                            <label>Nom du héros :
                           <input type="text" value={this.state.heroName} onChange={this.handleHeroNameChange} />
                            </label>
                            <label>Type du héros :
                            <select onChange={this.handleHeroElementChange} >
                                    <option value="Water" >Water</option>
                                    <option value="Fire" >Fire</option>
                                    <option value="Earth" >Earth</option>
                                    <option value="Light" >Light</option>
                                    <option value="Dark" >Dark</option>
                                </select>
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

export default NewHeroConfiguration