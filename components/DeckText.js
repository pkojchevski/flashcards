import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeckText = ({deck}) => {
  return   (
    <View style={styles.container}>
        <Text style={styles.header}>{deck.name}</Text>
        <Text style={styles.card}>
            {deck.cards ? deck.cards.length + " cards" : '0 cards'}
        </Text>
    </View>)
}
const styles = StyleSheet.create({
    container: {
       width:'100%',
       marginBottom:15
    },
    header: {
      fontSize:24,
      fontWeight:'bold',
      marginTop:20,
      marginBottom:5,
      textAlign:'center'
    },
    card: {
      fontSize:18,
      textAlign:'center'
    }
  });


export default DeckText
