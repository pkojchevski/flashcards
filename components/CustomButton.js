import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({bgColor, children, onPress }) => {
  return (
    <TouchableOpacity
        style={[styles.button, {backgroundColor:bgColor}]}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 45,
        paddingRight: 45,
        paddingTop: 15,
        paddingBottom: 15,
        margin: 15,
        borderWidth: 1,
        borderColor: 'black',
        textAlign:'center',
        alignItems:'center'
    }
})

export default CustomButton
