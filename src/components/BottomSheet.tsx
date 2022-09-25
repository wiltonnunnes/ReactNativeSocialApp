import React, { useState, useRef, forwardRef } from 'react';
import { Modal, View, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent, GestureHandlerRootView } from 'react-native-gesture-handler';

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
  const translateY = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);

  const show = () => setModalVisible(true);

  const hide = () => setModalVisible(false);

  if (ref)
    ref.current = { show, hide };

  return (
    <Modal
      visible={modalVisible}
      animationType="slide" 
      transparent={true}
    >
      <TouchableWithoutFeedback
        onPress={hide}
      >
        <View
          style={styles.overlay}
        />
      </TouchableWithoutFeedback>
      <PanGestureHandler 
        onHandlerStateChange={Animated.event(
          [
            {
              nativeEvent: {
                translateY: this.translateY
              },
            }
          ]
        )}
      >
        <View
          style={[
            {
              backgroundColor: "white",
              position: "absolute",
              top: 400,
              width: '100%',
              flex: 1,
              paddingHorizontal: '3.888888889%',
            }
          ]}
        >
          {children}
        </View>
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