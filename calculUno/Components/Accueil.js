import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert} from 'react-native'

class Accueil extends React.Component
{
  render()
  {
    <View style={styles.container}>
      <Text style={styles.titre}>CALCUNO</Text>
      <Text>Votre calculateur de point</Text>
      <Button
         title="Commencer une partie"
         onPress={() => Alert.alert('On doit ouvrir la View "CreerPartie"')}
       />
    </View>
  }
}