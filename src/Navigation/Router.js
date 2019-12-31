import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Sidemenu from './Sidemenu.js'
import MemberHerosList from '../MemberHerosList/MemberHerosList.js'
import Home from './Home.js'
import MemberList from '../MemberList/MemberList.js'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Sidemenu />

                <Switch>
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/memberheroslist" render={() => <MemberHerosList memberId={2} />} />
                    <Route path="/memberlist" render={() => <MemberList />} />
                </Switch>

            </BrowserRouter>
        )
    }
}

export default Router