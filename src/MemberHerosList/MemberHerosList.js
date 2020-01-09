import React, { Component } from 'react'
import { getMemberHerosList, getHerosConfigurationList } from './MemberHerosListAPI.js'
import MemberHero from './MemberHero.js'
import './MemberHerosList.css'
import HeroModification from './HeroModification.js'


class MemberHerosList extends Component {
    state = {
        herosConfigurationList: [],
        herosList: [],
        showHeroModificationPopup: false,
        heroDefinitionToModify: '',
        heroToModify: '',
    }

    updateHerosList = (memberId) => {
        getMemberHerosList(memberId).then(
            (data) => { this.setState({ herosList: data }) })
    }

    updateConfiguration() {
        getHerosConfigurationList().then(
            (data) => { this.setState({ herosConfigurationList: data }) }
        )
    }

    componentDidMount() {
        this.updateConfiguration()
        this.updateHerosList(this.props.memberId.username)
    }

    findHeroForConfiguration(configuration) {
        var hero = this.state.herosList.find(
            (hero) => {
                return hero.definition.id === configuration.id
            }
        )
        return hero
    }

    renderHeroForConfiguration(configuration) {
        var hero = this.findHeroForConfiguration(configuration)

        return <MemberHero definition={configuration} hero={hero} key={configuration.id} modifyHeroCallback={this.modifyHero} />

    }

    modifyHero = (definition, hero) => {
        this.setState({ 
            heroDefinitionToModify: definition,
            heroToModify: hero })
        this.toggleHeroModificationPopup()
    }

    toggleHeroModificationPopup = () => {
        this.setState({ showHeroModificationPopup: !this.state.showHeroModificationPopup });
    }

    render() {
        return (
            <div>
                <div>
                    <table className="herosList">
                        <thead>
                            <tr>
                                <th>Héros</th>
                                <th>Etoiles</th>
                                <th>Eveils</th>
                                <th>Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.herosConfigurationList.map(
                                (data) =>
                                    this.renderHeroForConfiguration(data)

                            )}

                        </tbody>
                    </table>
                    <div className="heroModification">
                        {this.state.showHeroModificationPopup ?
                            <HeroModification
                                closePopup={this.toggleHeroModificationPopup}
                                creationCallback={this.updateHerosList}
                                heroDefinition={this.state.heroDefinitionToModify}
                                hero={this.state.heroToModify}
                                memberId={this.props.memberId}
                                key={this.state.heroDefinitionToModify.id}
                            />
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MemberHerosList