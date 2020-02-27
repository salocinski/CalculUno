import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert} from 'react-native'

class CreerPartie extends React.Component
{
  render()
  {
    return
    (
      <View style={styles.container}>
        <Text>Lancement d'une partie</Text>
        <Button title="Ajouter un joueur"
                onPress={() => Alert.alert("On va ouvrir une popup pour ajouter un joueur.")}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
