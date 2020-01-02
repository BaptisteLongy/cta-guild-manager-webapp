import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { getMemberList } from '../MemberList/MemberListAPI.js'
import { getMemberHerosList } from '../MemberHerosList/MemberHerosListAPI.js'
import './MembersView.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class MembersView extends Component {
    state = {
        herosList: []
    }

    componentDidMount() {
        getMemberList().then(
            (memberList) => {
                memberList.map(
                    (member) => {
                        getMemberHerosList(member.id).then(
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

    render() {
        const columns = [ {
            dataField: 'id',
            text: 'ID',
            hidden: true
          },
          {
            dataField: 'owner.name',
            text: 'Membre',
            filter: textFilter(),
            sort: true
        },  {
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
                <BootstrapTable keyField='id' data={this.state.herosList} columns={columns} filter={ filterFactory() }/>
            </div>
        )
    }
}

export default MembersView