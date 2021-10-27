import React from 'react';
import { View, TextInput, StyleSheet, Text, Animated } from 'react-native';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFocused: false };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this._animatedIsFocused = new Animated.Value(0);
  }

  handleFocus() {
    this.setState({ isFocused: true });
  }

  handleBlur(event) {
    if (event.nativeEvent.text == '') {
      this.setState({ isFocused: false });
    }
  }

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }

  render() {
    const {left, right, style, label, ...textInputProps} = this.props;
    const { isFocused } = this.state;

    return (
      <View style={[styles.container, style]}>
        {left}
        <Animated.Text 
          style={{
            position: 'absolute',
            top: this._animatedIsFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [36, 18]
            }),
            fontSize: this._animatedIsFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 14]
            }),
            color: this._animatedIsFocused.interpolate({
              inputRange: [0, 1],
              outputRange: ['#aaa', '#000']
            })
          }} 
          numberOfLines={1}
        >
          {label}
        </Animated.Text>
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
    alignItems: 'center',
    paddingVertical: 18,
    backgroundColor: '#e4e5e9',
  },
  textInput: {
    flexGrow: 1,
    height: 40
  }
});

export default Input;