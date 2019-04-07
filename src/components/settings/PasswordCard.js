import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "native-base";
import {
  LockIcon2,
  ArrowRightToggle,
  ArrowBottomToggle
} from "../../assets/svg/Love";
import FormPassword from "../FormPassword";

class PasswordCard extends Component {
  state = {
    isShow: false
  };

  toggleIsShow = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };

  renderIsShowButton = () => {
    if (this.state.isShow) {
      return <ArrowBottomToggle width="25" height="25" color="black" />;
    } else {
      return <ArrowRightToggle width="25" height="25" color="black" />;
    }
  };

  renderForm = () => {
    if (this.state.isShow) {
      return <FormPassword />;
    }
  };

  render() {
    return (
      <Card>
        <View style={styles.passowrdTopContainer}>
          <LockIcon2 width="25" height="25" />
          <Text style={styles.txtChangePass}>Ubah Password</Text>
          <View style={styles.toggleArrowContainer}>
            <TouchableOpacity onPress={this.toggleIsShow}>
              {this.renderIsShowButton()}
            </TouchableOpacity>
          </View>
        </View>
        {this.renderForm()}
      </Card>
    );
  }
}

export default PasswordCard;

const styles = StyleSheet.create({
  passowrdTopContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 20
  },
  txtChangePass: {
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 20
  },
  toggleArrowContainer: {
    position: "absolute",
    right: 0,
    marginRight: 30
  }
});
