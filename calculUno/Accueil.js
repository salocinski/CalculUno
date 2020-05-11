import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Navigation from "Navigation/Navigation"

export default function Accueil() {
  return 
  (
    <Navigation/>
  );
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