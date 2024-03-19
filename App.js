import React, {useEffect, useRef} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';
import Session1 from './Session1';

const App = () => {
  return (
    <View style={styles.container}>
     <Session1/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default App;