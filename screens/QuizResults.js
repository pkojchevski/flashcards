import React from 'react';
import { View, StyleSheet, Text} from 'react-native'
import { connect } from 'react-redux'
import { resetScore } from '../actions/quiz'
import CustomButton from '../components/CustomButton'

class QuizResults extends React.Component {
   state = {
       deckId:null
   }

 componentDidMount() {
   const { route } = this.props
   this.setState({deckId: route.params.deckId})
 }

 backToDeck = () => {
     this.props.navigation.navigate('Deck Manage', {deckId:this.state.deckId})
 }

 restartQuiz = () => {
    this.props.navigation.navigate('Quiz', {deckId:this.state.deckId})
 }


   render() {
       return (
         <View style={styles.container}>
             <View>
                 <Text style={styles.textScore}>Score:</Text>
                 <Text style={styles.score}>{this.props.score}</Text>
             </View>
             <View>
                 <CustomButton onPress={this.restartQuiz} bgColor="black">
                     <Text style={{color:'white'}}>Restart quiz</Text>
                 </CustomButton>
                 <CustomButton onPress={this.backToDeck}>
                     <Text>Back to Deck</Text>
                 </CustomButton>
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
   textScore: {
      fontSize:24,
      fontWeight:'bold',
      textAlign:'center'
   },
   score:{
       fontSize:42,
       fontWeight:'bold',
       textAlign:'center'
   }
 });


 const mapDispatchToProps = dispatch => ({
     resetScore: () => dispatch(resetScore())
 })

 const mapStateToProps = ({quiz}) => ({
     score: quiz.score
 })

export default connect(mapStateToProps, mapDispatchToProps)(QuizResults)