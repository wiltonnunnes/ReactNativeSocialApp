import React from 'react';
import { Text } from 'react-native';

const AppText = props => {
  const { children, style, otherTextProps } = props;
  return (
    <Text 
      style={[
        {
          fontSize: 20,
        },
        style
      ]}
      {...otherTextProps}
    >
      {children}
    </Text>
  );
};

export default AppText;