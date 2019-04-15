import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Container, Content } from "native-base";
import ImagePicker from "react-native-image-picker";
import {
  ArrowBottomToggle,
  ArrowRightToggle,
  MapsLogo
} from "../assets/svg/Love";
import Header from "../components/Header";
import ProfileCard from "../components/settings/ProfileCard";
import AddressSettingCard from "../components/settings/AddressCard";
import PasswordCard from "../components/settings/PasswordCard";
import { connect } from "react-redux";
class Settings extends Component {
  componentDidMount() {
    this.isLoggedInStatus();
  }
  isLoggedInStatus() {
    const { isLoggedIn, access_token } = this.props;
    if (!isLoggedIn) {
      this.props.navigation.navigate("Auth");
    } else {
      this.props.navigation.addListener("didFocus", () => {
        // this.props.getCart(access_token);
        // this.props.getAddress(access_token);
      });
    }
  }
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Content>
          <ProfileCard
            username={this.props.userData.username}
            email={this.props.userData.email}
          />
          <AddressSettingCard {...this.props} />
          <PasswordCard />

          {/* <Card>
            <Text>Ganti Password</Text>
          </Card> */}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userData: state.user.user
  };
};

export default connect(mapStateToProps)(Settings);
