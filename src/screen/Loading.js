import React from "react";
import { View, StyleSheet } from "react-native";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator
} from "react-native-indicators";
const Loading = () => (
  <View style={styles.content}>
    <BarIndicator color="#28AE5E" size={100} />
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});
