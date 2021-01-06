import React from 'react';
import { StyleSheet, View } from 'react-native';

const Bird = () => {
  return (
    <View style={styles.bird}/>
  );
}

const styles = StyleSheet.create({
  bird: {
    position: "absolute",
    backgroundColor: "blue",
    width: 50,
    height: 60
  },
});

export default Bird;
