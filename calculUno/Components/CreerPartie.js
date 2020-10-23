import React from 'react';
import {Partie} from '../Class/Partie';

import {StyleSheet, View, Text, Button} from 'react-native';
import { DataNavigation } from 'react-data-navigation';

export default function CreerPartie ({navigation})
{
  /*Initialisation de la partie courante*/
  let partieCourante = new Partie ();
  let saisie = '';

  /*On ajoute la variable partieCourante aux données transmises lors de la navigation dans l'application*/
  DataNavigation.setData('partie', partieCourante);
  DataNavigation.setData('saisieNom', saisie);

  return (<View style={styles.container}>
      <Text>Ajouter un joueur pour lancer la partie</Text>
      <View style={styles.bouton}>
        <Button
                title="Ajouter un joueur"
                onPress={() => navigation.navigate('AjouterJoueur', {partieCourante})}/>
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
