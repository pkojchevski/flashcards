 import React from 'react';
 import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
 import { connect } from 'react-redux'
 import { getDecksFunc } from '../actions/deck' 
 import DeckText from '../components/DeckText'
 import { getDeckFromIdFunc } from '../actions/deck'

 class Decks extends React.Component {

  componentDidMount() {
    this.props.getAllDecks()
  }

  onPress = (deckId) => {
    this.props.navigation.navigate('DeckManage', {deckId})
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
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
            keyExtractor={item => item.id}
          />
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
  });


  const mapDispatchToProps = dispatch => ({
      getAllDecks: () => dispatch(getDecksFunc()),
      getDeck: id => dispatch(getDeckFromIdFunc(id))
  })

  const mapStateToProps = ({deck}) => ({
      decks: Object.values(deck.decks)
  })

 export default connect(mapStateToProps, mapDispatchToProps)(Decks)