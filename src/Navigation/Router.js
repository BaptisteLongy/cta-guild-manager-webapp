import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MemberHerosList from '../MemberHerosList/MemberHerosList.js'
import Home from './Home.js'
import MemberList from '../MemberList/MemberList.js'
import MembersView from '../MembersView/MembersView.js'
import HerosConfiguration from '../Configuration/HerosConfiguration.js'
import AppHeader from './AppHeader.js'
import SignIn from '../User/SignIn.js'

// Props
// onMemberRegistration callback to pass up registered member
class Router extends Component {

    registerMember = (registeredMember) => {
        this.props.onMemberRegistration(registeredMember)
    }

    render() {
        return (
            <BrowserRouter>
                <AppHeader />    

                <Switch>
                    <Route path="/" exact render={() => <Home onMemberSelected={this.registerMember}/>} />
                    <Route path="/members" exact render={() => <MembersView />} />
                    <Route path="/memberheroslist" render={() => <MemberHerosList memberId={this.props.loggedMember} />} />
                    <Route path="/memberlist" render={() => <MemberList />} />
                    <Route path="/heroesconfiguration" render={() => <HerosConfiguration />} />
                    <Route path="/signin" render={() => <SignIn />} />
                </Switch>

            </BrowserRouter>
        )
    }
}

export default Router