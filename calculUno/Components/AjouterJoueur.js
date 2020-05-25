import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native';

import {Joueur} from '../Class/Joueur';
import { FlatList } from 'react-native-gesture-handler';
import { DataNavigation } from 'react-data-navigation';

export default function AjouterJoueur ({navigation})
{
    let saisie = '';
    /*Récupération de la donnée partieCourante transmise au travers de la navigation de l'application*/
    const partieCourante = DataNavigation.getData('partie');

    return(
    <View style={styles.container}>
      <Text style={styles.titre}>Liste des joueurs ajoutés</Text>
    <View>
      {partieCourante.afficherListeJoueur()}
    </View>
      <View styles={styles.groupeBouton}>
        <TextInput style={styles.input}
                    autoCorrect={false}
                    placeholder="Saisir le nom du joueur"
                    onChangeText={(text) => saisie = text}
                    ></TextInput>
        <Button
            title="Valider"
            onPress={() => ajouterJoueurListe(navigation, saisie, partieCourante)}/>
      </View>
      <View style= {styles.lancementPartie}>
        <Button 
            title="Lancer la partie"
            onPress={() => Alert.alert("On va lancer la partie.")}/>
      </View>
      </View>
    )
}

function ajouterJoueurListe(navigation, saisie, partieCourante)
{
    let longueurNomSaisie = saisie.length;
    console.log("Longueur du nom saisie : " + longueurNomSaisie);

    if(longueurNomSaisie >= 1 && longueurNomSaisie < 10)
    {
      console.log(saisie);

      let joueurCourant = new Joueur();
      joueurCourant.ajouterNom(saisie);
  
      joueurCourant.loggerInfoJoueur();
  
      partieCourante.ajouterJoueur(joueurCourant);
      partieCourante.loggerListeJoueur();
  
      navigation.navigate('AjouterJoueur', {partieCourante})
    }
    else
    {
      console.log("La longueur du nom ne convient pas.");
      Alert.alert('Nom invalide', 'Longueur attendue entre 1 et 10 caractères.')
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