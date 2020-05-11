import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert, FlatList} from 'react-native'

class AffichePartie extends React.Component
{
  render()
  {
    <View style={styles.main_container}>
        <TextInput style={styles.textinput}>Score de la partie</TextInput>
        /*Affichage de la liste des scores*/
        /*Format : Place / Prénom / Score */
        <FlatList/>
    </View>
  }
}