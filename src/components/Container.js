import React from 'react';
import { View } from 'react-native';

const Container = props => (
  <View 
    style={{ 
      flex: 1,
      paddingHorizontal: '3.888888889%', 
      backgroundColor: 'white'
    }} 
  >
    {props.children}
  </View>
);

export default Container;