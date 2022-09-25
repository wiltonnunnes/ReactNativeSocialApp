import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, TextStyle, StyleProp } from 'react-native';

interface Props extends TextInputProps {
  codeLength?: number;
  codeInputStyle?: StyleProp<TextStyle>;
  size?: number;
  space?: number;
}

const CodeInput = ({
  codeLength = 5,
  codeInputStyle,
  size = 40,
  space = 8
}: Props) => {
  const [value, setValue] = useState('');

  let cells = [];
  for (let i = 0; i < codeLength; i++) {
    cells.push(
      <TextInput 
        style={[
          {
            width: size,
            height: size,
            marginLeft: i == 0 ? 0 : space,
            textAlign: 'center'
          },
          codeInputStyle
        ]}
      />
    );
  }
  return (
    <View
      style={styles.container}
    >
      {cells}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default CodeInput;