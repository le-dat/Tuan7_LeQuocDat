import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const Session1 = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      //   onPanResponderGrant: () => Animated.spring(pan, {toValue: {x: 0, y: 0}}}),
      //   onPanResponderRelease: () => Animated.spring(pan, {toValue: {x: 0, y: 0}}}).start()
      onPanResponderMove: (evt, gestureState) => {
        console.log(gestureState.moveX);
        console.log(gestureState.moveY);

        Animated.event([null, { dx: pan.x, dy: pan.y }]);
        // this.view.setNativeProps({

        // })
      },
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  useEffect(() => {
    console.log(pan);
  }, [pan]);

  return (
    <View>
      <Text>{pan.x._value.toString()}</Text>
      <Text>{pan.y._value.toString()}</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>

      {/* <Animated.View
  style={{
    transform: [{translateX: pan.x}, {translateY: pan.y}],
  }}
  {...panResponder.panHandlers}>
  <View style={styles.box} />
</Animated.View> */}
    </View>
  );
};

export default Session1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});
