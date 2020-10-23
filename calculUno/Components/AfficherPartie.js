import React, {useState} from 'react'
import { StyleSheet, View, Text, Button, FlatList} from 'react-native'
import {Partie} from '../Class/Partie';
import { DataNavigation } from 'react-data-navigation';

export default function afficherPartie ({navigation})
{
  const partieCourante = DataNavigation.getData('partie');

  return(
    <View style={styles.container}>
        <Text style={styles.titre}>Score de la partie</Text>
        {partieCourante.afficherListeJoueur()}
        <Button title="Ajouter les points"/>
        <FlatList/>
    </View>)
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
    }
  }
);