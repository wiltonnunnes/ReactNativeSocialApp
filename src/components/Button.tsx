import React from 'react';
import { Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  type: 'solid' | 'outline' | 'clear';
  buttonStyle?: StyleProp<ViewStyle>;
  color: string;
};

const Button = ({
  onPress, 
  title,
  type = 'solid',
  buttonStyle,
  color = "#009688"
}: ButtonProps) => {
  switch (type) {
    case 'solid':
      return (
        <TouchableOpacity 
          onPress={onPress} 
          style={[
            styles.buttonContainer,
            {
              backgroundColor: color
            },
            buttonStyle
          ]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );
    case 'clear':
      return (
        <TouchableOpacity 
          onPress={onPress} 
          style={[
            styles.buttonContainer,
            buttonStyle
          ]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );
    case 'outline':
      return (
        <TouchableOpacity 
          onPress={onPress} 
          style={[
            styles.buttonContainer,
            {
              borderWidth: 3,
              borderColor: "#009688"
            },
            buttonStyle
          ]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );
  }
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  }
});