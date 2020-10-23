import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, List, ListItem, Alert} from 'react-native';

import {Joueur} from '../Class/Joueur';
import { DataNavigation } from 'react-data-navigation';

export default function ajouterJoueur ({navigation})
{
    /*Récupération de la donnée partieCourante*/
    const partieCourante = DataNavigation.getData('partie');
    let saisie = '';
    this.state =
    {
      valeurTextInput : '',
      liste: (partieCourante.listeJoueur === undefined || partieCourante.listeJoueur == null) ? [] : partieCourante.listeJoueur.map((nom) => nom)
    }

    verifierElement(this.textInput, this.state);

    return(
    <View style={styles.container}>
      <Text style={styles.titre}>Liste des joueurs ajoutés</Text>
      <View style={styles.listeJoueur}>
        {afficherListeJoueur()}
      </View>
      <View styles={styles.groupeBouton}>
        <TextInput style = {styles.input}
                    placeholder = "Saisir le nom du joueur"
                    ref={input => { this.textInput = input }}
                    onChangeText = {(text) => saisie = text}
                    ></TextInput>
        <Button
            title="Valider"
            onPress={() => ajouterJoueurListe(navigation, saisie, partieCourante)}/>
      </View>
      <View style= {styles.lancementPartie}>
        <Button 
            title="Lancer la partie"
            onPress={() => navigation.navigate('AfficherPartie', {partieCourante})}/>
      </View>
    </View>
    )
}

function ajouterJoueurListe(navigation, saisie, partieCourante)
{
    let longueurNomSaisie = saisie.length;
    console.log("Longueur du nom : " + saisie + " = " + longueurNomSaisie);

    if(longueurNomSaisie >= 1 && longueurNomSaisie < 10)
    {
      //On crée le nouveau joueur et on initialise son score pour afficher ensuite ses informations.
      let joueurCourant = new Joueur();
      joueurCourant.ajouterNom(saisie);
      joueurCourant.loggerInfoJoueur();
  
      //On ajoute le joueur à la partie et on affiche les informations
      partieCourante.ajouterJoueur(joueurCourant);
      partieCourante.loggerListeJoueur();

      ajouterJoueur(navigation);
    }
    else
    {
      console.log("La longueur du nom ne convient pas.");
      Alert.alert('Nom invalide', 'Longueur attendue entre 1 et 10 caractères.')
    }
        
}

function verifierElement(textInput, state)
{
  if(typeof textInput ===  'undefined' || textInput == null)
    {
      console.log("Le TextInput est undefined ou null.");
    }
    else
    {
      console.log("La valeur du TextInput n'est pas undefined.");
      textInput.clear();
    }

    if(typeof state.liste === undefined || state.liste == null)
    {
      console.log("La liste des joueurs est vide.")
    }
    else
    {
      console.log("AFfichage de la liste des joueurs dans l'écran de saisie du nom : "+ state.liste.map((nom) => nom));
    }
}

function afficherListeJoueur()
{
  if(this.state.liste === undefined || this.state.liste == null)
  {
    <Text>La liste des joueurs est vide</Text>
  }
  else
  {
    <List>
      {
        this.state.liste.map((joueur) => (
          <ListItem
            key={joueur.nomJoueur}
            title={joueur.nomJoueur}
          />
        ))
      }
    </List>
  }
}
const styles = StyleSheet.create
(
  {
    container: 
    {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titre:
    {
        fontSize:25,
        fontWeight:"bold",
        marginBottom: 50,
        textDecorationLine: "underline"
    },
    groupeBouton:
    {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input:
    {
        borderColor: 'black', 
        borderWidth: 2,
        width: 250,
        height: 40,
        marginTop: 25,
        marginBottom: 25,
        paddingStart: 15
    },
    lancementPartie:
    {
        marginTop: 300,
        marginBottom: 25
    }
  }
);