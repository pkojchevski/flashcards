import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import FormInput from '../components/FormInput'
import CustomButton from '../components/CustomButton'
import { connect } from 'react-redux';
import { addDeckFunc } from '../actions/deck'

class AddDeck extends React.Component {
  state = {
     deckName:'',
     disabled:false
  }

  onDeckNameChanged = (value) => {
     this.setState({deckName:value, disabled:false})
  }

  onSubmit = () => {
    const id = (new Date().getTime()).toString(36)
    const deck = {
      id,
      name:this.state.deckName,
      cards:[]
    }

    if(this.state.deckName !== '') {
      this.props.addNewDeck(deck)
      this.setState({disabled:false, deckName:''})
      this.props.navigation.navigate('DeckManage', {deckId: id})
      
    } else {
      this.setState({disabled:true})
    }


  }

render() {
  const {deckName, disabled} = this.state
  return (
    <View style = {styles.container}>
        <Text style={styles.title}>What is title of your new deck?</Text>
      <View>
        <FormInput placeholder="Deck Name" onChangeText={this.onDeckNameChanged} value={deckName}/>
        <CustomButton bgColor="black" onPress={this.onSubmit} disabled={disabled}>
           <Text style={{color: 'white', textAlign:'center'}}>Create Deck</Text>
        </CustomButton>
        <Text style={{textAlign:'center', color:'red'}}>{ disabled && 'Please type name for the Deck'}</Text>
      </View>
      <View>
       
      </View>
    </View>);
}

}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop:50,
      textAlign:'center',
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