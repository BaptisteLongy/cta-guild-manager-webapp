import React, { Component } from 'react'
import './HeroModification.css'
import { updateHero, createHero } from './MemberHerosListAPI.js'

class HeroModification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newStars: 0,
            newAwakenings: 0
        };

        this.handleStarsChange = this.handleStarsChange.bind(this);
        this.handleAwakeningsChange = this.handleAwakeningsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.hero != null) {
            this.setState({
                newStars: this.props.hero.stars,
                newAwakenings: this.props.hero.awakenings
            })
        }
    }


    handleStarsChange(event) {
        this.setState({ newStars: event.target.value });
    }

    handleAwakeningsChange(event) {
        this.setState({ newAwakenings: event.target.value });
    }

    handleSubmit(event) {
        var modifiedHero
        event.preventDefault()
        if (this.props.hero == null) {
            createHero(this.props.memberId, this.props.heroDefinition, this.state.newStars, this.state.newAwakenings).then((response) => {
                this.props.closePopup()
                this.props.creationCallback(this.props.memberId)
            })
        } else {
            modifiedHero = this.props.hero
            modifiedHero.stars = this.state.newStars
            modifiedHero.awakenings = this.state.newAwakenings
            updateHero(this.props.memberId, modifiedHero).then((response) => {
                this.props.closePopup()
                this.props.creationCallback(this.props.memberId)
            })
        }

    }

    render() {
        return (
            <div className='heroModificationPopup'>
                <div className='heroModificationPopup_inner'>
                    <h1>{this.props.heroDefinition.name}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="heroForm">
                            <p>
                                <label>
                                    Etoiles :
                       <input type="text" value={this.state.newStars} onChange={this.handleStarsChange} />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Eveils :
                       <input type="text" value={this.state.newAwakenings} onChange={this.handleAwakeningsChange} />
                                </label>
                            </p>
                        </div>
                        <div className="button-bar">
                            <input type="submit" value="Modifier" />
                            <input type="button" value="Annuler" onClick={() => this.props.closePopup()} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default HeroModification