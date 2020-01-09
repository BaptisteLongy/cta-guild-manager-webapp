import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MemberHerosList from '../MemberHerosList/MemberHerosList.js'
import Home from './Home.js'
import MemberList from '../MemberList/MemberList_Deprecated.js'
import MembersView from '../MembersView/MembersView.js'
import HerosConfiguration from '../Configuration/HerosConfiguration.js'
import AppHeader from './AppHeader.js'
import SignIn from '../User/SignIn.js'
import UserList from '../MemberList/UserList.js'

// Props
// onMemberRegistration callback to pass up registered member
class Router extends Component {

    onUserLogin = () => {
        this.props.onUserLogin()
    }

    render() {
        return (
            <BrowserRouter>
                <AppHeader onUserLogout={this.props.onUserLogout}/>    

                <Switch>
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/members" exact render={() => <MembersView />} />
                    <Route path="/memberheroslist" render={() => <MemberHerosList memberId={this.props.loggedMember} />} />
                    <Route path="/memberlist" render={() => <MemberList />} />
                    <Route path="/userlist" render={() => <UserList />} />
                    <Route path="/heroesconfiguration" render={() => <HerosConfiguration />} />
                    <Route path="/signin" render={() => <SignIn onUserLogin={this.onUserLogin}/>} />
                </Switch>

            </BrowserRouter>
        )
    }
}

export default Router