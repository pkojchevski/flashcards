import React from 'react';
import { Animated, View, Text, StyleSheet, Easing } from 'react-native';
import { connect } from 'react-redux'
import { getDeckFromIdFunc } from '../actions/deck'
import CustomButton from '../components/CustomButton';
import { addPoint } from '../actions/quiz'
import { clearLocalNotification, setLocalNotification } from '../util/notifications'

class Quiz extends React.Component {

state = {
    counter: 0,
    showAnswer: false,
    isQuestionAnswered: false,
    animatedValue: new Animated.Value(0)
}

animate () {
  this.state.animatedValue.setValue(0)
  Animated.timing(
    this.state.animatedValue,
    {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }
  ).start(() => this.animate())
}

    componentDidMount() {
      const { route } = this.props
      const deckId = route.params.deckId
      this.props.getDeck(deckId)
    }

    next = () => {
      if(this.state.counter === this.props.deck.cards.length - 1) {
         this.props.navigation.navigate('QuizResults', {deckId:this.props.deck.id})
        //  clearLocalNotification()
        //  .then(setLocalNotification)
      } else {
        this.setState(prev => ({
          ...prev, 
          counter:prev.counter+1,
          isQuestionAnswered: false
        }))
      }
    }

    setCorrect = () => {
      this.props.add()
      this.next()
    }

    setIncorrect = () => {
      this.next()
    }

    showAnswer = () => {
      this.setState((prev => ({...prev, showAnswer:!prev.showAnswer})))
      this.animate()
    }



  render() {
    const { deck } = this.props
    const { cards } = deck
    const { counter, showAnswer, isQuestionAnswered, animatedValue} = this.state
    const opacity = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
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
                    <View>
                    <Animated.Text style={{opacity,fontSize:24, fontWeight:'bold', textAlign:'center'}}>
                      {showAnswer && cards[counter].answer}
                    </Animated.Text>
                    </View>
                      
                     
                     <CustomButton onPress={this.showAnswer}>
                       <Text style={{color: 'black'}}>{showAnswer ? 'HideAnswer' : 'Show Answer'}</Text>
                     </CustomButton>
                  </View>
                  <CustomButton onPress={this.next} disabled={isQuestionAnswered}> 
                    <Text>Next Question</Text>
                  </CustomButton>
                  <View>
                     <Text style={{textAlign:'center',}}>Remaining questions {cards.length - 1 - counter}</Text>
                  </View>
               </View>
                )
            : (
              <Text style={{padding:10, textAlign:'center'}}>
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
    fontWeight:'bold',
    textAlign:'center'
  },
  text: {
      alignItems:'center'
  }
})


const mapStateToProps = ({deck}) => ({
    deck:deck.deck
})

const mapDispatchToProps = (dispatch) => ({
     getDeck: (id) => dispatch(getDeckFromIdFunc(id)),
     add: () => dispatch(addPoint())
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
