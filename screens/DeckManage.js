import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton'
import { connect } from 'react-redux'
import { getDeckFromIdFunc } from '../actions/deck'

class DeckManage extends React.Component {

    componentDidMount() {
        const { route, navigation } = this.props
        this.props.getDeck(route.params.deckId)
    }

    onPress = (url) => {
       this.props.navigation.navigate(`${url}`)
    }

    removeDeck = () => {
       
    }


   render() {
     console.log('XXX:', this.props)
    const {deck} = this.props
       return ( 
           <View>
           <View style={styles.container}>
               {deck && (<View>
                  <Text>{deck.name}</Text>
                    { 
                      deck.cards ? (
                        <Text>{deck.cards.length} cards</Text>
                      ) : (
                        <Text>0 cards</Text>
                      )
                        
                        }
               </View>)}
            <View>
                <CustomButton bgColor='white' onPress={() => this.onPress('AddCard')}>
                    <Text>Add Card</Text>
                </CustomButton>
                <CustomButton bgColor='black' onPress={() => this.onPress('')}>
                    <Text style={{color:'white'}}>Start Quiz</Text>
                </CustomButton>
                <CustomButton bgColor='transparent' onPress={this.removeDeck}>
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
    getDeck: id => dispatch(getDeckFromIdFunc(id))
    //  back: navigation.goBack()
 })

 const mapStateToProps = ({deck}) => ({
deck
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckManage)