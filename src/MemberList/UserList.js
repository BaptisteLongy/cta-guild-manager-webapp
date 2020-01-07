import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { getUserList } from '../API/CTAManagerAPI.js'

class User {
    constructor(id, name, isMember, isAdmin) {
        this.id = id;
        this.name = name;
        this.isMember = isMember;
        this.isAdmin = isAdmin;
    }
}

function Checkbox(cell) {
    if (cell === true) {
        return <input type="checkbox" checked />
    }
    else {
        return <input type="checkbox" />
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
            formatter: (cell) => Checkbox(cell)
        },
        {
            dataField: 'isAdmin',
            text: 'Administrateur',
            formatter: (cell) => Checkbox(cell)
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