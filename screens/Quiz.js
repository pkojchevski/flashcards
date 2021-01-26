import React from 'react';
import { Animated, View, Text, StyleSheet, Easing } from 'react-native';
import { connect } from 'react-redux'
import CustomButton from '../components/CustomButton';
import { addPoint, resetScore } from '../actions/quiz'
import { clearLocalNotification, setLocalNotification } from '../util/notifications'

class Quiz extends React.Component {

state = {
    counter: 0,
    showAnswer: false,
    isQuestionAnswered: false,
    fadeAnim: new Animated.Value(0)
}

fadeIn = () => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(this.state.fadeAnim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true 
  }).start();
};

fadeOut = () => {
  Animated.timing(this.state.fadeAnim, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true 
  }).start();
};

    componentDidMount() {
      this.fadeIn()
      this.focusListener = this.props.navigation.addListener('focus', () => {
        this.props.reset()
        this.setState({
          counter: 0,
          showAnswer: false,
          isQuestionAnswered: false,
        })
    });
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
      this.setState({showAnswer:false})
      this.next()
    }

    setIncorrect = () => {
      this.setState({showAnswer:false})
      this.next()
    }

    showAnswer = () => {
      const {showAnswer} = this.state
      
      this.setState((prev => ({...prev, showAnswer:!prev.showAnswer})))
      showAnswer ? this.fadeOut() : this.fadeIn()
    }



  render() {
    const { deck } = this.props
    const { cards } = deck
    const { counter, showAnswer, isQuestionAnswered } = this.state
    return (
        <View style={styles.container}>
          {
            (cards.length > 0) ? (
                <View>
                  <View style={styles.text}>
                    <Text style={styles.questionText}>Question:</Text>
                    <Animated.Text style={{fontSize:20, opacity:this.state.fadeAnim}}>{cards[counter].question}</Animated.Text>
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
                    <Animated.Text 
                      style={{opacity: this.state.fadeAnim,fontSize:24, fontWeight:'bold', textAlign:'center'}}>
                      {showAnswer && cards[counter].answer}
                    </Animated.Text>
                    </View>
                      
                     
                     <CustomButton onPress={this.showAnswer}>
                       <Text style={{color: 'black'}}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</Text>
                     </CustomButton>
                  </View>
                  <CustomButton onPress={this.next} disabled={isQuestionAnswered}> 
                    <Text>Next Question</Text>
                  </CustomButton>
                  <View>
                     <Text style={{textAlign:'center',fontSize:24}}>{counter} / {cards.length-1}</Text>
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
     add: () => dispatch(addPoint()),
     reset: () => dispatch(resetScore())
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
