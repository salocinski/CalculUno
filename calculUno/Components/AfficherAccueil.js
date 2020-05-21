import React from 'react'
import { StyleSheet, View, Text, Image, Button} from 'react-native'

export default function AfficherAccueil ({navigation})
{
  return(<View style={styles.container}>
    <Image style={styles.image} source= {require('../assets/unoAccueil.jpg')}></Image>
    <Text style={styles.titre}>CALCUNO</Text>
    
    <Button
        title="Commencer une partie"
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
    fontSize:55,
    fontWeight:"bold",
    marginBottom: 25
  },
  image:
  {
    width: 150,
    height: 150
  }
});