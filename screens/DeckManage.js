import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton'
import { connect } from 'react-redux'
import { getDeckFromIdFunc, removeDeckFunc } from '../actions/deck'
import DeckText from '../components/DeckText'

class DeckManage extends React.Component {

    componentDidMount() {
        const { route } = this.props
        this.props.getDeck(route.params.deckId)

        this.focusListener = this.props.navigation.addListener('focus', () => {
            this.props.getDeck(route.params.deckId)
        });

    }

    shouldComponentUpdate (nextProps) {
        console.log('nextProps')
        return true
      }

    onPress = (url, deckId) => {
       this.props.navigation.push(`${url}`, {deckId})
    }

    removeDeck = (id) => {
       this.props.removeDeck(id)
       this.props.navigation.navigate('Decks')
    }


   render() {
    const {deck} = this.props
    console.log('here')
       return ( 
           <View style={styles.container}>
           <View >
               {deck && (<View>
                <DeckText deck={deck} />
               </View>)}
            <View>
                <CustomButton bgColor='white' onPress={() => this.onPress('AddCard', deck.id)}>
                    <Text>Add Card</Text>
                </CustomButton>
                <CustomButton bgColor='black' onPress={() => this.onPress('Quiz', deck.id)}>
                    <Text style={{color:'white'}}>Start Quiz</Text>
                </CustomButton>
                <CustomButton bgColor='transparent' onPress={() => this.removeDeck(deck.id)}>
                    <Text style={{color:'red'}}>Delete Deck</Text>
                </CustomButton>
             </View>
           </View>
           </View>
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
   button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
 });

 const mapDispatchToProps = (dispatch, {navigation}) => ({
    //  delete: cardId => dispatch(removeDeck(cardId)),
    getDeck: id => dispatch(getDeckFromIdFunc(id)),
    //  back: navigation.goBack()
    removeDeck: id => dispatch(removeDeckFunc(id))
 })

 const mapStateToProps = ({deck}) => ({
deck:deck.deck
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckManage)