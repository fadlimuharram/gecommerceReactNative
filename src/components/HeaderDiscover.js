import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { ArrowLeft, ChatLogo, NotificationLogo } from "../assets/svg/Love";
import { Item, Input } from "native-base";
class HeaderDiscover extends Component {
  render() {
    const { _onGoBackButton } = this.props;
    return (
      <View>
        {/* <StatusBar barStyle="light-content" backgroundColor=""/> */}
        <View style={styles.content}>
          <TouchableOpacity style={styles.left} onPress={_onGoBackButton}>
            <ArrowLeft height="16" width="16" color="black" />
          </TouchableOpacity>
          <View style={styles.right}>
            <Item style={styles.searchContainer}>
              <Input
                underlineColorAndroid="transparent"
                style={styles.searchInput}
                placeholder="pencarian"
              />
            </Item>
            <TouchableOpacity style={styles.chatContainer}>
              <ChatLogo width="25" height="25" color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationContainer}>
              <NotificationLogo width="25" height="25" color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default HeaderDiscover;

const styles = StyleSheet.create({
  content: {
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#C9C9C9",
    borderBottomWidth: 1
  },
  left: {
    width: 40,
    paddingLeft: 20
  },
  right: {
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 15
  },
  searchContainer: {
    width: (Dimensions.get("window").width * 60) / 100,
    borderColor: "transparent"
  },
  searchInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eff0f1",
    backgroundColor: "#eff0f1"
  },
  chatContainer: {
    marginLeft: 15
  },
  notificationContainer: {
    marginLeft: 15
  }
});
