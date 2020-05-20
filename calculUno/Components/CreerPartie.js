import React, {useState} from 'react'
import {Partie} from '../Class/Partie'
import {Joueur} from '../Class/Joueur'

import {StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native'

export default function CreerPartie ()
{
  /*Initialisation de la partie courante*/
  const partieCourante = new Partie ();

  return (<View style={styles.container}>
      <Text>Lancement d'une partie</Text>
      <View style={styles.groupeBouton}>
        <Button title="Ajouter un joueur"
                onPress={() => Alert.alert("On va ouvrir une popup pour ajouter un joueur.")}/>
        <Button title="Lancer la partie"
                onPress={() => Alert.alert("On va lancer la partie.")}/>
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
    groupeBouton:
    {
      flexDirection: "row",
      justifyContent: "space-between",
    }
  }
);
