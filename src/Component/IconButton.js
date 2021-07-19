import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = ({
  onPress = () => {},
  icon,
  size,
  color,
  style = {}
}) => {
  return (
    <TouchableOpacity 
      style={[
        {
          borderRadius: Math.round(size / 2),
        },
        style
      ]} 
      onPress={onPress}
    >
      <Icon 
        size={size} 
        color={color} 
        name={icon}
      />
    </TouchableOpacity>
  );
};

export default IconButton;