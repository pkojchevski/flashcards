import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { getDeckFromIdFunc } from '../actions/deck'
import CustomButton from '../components/CustomButton';
import { addPoints } from '../actions/quiz'
import { clearLocalNotification, setLocalNotification } from '../util/notifications'

class Quiz extends React.Component {

state = {
    counter: 0,
    showAnswer: false,
    isQuestionAnswered: false
}

    componentDidMount() {
      const { route } = this.props
      const deckId = route.params.deckId
      this.props.getDeck(deckId)
    }

    next = () => {
      if(this.state.counter === this.props.deck.cards.length - 1) {
         this.props.navigation.navigate('QuizResults', {deckId:this.props.deck.id})
         clearLocalNotification()
         .then(setLocalNotification)
      } else {
        this.setState(prev => ({
          ...prev, 
          counter:prev.counter+1,
          isQuestionAnswered: false
        }))
      }
    }

    setCorrect = () => {
      this.props.dispatch(addPoints() )
      this.next()
    }

    setIncorrect = () => {
      this.next()
    }



  render() {
    const { deck } = this.props
    const { cards } = deck
    const { counter, showAnswer, isQuestionAnswered} = this.state

    return (
        <View style={styles.container}>
          {
            (cards.length > 0) ? (
                <View>
                  <View style={styles.text}>
                    <Text style={styles.questionText}>Question:</Text>
                    <Text style={{fontSize:20}}>{cards[counter].question}</Text>
                  </View>
                  <View style={styles.buttons}>
                    <CustomButton onPress={this.setCorrect} bgColor="green" style={{width:'50%'}}>
                       <Text style={{color: 'white'}}>Correct</Text>
                    </CustomButton>
                    <CustomButton onPress={this.setIncorrect} bgColor="red" style={{width:'50%'}}>
                       <Text style={{color: 'white'}}>Incorrect</Text>
                    </CustomButton>
                  </View>
                  <View>
                     {showAnswer && (
                       <Text>{cards[counter].answer}</Text>
                     )}
                     <CustomButton onPress={() => this.setState((prev => ({...prev, showAnswer:!prev.showAnswer})))}>
                       <Text style={{color: 'black'}}>{showAnswer ? 'HideAnswer' : 'Show Answer'}</Text>
                     </CustomButton>
                  </View>
                  <CustomButton onPress={this.next} disabled={isQuestionAnswered}> 
                    <Text>Next Question</Text>
                  </CustomButton>
                     <Text>Remaining questions {cards.length - 1 - counter}</Text>
               </View>
                )
            : (
              <Text style={{padding:10}}>
                Sorry, You can to take a quiz because there are no cards in the deck
              </Text>
            )
          }
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
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    marginBottom:30,
    marginTop:30
  },
  questionText:{
    fontSize:24,
    fontWeight:'bold'
  },
  text: {
    textAlign:'center'
  }
})


const mapStateToProps = ({deck}) => ({
    deck:deck.deck
})

const mapDispatchToProps = (dispatch) => ({
     getDeck: (id) => dispatch(getDeckFromIdFunc(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
