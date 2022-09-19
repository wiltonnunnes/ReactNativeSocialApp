import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Modal, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler } from 'react-native-reanimated';

type BottomSheetProps = {
  index?: number;
  snapPoints: (number | string)[];
  children: React.ReactNode;
};

const BottomSheet = forwardRef(({
  index = 0,
  snapPoints,
  children
}: BottomSheetProps, ref) => {
  const translateY = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value }
      ]
    };
  });
  const [modalVisible, setModalVisible] = useState(false);

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: () => {},
    onActive: (event) => {
      translateY.value = event.translationY;
    },
    onEnd: () => {}
  });

  const show = () => setModalVisible(true);

  if (ref)
    ref.current = { show };

  return (
    <Modal
      visible={modalVisible}
      animationType="slide" 
      transparent={true}
    >
      <TouchableWithoutFeedback
        onPress={this.close}
      >
        <View
          style={styles.overlay}
        />
      </TouchableWithoutFeedback>
      <PanGestureHandler
        onGestureEvent={panGestureEvent}
      >
        <Animated.View
          style={[
            {
              backgroundColor: "white",
              position: "absolute",
              bottom: 0,
              width: '100%',
              flex: 1,
              paddingHorizontal: '3.888888889%',
            },
            animatedStyles
          ]}
        >
          {children}
        </Animated.View>
      </PanGestureHandler>
    </Modal>
  );
});

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1
  }
});

export default BottomSheet;