import React from 'react';
import {Text, FlatList} from 'react-native';

export class Partie 
{
  listeJoueur = [];

  ajouterJoueur(joueur)
  {
    this.listeJoueur.push(joueur)
  }
  
  loggerListeJoueur()
  {
    this.listeJoueur.forEach
    (
      function(element, index)
      {
        let position = index +1;

        console.log("Affiche valeur element : " + element.nomJoueur + "-"+ element.score);
        console.log("Le joueur " + element.nomJoueur + " a été ajouté dans la partie en position n° " + position + " avec un score de " + element.score); 
      }
    )
  }
}