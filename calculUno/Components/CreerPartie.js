import React, {useState} from 'react'
import {Partie} from '../Class/Partie'
import {Joueur} from '../Class/Joueur'

import {StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native'

export default function CreerPartie ({navigation})
{
  /*Initialisation de la partie courante*/
  let partieCourante = new Partie ();

  return (<View style={styles.container}>
      <Text>Ajouter un joueur pour lancer la partie</Text>
      <View style={styles.bouton}>
        <Button
                title="Ajouter un joueur"
                onPress={() => navigation.navigate('AjouterJoueur', partieCourante)}/>
      </View>
      
    </View>
  )
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
    bouton:
    {
      marginTop: 50
    }
  }
);
