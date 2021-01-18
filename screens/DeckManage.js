import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton'
import { connect } from 'react-redux'
import { removeDeck } from '../actions/deck'

class DeckManage extends React.Component {

    onPress = (url) => {
       this.props.navigation.navigate(`${url}`)
    }

    removeDeck = () => {
       
    }


   render() {
       return ( 
           <View style={styles.container}>
               <View>
                    <Text>DECK1</Text>
                    <Text>2 cards</Text>
               </View>
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
     delete: cardId => dispatch(removeDeck(cardId)),
    //  back: navigation.goBack()
 })

//  const mapStateToProps = (dispatch, {navigation}) => ({
//     delete: cardId => dispatch(removeDeckFunc(cardId)),
//     back: navigation.goBack()
// })

export default connect(null, mapDispatchToProps)(DeckManage)