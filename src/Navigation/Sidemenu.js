import React, {Component} from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
import { Link } from 'react-router-dom';
import Radium from 'radium';
import './Sidemenu.css'

let RadiumLink = Radium(Link);

class Sidemenu extends Component {
    render() {
        return(
            <Menu>
                <RadiumLink className="menu-item" to="/">Home</RadiumLink>
                <RadiumLink className="menu-item" to="/memberheroslist">Mes héros</RadiumLink>
                <RadiumLink className="menu-item" to="/memberlist">Membres</RadiumLink>
            </Menu>
        )
    }

}

export default Sidemenu