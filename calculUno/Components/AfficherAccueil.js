import React from 'react'
import { StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native'

export default function AfficherAccueil ({navigation})
{
    return(<View style={styles.container}>
      <Text style={styles.titre}>CALCUNO</Text>
      <Text>Votre calculateur de point</Text>
      <Button
         title="Commencer une partie"
         //onPress={() => Alert.alert('On doit ouvrir la View "CreerPartie"')}
         onPress={() => navigation.navigate('CreerPartie')}
       />
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre:
  {
    fontSize:25,
    fontWeight:"bold",
  },
});