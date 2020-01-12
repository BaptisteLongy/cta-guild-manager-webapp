import React, { Component } from 'react';
import './Home.css'


class Home extends Component {

  render() {
    return (
      <div>
        <h1>Bienvenue sur le CTA Manager de Bugs !</h1>
        <p>Enregistrez-vous via le bouton "Sign up"</p>
        <p>A chaque nouvelle visite, connectez-vous grâce au bouton "Sing in"</p>
        <p>Depuis votre profil (cliquez sur votre pseudo), vous pouvez accéder à la liste de vos héros (menu "Mes héros"). Cliquez sur un héros et vous pouvez le mettre à jour.</p>
        <p>A vous de jouer !</p>
      </div>
    )
  }
}

export default Home;