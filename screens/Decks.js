 import React from 'react';
 import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native'
 import { connect } from 'react-redux'
 import { getDecksFunc } from '../actions/deck' 
 import DeckText from '../components/DeckText'
 import { getDeckFromIdFunc } from '../actions/deck'

 class Decks extends React.Component {

  componentDidMount() {
    this.props.getAllDecks()
  }

  onPress = (deckId) => {
    this.props.navigation.navigate('Deck Manage', {deckId})
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
    key={item.id}
    onPress={() => this.onPress(item.id)}
    >
      <DeckText deck={item}/>
    </TouchableOpacity>
  );

    render() {
      const { decks } = this.props
        return (
          <SafeAreaView style={styles.container}>    
          <FlatList
            data={decks}
            renderItem={this.renderItem}
            keyExtractor={(item) => {
              return item.id;
            }}
            style={{width:'100%'}}
          />
           {decks && decks.length === 0 && (<Text style={styles.noDecksText}>
            There is no Deck created, please create the first one
           </Text>)} 
           
        </SafeAreaView>

        )
    }
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    noDecksText: {
      fontSize:22,
      color:'black',
      padding:10,
      textAlign:'center',
      marginBottom:350
    }
  });


  const mapDispatchToProps = dispatch => ({
      getAllDecks: () => dispatch(getDecksFunc()),
      getDeck: id => dispatch(getDeckFromIdFunc(id))
  })

  const mapStateToProps = ({deck}) => {
    return {
      decks: deck.decks ? Object.values(deck.decks) : []
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(Decks)