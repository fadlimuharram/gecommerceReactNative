import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  StatusBar
} from "react-native";
import { MenuIcon, LogoIcon } from "../assets/svg/Love";

class HeaderNavigationBar extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#28AE5E" />
        <View style={styles.content}>
          <TouchableHighlight
            style={styles.burgerContainer}
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          >
            <MenuIcon widht="25" height="25" color="black" />
          </TouchableHighlight>
          <View style={styles.logoContainer}>
            <LogoIcon width="25" height="25" color="black" />
            <Text style={styles.txtlogo}>GECOMMERCE</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default HeaderNavigationBar;

const styles = StyleSheet.create({
  content: {
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#C9C9C9",
    borderBottomWidth: 1
  },
  burgerContainer: { marginLeft: 10, marginTop: 15 },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15
  },
  txtlogo: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5
  }
});
