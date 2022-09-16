import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, Animated } from 'react-native';
import { event, Value } from 'react-native-reanimated';

interface Props {
  options: { label: string; value: string; }[];
  onPress(value: string): any;
  height: number;
  borderRadius: number;
  style?: StyleProp<ViewStyle>; 
};

interface State {
  itemContainerWidth: number | null;
  selectedOptionIndex: number;
};

class SwitchSelector extends React.Component<Props, State> {
  state: State = {
    itemContainerWidth: null,
    selectedOptionIndex: 0
  };
  render() {
    const {
      options,
      onPress,
      height = 40,
      borderRadius = 50,
      style
    } = this.props;

    const { itemContainerWidth, selectedOptionIndex } = this.state;
    
    return (
      <View 
        style={[
          styles.container,
          {
            height: height,
            borderRadius: borderRadius
          },
          style
        ]}
      >
        {itemContainerWidth !== null && 
          <View 
            style={{
              backgroundColor: '#ffff00',
              position: 'absolute',
              left: selectedOptionIndex * itemContainerWidth,
              width: itemContainerWidth,
              height: '100%',
              bottom: 0,
              borderRadius: borderRadius
            }}
          />
        }
        {options.map((item, index) => (
          <TouchableOpacity 
            style={styles.option}
            onPress={() => {
              onPress(item.value);
              this.setState({ selectedOptionIndex: index });
            }}
            onLayout={({ nativeEvent }) => {
              if (selectedOptionIndex === index)
                this.setState({ itemContainerWidth: nativeEvent.layout.width });
            }}
          >
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ff00',
    flexDirection: 'row'
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SwitchSelector;