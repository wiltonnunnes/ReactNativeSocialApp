import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button, props.style]}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0000ff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default Button;