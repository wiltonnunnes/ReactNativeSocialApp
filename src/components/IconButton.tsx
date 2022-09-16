import React from 'react';
import { Pressable, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconButtonProps = {
  iconName: string;
  onPress(): any;
  iconSize: number;
  iconColor: string;
};

const IconButton = ({ 
  iconName, 
  onPress, 
  iconSize = 24,
  iconColor
}: IconButtonProps) => {
  let size = Math.round(iconSize * 1.5);
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Math.round(size / 2)
      }}
    >
      <Icon
        name={iconName}
        style={{
          fontSize: iconSize
        }}
        color={iconColor}
      />
    </Pressable>
  );
};

export default IconButton;