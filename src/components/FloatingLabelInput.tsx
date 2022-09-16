import React, { ReactNode } from 'react';
import { View, TextInput, StyleSheet, Animated, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  left: ReactNode;
  right: ReactNode;
  label: string;
};

type State = {
  isFocused: boolean;
  animatedIsFocused: Animated.Value;
};

class FloatingLabelInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      isFocused: false, 
      animatedIsFocused: new Animated.Value(this.props.value === '' ? 0 : 1)
    };
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

  componentDidUpdate() {
    Animated.timing(this.state.animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }

  render() {
    const { left, right, style, label, ...other } = this.props;
    const { isFocused, animatedIsFocused } = this.state;

    return (
      <View style={[styles.container, style]}>
        {left}
        <Animated.Text 
          style={{
            position: 'absolute',
            paddingLeft: 10,
            top: animatedIsFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [18, 0]
            }),
            fontSize: animatedIsFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 14]
            }),
            color: animatedIsFocused.interpolate({
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
          {...other}
        />
        <View 
          style={styles.rightContainer}
        >
          {right}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e4e5e9',
    borderRadius: 4,
  },
  textInput: {
    flexGrow: 1,
    paddingLeft: 10,
    fontSize: 20,
    marginTop: 18
  },
  rightContainer: {
    marginHorizontal: 10
  }
});

export default FloatingLabelInput;