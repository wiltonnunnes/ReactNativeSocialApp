import React from 'react';
import { Animated, StyleSheet } from 'react-native';

export default class BottomSheet extends React.Component {
  render() {
    return (
      <Animated.View style={styles.sheet}></Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  }
});