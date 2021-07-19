import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFocused: false };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    this.setState({ isFocused: true });
  }

  handleBlur(event) {
    if (event.nativeEvent.text == '') {
      this.setState({ isFocused: false });
    }
  }

  render() {
    const {left, right, style, label, ...textInputProps} = this.props;
    const { isFocused } = this.state;

    return (
      <View style={[styles.container, style]}>
        {left}
        <Text 
          style={{
            position: 'absolute',
            top: !isFocused ? 18 : 0,
            fontSize: !isFocused ? 20 : 14,
            left: 12,
            color: !isFocused ? '#aaa' : '#000'
          }}
        >
          {label}
        </Text>
        <TextInput 
          style={styles.textInput} 
          onFocus={this.handleFocus} 
          onEndEditing={this.handleBlur} 
          {...textInputProps}
        />
        {right}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: '100%',
    borderBottomWidth: .5,
    borderBottomColor: '#000',
    alignItems: 'center',
    paddingTop: 18
  },
  textInput: {
    flexGrow: 1,
    paddingLeft: 12
  }
});

export default Input;