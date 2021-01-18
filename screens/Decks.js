 import React from 'react';
 import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
 import { connect } from 'react-redux'
 import { getDecksFunc } from '../actions/deck'



 class Decks extends React.Component {

  componentDidMount() {
    this.props.getAllDecks()
  }

  onPress = () => {
    this.props.navigation.navigate('DeckManage')
  }

    render() {
      const { decks } = this.props
        return (
          <View style={styles.container}>
            {decks && decks.map(deck => (
              <TouchableOpacity
              onPress={this.onPress}
              >
                  <Text>{deck.name}</Text>
                  <Text>{deck.cards.length}</Text>
              </TouchableOpacity>
             ))}
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


  const mapDispatchToProps = dispatch => ({
      getAllDecks: () => dispatch(getDecksFunc())
  })

  const mapStateToProps = ({decks}) => ({
      decks
  })

 export default connect(mapStateToProps, mapDispatchToProps)(Decks)