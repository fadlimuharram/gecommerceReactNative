import React, { Component } from "react";
import { AsyncStorage, Text } from "react-native";
import { connect } from "react-redux";
import { login, clearUser } from "../_actions";
import { importNamespaceSpecifier } from "@babel/types";

class Logout extends Component {
  async componentDidMount() {
    if (this.props.navigation.getParam("condition", "") === "logout") {
      await AsyncStorage.removeItem("access_token");
      await AsyncStorage.removeItem("user");
      this.props.clearUser();
      this.props.navigation.navigate("Home");
    }
  }

  render() {
    return <Text>String(this.props.isLoggedIn)</Text>;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(
  "",
  { clearUser }
)(Logout);
