import React, { Component } from 'react'
import { getHerosConfigurationList, updateHeroConfiguration } from '../API/CTAManagerAPI.js'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import './HerosConfiguration.css'
import NewHeroConfiguration from './NewHeroConfiguration.js'

class HerosConfiguration extends Component {
    state = {
        herosConfigurationList: [],
        showNewHeroConfigurationPopup: false
    }

    updateHerosConfigurationList = () => {
        getHerosConfigurationList().then(
            (data) => this.setState({ herosConfigurationList: data })
        )
    }

    componentDidMount() {
        this.updateHerosConfigurationList()
    }

    updateHeroConfiguration = (row) => {
        updateHeroConfiguration(row.id, row.name, row.element).then(
            () => this.updateHerosConfigurationList()
        )

    }

    toggleNewHeroConfigurationPopup() {
        this.setState({
            showNewHeroConfigurationPopup: !this.state.showNewHeroConfigurationPopup
        });
    }

    render() {
        const columns = [{
            dataField: 'id',
            text: 'ID',
            hidden: true
        },
        {
            dataField: 'name',
            text: 'Nom',
            sort: true
        }, {
            dataField: 'element',
            text: 'Elément',
            sort: true,
            editor: {
                type: Type.SELECT,
                options: [{
                    value: 'Water',
                    label: 'Water'
                }, {
                    value: 'Fire',
                    label: 'Fire'
                }, {
                    value: 'Earth',
                    label: 'Earth'
                }, {
                    value: 'Light',
                    label: 'Light'
                }, {
                    value: 'Dark',
                    label: 'Dark'
                }]
            }
        }];

        return (
            <div className="heroTable">
                <BootstrapTable keyField='id'
                    data={this.state.herosConfigurationList}
                    columns={columns}
                    cellEdit={cellEditFactory({
                        mode: 'click',
                        afterSaveCell: (oldValue, newValue, row, column) => this.updateHeroConfiguration(row),
                        blurToSave: true
                    })}
                />
                <div className="newHeroConfiguration">
                    <button onClick={this.toggleNewHeroConfigurationPopup.bind(this)}>Ajouter un héros</button>
                    {this.state.showNewHeroConfigurationPopup ?
                        <NewHeroConfiguration
                            closePopup={this.toggleNewHeroConfigurationPopup.bind(this)}
                            configurationCreationCallback={this.updateHerosConfigurationList}
                        />
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default HerosConfiguration