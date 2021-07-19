import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class SwitchSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View 
          style={{
            backgroundColor: '#ffff00',
            position: 'absolute',
            left: 0,
            width: '50%',
            height: 30,
            bottom: 0
          }}
        />
        {this.props.options.map((i) => (
          <TouchableOpacity 
            style={styles.option}
          >
            <Text>{i.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#00ff00',
    flexDirection: 'row',
    paddingVertical: 12,
    borderRadius: 2,
  },
  option: {
    flex: 1,
    alignItems: 'center'
  }
});

export default SwitchSelector;