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

class Settings extends Component {
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Content>
          <ProfileCard />
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

export default Settings;
