import React, { Component } from 'react'

class MemberHero extends Component {

    modifyHero = () => {
        this.props.modifyHeroCallback(this.props.definition,this.props.hero)
    }

    render() {

        return (
            <tr className="hero" onClick={this.modifyHero}>
                <td className="heroName">{this.props.definition.name}</td>
                <td className="heroStars">{(this.props.hero == null) ? 0 : this.props.hero.stars}</td>
                <td className="heroaweknings">{(this.props.hero == null) ? 0 : this.props.hero.awakenings}</td>
                <td className="heroelement">{this.props.definition.element}</td>
            </tr>
        )
    }
}

export default MemberHero