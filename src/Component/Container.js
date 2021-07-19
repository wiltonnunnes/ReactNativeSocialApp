import React from 'react';
import { View } from 'react-native';

const Container = props => (
  <View style={{ paddingHorizontal: '3.888888889%' }}>
    {props.children}
  </View>
);

export default Container;