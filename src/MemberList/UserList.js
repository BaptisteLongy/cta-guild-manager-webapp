import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Type } from 'react-bootstrap-table2-editor';
import { getUserList } from '../API/CTAManagerAPI.js'

class User {
    constructor(id, name, isMember, isAdmin) {
        this.id = id;
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
                theUser = new User(element.id, element.name, false, false)
                if (element.roles.some(e => e.name === 'ROLE_MEMBER')) {
                    theUser.isMember = true
                }
                if (element.roles.some(e => e.name === 'ROLE_ADMIN')) {
                    theUser.isAdmin = true
                }
                theUserList.push(theUser)
            });
            this.setState({ userList: theUserList })
        })
    }

    updateRoles() {

    }

    render() {
        const columns = [{
            dataField: 'id',
            text: 'ID',
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
            editor: { type: Type.CHECKBOX, value: 'true:false' },
            formatter: (cell, row, rowIndex) => {
                return (<input type="checkbox" checked={cell} onChange={() => { }} />)
            }
        },
        {
            dataField: 'isAdmin',
            text: 'Administrateur',
            editor: { type: Type.CHECKBOX, value: 'true:false' },
            formatter: (cell, row, rowIndex) => {
                return (<input type="checkbox" checked={cell} onChange={() => { }} />)
            }
        }
        ];

        return (
            <div className="userTable">
                <BootstrapTable keyField='id' data={this.state.userList} columns={columns} filter={filterFactory()} />
            </div>
        )
    }

}

export default UserList