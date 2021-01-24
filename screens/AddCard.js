import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import CustomButton from '../components/CustomButton'
import FormInput from '../components/FormInput';
import { connect } from 'react-redux'
import { addCardToDeckFunc } from '../actions/deck'

class AddCard extends React.Component {
    state = {
        question:'',
        answer:'',

    }


    onChangeQuestion = (question) => {
       this.setState({question})
    }

    onChangeAnswer = (answer) => {
        this.setState({answer})
    }

    onSubmit = () => {
       const { route } = this.props
       const deckId = route.params.deckId
       const card = { id:Date.now().toISOString, ...this.state}
       this.props.addCard(deckId, card)
       this.props.navigation.navigate('DeckManage', {deckId})
    }

   render() {
       return (
           <View style={styles.container}>
               <FormInput placeholder='Question' onChangeText={this.onChangeQuestion}/>
               <FormInput placeholder ='Answer' onChangeText={this.onChangeAnswer}/>
               <CustomButton bgColor="black" onPress={this.onSubmit}>
                    <Text style={{color: 'white'}}>Submit</Text>
               </CustomButton>
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


 const mapDispatchToProps = dispatch => ({
   addCard: (deckId, card) => dispatch(addCardToDeckFunc(deckId, card))
 })


export default connect(null, mapDispatchToProps)(AddCard)