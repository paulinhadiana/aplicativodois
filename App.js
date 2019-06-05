

import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';




export default class App extends Component {
  render() {
    return (
      <View style={estilo.container}>
        <View style={estilo.box}/>    
        <View style={estilo.box}/>   
        <View style={estilo.box}/>   
        <View style={estilo.box}/>      

      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#CCC',
    flexWrap: 'wrap',
    alignContent: 'space-between' //espaço entre os elementos
    
  },
  box: {
    flex: 1,
    height: 100,
    minWidth: 100,
    backgroundColor: '#666', 
    borderColor: '#999',
    borderWidth: 5,
    margin: 10
  }, 
  
})

// joga pra cima: alignItems:'flex-start'
// centro da tela: alignItems:'center'
// inverte: flexWrap: 'wrap' 

//porqque não ficou no Align funciona apenas para apenas 1 linha
//alignContent: 'center' usa mais de uma liunha
  

