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
        questionIsTyped: false,
        answerIsTyped: false,
        submitIsClicked:false
    }


    onChangeQuestion = (question) => {
       this.setState({question, questionIsTyped: true,})
    }

    onChangeAnswer = (answer) => {
        this.setState({answer, answerIsTyped: true})
    }

    onSubmit = () => {
      this.setState({ submitIsClicked:true})
       const { answerIsTyped, questionIsTyped } = this.state

       if(answerIsTyped && questionIsTyped) {
        const { route } = this.props
        const deckId = route.params.deckId
        const card = { id:Date.now().toISOString, ...this.state}
        this.props.addCard(deckId, card)
        this.props.goBack()
        this.setState({question:'', answer:'',
                       questionIsTyped: true,
                       answerIsTyped: true,
                       disabled:false,
                     })
       } 
    }

   render() {
    const { answerIsTyped, questionIsTyped, submitIsClicked } = this.state
       return (
           <View style={styles.container}>
               <FormInput placeholder='Question' onChangeText={this.onChangeQuestion}/>
               <FormInput placeholder ='Answer' onChangeText={this.onChangeAnswer}/>
               <CustomButton bgColor="black" onPress={this.onSubmit}>
                    <Text style={{color: 'white', textAlign:'center'}}>Submit</Text>
               </CustomButton>
               {!answerIsTyped && submitIsClicked && <Text style={{color:'red'}}>Please type answer</Text>}
               {!questionIsTyped && submitIsClicked && <Text style={{color:'red'}}>Please type question</Text>}
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


 const mapDispatchToProps = (dispatch, {navigation}) => ({
   addCard: (deckId, card) => dispatch(addCardToDeckFunc(deckId, card)),
   goBack: () => navigation.goBack()
  })



export default connect(null, mapDispatchToProps)(AddCard)