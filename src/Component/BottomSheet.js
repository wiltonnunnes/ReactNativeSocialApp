import React from 'react';
import { Modal, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler'

export default class BottomSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      translateY: new Animated.Value(1)
    };
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ modalVisible: true });
  }

  close() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <Modal
        visible={this.state.modalVisible}
        animationType="slide" 
        transparent={true}
      >
        <TouchableWithoutFeedback
          onPress={this.close}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}
          />
        </TouchableWithoutFeedback>
        <PanGestureHandler
          onGestureEvent={new Animated.event(
            [
              {
                nativeEvent: {
                  translateY: this.state.translateY
                }
              }
            ],
            { useNativeDriver: true }
          )}
        >
          <View
            style={{
              backgroundColor: "white",
              position: "absolute",
              bottom: 0,
              width: '100%',
              height: this.props.height,
              paddingHorizontal: '3.888888889%',
              transform: [
                { translateY: this.state.translateY }
              ]
            }}
          >
            {this.props.children}
          </View>
        </PanGestureHandler>
      </Modal>
    );
  }
}