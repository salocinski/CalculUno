import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native'

export default function CreerPartie ()
{
  /*Initialisation de la partie courante*/
  const partieCourante = new Partie ();

  return (<View style={styles.container}>
      <Text>Lancement d'une partie</Text>
      <Button title="Ajouter un joueur"
              onPress={() => Alert.alert("On va ouvrir une popup pour ajouter un joueur.")}/>
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
  }
);
