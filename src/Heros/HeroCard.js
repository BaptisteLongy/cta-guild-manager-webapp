import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class HeroCard extends Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                {//<Card.Img variant="top" src="holder.js/100px180" />
                }
                <Card.Body>
                    <Card.Title>{this.props.hero.definition.name}</Card.Title>
                    <Card.Text>
                        <span>{this.props.hero.owner.name}</span><br />
                        <span>Etoiles </span><span>{this.props.hero.stars}</span><br />
                        <span>Eveils </span><span>{this.props.hero.awakenings}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

}

export default HeroCard