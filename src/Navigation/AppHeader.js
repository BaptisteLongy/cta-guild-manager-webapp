import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'
import {withRouter} from 'react-router-dom'

class AppHeader extends Component {

    handleSignOut = () => {
        this.props.onUserLogout()
        this.props.history.push('/')
    }

    render() {

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Blanks<sup>BETA</sup></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {(this.props.loggedMemberRoles.find(element => element.id===3) === undefined) ? null : <Nav.Link as={Link} to="/members">Les héros de chacun</Nav.Link>}

                        {(this.props.loggedUser === null) ? <Nav.Link as={Link} to="/signin">Sign In</Nav.Link> : null}
                        {(this.props.loggedUser === null) ? <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link> : null}



                        {(this.props.loggedUser === null) ? null :
                            <NavDropdown title={this.props.loggedUser.name} id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/memberheroslist">Mes héros</NavDropdown.Item>

                                {(this.props.loggedMemberRoles.find(element => element.id===2) === undefined) ? null :
                                <div>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/userlist">Utilisateurs</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/heroesconfiguration">Configuration des héros</NavDropdown.Item>
    </div>}
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={this.handleSignOut}>Sign Out</NavDropdown.Item>
                            </NavDropdown>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(AppHeader)