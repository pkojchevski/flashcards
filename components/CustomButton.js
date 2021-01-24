import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({bgColor, children, onPress, disabled }) => {
  console.log('disabled:', disabled)
  return (
    <TouchableOpacity
        style={[styles.button, {backgroundColor:bgColor}]}
        onPress={onPress}
        activeOpacity={disabled ? 1 : 0.7}
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
        borderColor:'black'
    }
})

export default CustomButton
