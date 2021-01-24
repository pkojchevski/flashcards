import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import FormInput from '../components/FormInput'
import CustomButton from '../components/CustomButton'
import { connect } from 'react-redux';
import { addDeckFunc } from '../actions/deck'

class AddDeck extends React.Component {
  state = {
     deckName:''
  }
  onDeckNameChanged = (value) => {
     this.setState({deckName:value})
  }

  onSubmit = () => {
    const id = new Date().toISOString()
    const deck = {
      id: new Date().toISOString(),
      name:this.state.deckName,
      cards:[]
    }
      this.props.addNewDeck(deck)
      this.props.navigation.navigate('DeckManage', {deckId: id})
  }

render() {
  return (
    <View style = {styles.container}>
        <Text style={styles.title}>What is title of your new deck?</Text>
      <View>
        <FormInput placeholder="Deck Name" onChangeText={this.onDeckNameChanged}/>
        <CustomButton bgColor="black" onPress={this.onSubmit}>
           <Text style={{color: 'white'}}>Create Deck</Text>
        </CustomButton>
      </View>
    </View>);
}

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop:50,
    },
    title:{
      fontSize: 24,
      marginBottom: 20
    },
  });

const mapDispatchToProps = (dispatch)=> ({
  addNewDeck: deck => dispatch(addDeckFunc(deck))
})

export default connect(null, mapDispatchToProps)(AddDeck)