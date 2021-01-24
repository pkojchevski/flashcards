import React , { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';


const FormInput = ({ onChangeText, placeholder}) => {
    const [value, setValue] = useState('')

    const handleChange = (val) => {
       setValue(val)
       onChangeText(val)
    }
  return (
      <View style={styles.container}>
    <TextInput
        style={ styles.textInput}
        placeholder={placeholder}
        onChangeText={handleChange}
        value={value}
    />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
    },
    textInput:{
        width:"100%",
        padding:10,
        height: 40, 
        borderColor: 'black', 
        borderWidth: 1,
        marginTop:20,
        marginBottom:20
    }
})
