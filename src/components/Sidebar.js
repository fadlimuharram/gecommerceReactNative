import React from "react";
import { AppRegistry, Image, View, StyleSheet, Dimensions } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Thumbnail
} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import {
  CategoriesPlantLogo,
  CartLogo,
  SupportLogo,
  LogoutLogo,
  SettingLogo
} from "../assets/svg/Love";
import { connect } from "react-redux";
import Config from "react-native-config";

const routes = [
  {
    name: "Kategori",
    routeName: "Home",
    icon: <CategoriesPlantLogo width="25" height="25" color="#1D1E20" />
  },
  {
    name: "Keranjang",
    routeName: "MyCart",
    icon: <CartLogo width="25" height="25" color="#1D1E20" />
  },
  {
    name: "Pengaturan",
    routeName: "Setting",
    icon: <SettingLogo width="25" height="25" color="#1D1E20" />
  },
  {
    name: "Bantuan",
    routeName: "MyCart",
    icon: <SupportLogo width="25" height="25" color="black" />
  },
  {
    name: "Keluar",
    routeName: "MyCart",
    icon: <LogoutLogo width="25" height="25" color="black" />
  }
];

class SideBar extends React.Component {
  renderList = item => (
    <ListItem
      style={styles.listStyle}
      button
      onPress={() => this.props.navigation.navigate(item.routeName)}
    >
      {item.icon}
      <Text style={styles.txtItem}>{item.name}</Text>
    </ListItem>
  );

  render() {
    const { username, email, picture } = this.props.user;
    const generatePic = username
      ? Config.PIC_URI + picture
      : Config.PIC_URI + "no_avatar.jpg";
    return (
      <Container>
        <LinearGradient
          style={styles.container}
          colors={["#3BCEAC", "#28AE5E"]}
        >
          <View style={styles.topContainer}>
            <Thumbnail
              style={styles.imgTop}
              large
              source={{
                uri: generatePic
              }}
            />
            <Text style={styles.txtName}> {username || "user"} </Text>
            <Text style={styles.txtEmail}> {email || ""} </Text>
          </View>
          <List
            dataArray={routes}
            contentContainerStyle={{
              borderColor: "transparent"
            }}
            renderRow={this.renderList}
          />
        </LinearGradient>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user.user };
};

export default connect(mapStateToProps)(SideBar);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80
  },
  imgTop: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    marginTop: 80
  },
  txtName: {
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    fontSize: 22
  },
  txtEmail: {
    color: "#1D1E20",
    fontSize: 12,
    marginTop: 5
  },
  listStyle: {
    borderColor: "transparent",
    alignItems: "center"
  },
  txtItem: {
    color: "#eff0f1",
    marginLeft: 20,
    fontSize: 20
  }
});
