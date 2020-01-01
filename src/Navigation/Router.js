import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Sidemenu from './Sidemenu.js'
import MemberHerosList from '../MemberHerosList/MemberHerosList.js'
import Home from './Home.js'
import MemberList from '../MemberList/MemberList.js'

class Router extends Component {

    registerMember = (registeredMember) => {
        this.props.onMemberRegistration(registeredMember)
    }

    render() {
        return (
            <BrowserRouter>
                <Sidemenu />

                <Switch>
                    <Route path="/" exact render={() => <Home onMemberSelected={this.registerMember}/>} />
                    <Route path="/memberheroslist" render={() => <MemberHerosList memberId={this.props.loggedMember} />} />
                    <Route path="/memberlist" render={() => <MemberList />} />
                </Switch>

            </BrowserRouter>
        )
    }
}

export default Router