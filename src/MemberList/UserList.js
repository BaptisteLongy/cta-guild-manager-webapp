import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import { getUserList, updateUserRoles } from '../API/CTAManagerAPI.js'

class User {
    constructor(id, username, name, isMember, isAdmin) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.isMember = isMember;
        this.isAdmin = isAdmin;
    }
}

class UserList extends Component {
    state = {
        userList: []
    }

    componentDidMount() {
        getUserList().then((response) => {
            var theUserList = []
            var theUser
            response.forEach(element => {
                theUser = new User(element.id, element.username, element.name, "Non", "Non")
                if (element.roles.some(e => e.name === 'ROLE_MEMBER')) {
                    theUser.isMember = "Oui"
                }
                if (element.roles.some(e => e.name === 'ROLE_ADMIN')) {
                    theUser.isAdmin = "Oui"
                }
                theUserList.push(theUser)
            });
            this.setState({ userList: theUserList })
        })
    }

    updateRoles = (row) => {
        var isMember, isAdmin

        // eslint-disable-next-line
        if (row.isMember == "Oui") { isMember = true } else { (isMember = false) }
        // eslint-disable-next-line
        if (row.isAdmin == "Oui") { (isAdmin = true) } else { (isAdmin = false) }
        updateUserRoles(row.username, isMember, isAdmin)
    }

    render() {
        const columns = [{
            dataField: 'id',
            text: 'ID',
            hidden: true
        },
        {
            dataField: 'username',
            text: 'login',
            hidden: true
        },
        {
            dataField: 'name',
            text: 'Utilisateur',
            filter: textFilter(),
            sort: true
        }, {
            dataField: 'isMember',
            text: 'Membre',
            sort: true,
            editor: {
                type: Type.SELECT,
                options: [{
                    value: 'Oui',
                    label: 'Oui'
                }, {
                    value: 'Non',
                    label: 'Non'
                }
                ]
            }
        },
        {
            dataField: 'isAdmin',
            text: 'Administrateur',
            sort: true,
            editor: {
                type: Type.SELECT,
                options: [{
                    value: 'Oui',
                    label: 'Oui'
                }, {
                    value: 'Non',
                    label: 'Non'
                }
                ]
            }
        },
        ];

        return (
            <div className="userTable">
                <BootstrapTable
                    keyField='id'
                    data={this.state.userList}
                    columns={columns}
                    filter={filterFactory()}
                    cellEdit={cellEditFactory({
                        mode: 'click',
                        afterSaveCell: (oldValue, newValue, row, column) => this.updateRoles(row),
                        blurToSave: true
                    })} />
            </div>
        )
    }

}

export default UserList