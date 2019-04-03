import React, { Component } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  StatusBar
} from "react-native";
import { Container, Content } from "native-base";
import { LogoIcon } from "../assets/svg/Love";
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
import LinearGradient from "react-native-linear-gradient";

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this._bootstrapAsyc();
  }

  _bootstrapAsyc = async () => {
    // setTimeout(() => {
    //   this.props.navigation.navigate("Auth");
    // }, 5000);
    this.props.navigation.navigate("Auth");
  };
  componentDidMount() {
    this.props.navigation.navigate("Auth");
  }

  render() {
    return (
      <LinearGradient colors={["#3BCEAC", "#28AE5E"]} style={styles.content}>
        <StatusBar backgroundColor="#3BCEAC" barStyle="light-content" />
        <PulseIndicator color="white" size={100} />
        <View style={styles.logoContainer}>
          <LogoIcon width="70" height="70" color="white" />
          <Text style={styles.txtLogo}>GECOMMERCE</Text>
        </View>
      </LinearGradient>
    );
  }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  txtLogo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginLeft: 10
  }
});
