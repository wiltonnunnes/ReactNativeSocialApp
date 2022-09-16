import React, { useState, useImperativeHandle } from 'react';
import { Modal, View, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import GestureDetector from 'react-native-gesture-handler';
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

type BottomSheetProps = {
  index: number;
  snapPoints: (number | string)[];
  children: React.ReactNode;
};

const BottomSheet = ({
  index,
  snapPoints,
  children
}: BottomSheetProps, ref) => {
  const offsetY = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: offsetY.value }
      ]
    };
  });
  const [modalVisible, setModalVisible] = useState(false);

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
      <GestureDetector>
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
      </GestureDetector>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1
  }
});

export default BottomSheet;