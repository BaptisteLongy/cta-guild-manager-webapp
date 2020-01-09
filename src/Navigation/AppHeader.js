import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'

class AppHeader extends Component {


    render() {

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Blanks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/members">Les héros de chacun</Nav.Link>
                        <Nav.Link as={Link} to="/memberlist">Liste des Membres</Nav.Link>
                        <Nav.Link as={Link} to="/userlist">Utilisateurs</Nav.Link>
                        <Nav.Link as={Link} to="/heroesconfiguration">Configuration des héros</Nav.Link>
                        <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                        {(this.props.loggedUser === null) ? null : <NavDropdown title={this.props.loggedUser.name} id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/memberheroslist">Mes héros</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={this.props.onUserLogout}>Sign Out</NavDropdown.Item>
                        </NavDropdown>}
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AppHeader