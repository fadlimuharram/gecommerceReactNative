import React, { Component } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  StatusBar,
  AsyncStorage
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
import { connect } from "react-redux";
import { retrieveUser } from "../_actions";
class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this._bootstrapAsyc();
  }

  _bootstrapAsyc = async () => {
    setTimeout(() => {
      this.props.navigation.navigate("App");
    }, 2000);
  };
  // componentDidMount() {
  //   this.props.navigation.navigate("Auth");
  // }

  async componentDidMount() {
    const access_token = await AsyncStorage.getItem("access_token");
    const user = await AsyncStorage.getItem("user");
    if (access_token && user) {
      this.props.retrieveUser(JSON.parse(user), JSON.parse(access_token));
    }
    // alert(JSON.stringify(this.props.user));
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

const mapStateToProps = state => {
  return {
    user: state.user.user,
    access_token: state.user.access_token
  };
};

export default connect(
  mapStateToProps,
  { retrieveUser }
)(AuthLoadingScreen);

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
