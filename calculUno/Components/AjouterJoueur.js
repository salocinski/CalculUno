import React from 'react'
import { StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native'

import {Joueur} from '../Class/Joueur'

export default function AjouterJoueur ({navigation})
{
    let saisie = '';

    return(
    <View style={styles.container}>
      <Text style={styles.titre}>Liste des joueurs ajoutés</Text>
      <View styles={styles.groupeBouton}>
        <TextInput style={styles.input} 
                    placeholder="Saisir le nom du joueur"
                    onChangeText={(text) => saisie = text}
                    ></TextInput>
        <Button
            title="Valider"
            onPress={() => ajouterJoueurListe(navigation, saisie)}/>
      </View>
      <View style= {styles.lancementPartie}>
        <Button 
            title="Lancer la partie"
            onPress={() => Alert.alert("On va lancer la partie.")}/>
      </View>
      </View>
    )
}

function ajouterJoueurListe(navigation, saisie)
{
    let longueurNomSaisie = saisie.length;
    console.log("Longueur du nom saisie : " + longueurNomSaisie);

    if(longueurNomSaisie >= 1)
    {
        console.log(saisie);

        let joueurCourant = new Joueur();
        joueurCourant.ajouterNom(saisie);
    
        joueurCourant.afficherJoueur();
    
        partieCourante.AjouterJoueur(joueurCourant);
        partieCourant.afficherListeJoueur();
    
        navigation.navigate('AjouterJoueur')
    }
    else
    {
        Alert.alert('Le nom du joueur n\'est pas valide')
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
        marginBottom: 75,
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
        marginTop: 300
    }
  }
);