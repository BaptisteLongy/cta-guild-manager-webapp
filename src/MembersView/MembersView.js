import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { getMemberList } from '../MemberList/MemberListAPI.js'
import { getMemberHerosList } from '../MemberHerosList/MemberHerosListAPI.js'
import './MembersView.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { isMobile } from 'react-device-detect';
import HeroCard from '../Heros/HeroCard.js'
import Form from 'react-bootstrap/Form'

class MembersView extends Component {
    state = {
        herosList: [],
        searchedMember: '',
        searchedHero: '',
        searchedElement: '',
        sortSelection: '',
    }

    componentDidMount() {
        getMemberList().then(
            (memberList) => {
                memberList.forEach(
                    (member) => {
                        getMemberHerosList(member.username).then(
                            (herosList) => {
                                var newHeroList = [...this.state.herosList, ...herosList]
                                this.setState({
                                    herosList: newHeroList
                                })
                            }
                        )
                    }
                )
            }
        )
    }

    handleMemberSearch = (event) => {
        event.preventDefault()
        this.setState({ searchedMember: event.target.value })
    }

    handleHeroSearch = (event) => {
        event.preventDefault()
        this.setState({ searchedHero: event.target.value })
    }

    handleElementSearch = (event) => {
        event.preventDefault()
        this.setState({ searchedElement: event.target.value })
    }

    handleSortSelection = (event) => {
        event.preventDefault()
        this.setState({ sortSelection: event.target.value })
    }

    sortHeroList = (a, b) => {
        if (this.state.sortSelection === 'Eveils') {
            return b.awakenings - a.awakenings
        } else {
            return b.stars - a.stars
        }
    }

    herosListFilter = (hero) => {
        var isMatching

        isMatching = hero.owner.name.toLowerCase().includes(this.state.searchedMember.toLowerCase())

        isMatching = isMatching && hero.definition.name.toLowerCase().includes(this.state.searchedHero.toLowerCase())

        if (this.state.searchedElement !== '' && this.state.searchedElement !== 'All') {
            isMatching = isMatching && hero.definition.element === this.state.searchedElement
        }

        return isMatching
    }



    renderComputer = () => {
        const columns = [{
            dataField: 'id',
            text: 'ID',
            hidden: true
        },
        {
            dataField: 'owner.name',
            text: 'Membre',
            filter: textFilter(),
            sort: true
        }, {
            dataField: 'definition.name',
            text: 'Héros',
            sort: true
        },
        {
            dataField: 'stars',
            text: 'Etoiles',
            sort: true
        },
        {
            dataField: 'awakenings',
            text: 'Eveils',
            sort: true
        }

        ];

        return (
            <div className="heroTable">
                <BootstrapTable keyField='id' data={this.state.herosList} columns={columns} filter={filterFactory()} />
            </div>
        )
    }

    renderMobile = () => {
        return (
            <div>
                <Form>
                    <Form.Group >
                        <Form.Control placeholder="Membre" onChange={this.handleMemberSearch} />
                        <Form.Control placeholder="Heros" onChange={this.handleHeroSearch} />

                        <Form.Label>Element</Form.Label>
                        <Form.Control as="select" onChange={this.handleElementSearch}>
                            <option>All</option>
                            <option>Water</option>
                            <option>Fire</option>
                            <option>Earth</option>
                            <option>Light</option>
                            <option>Dark</option>
                        </Form.Control>
                        <Form.Label>Tri</Form.Label>
                        <Form.Control as="select" onChange={this.handleSortSelection}>
                            <option>Etoiles</option>
                            <option>Eveils</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                {this.state.herosList.filter(this.herosListFilter)
                    .sort(this.sortHeroList)
                    .map(
                        (hero) => (<HeroCard key={hero.id} hero={hero} />)
                    )}
            </div>
        )
    }

    render() {

        if (isMobile) {
            return this.renderMobile()
        } else {
            return this.renderComputer()
        }
    }
}

export default MembersView