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
  SettingLogo,
  LogoIcon
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
    routeName: "Logout",
    icon: <LogoutLogo width="25" height="25" color="black" />
  }
];

class SideBar extends React.Component {
  state = {
    routes: [
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
      }
    ]
  };

  renderLoginLogout = () => {
    if (this.props.isLoggedIn) {
      return (
        <ListItem
          style={styles.listStyle}
          button
          onPress={() =>
            this.props.navigation.navigate("Logout", {
              condition: "logout"
            })
          }
        >
          <LogoutLogo width="25" height="25" color="black" />
          <Text style={styles.txtItem}>Logout</Text>
        </ListItem>
      );
    } else {
      return (
        <ListItem
          style={styles.listStyle}
          button
          onPress={() => this.props.navigation.navigate("Auth")}
        >
          <LogoIcon width="25" height="25" color="black" />
          <Text style={styles.txtItem}>Login</Text>
        </ListItem>
      );
    }
  };

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

  generateLoginLogout = () => {
    if (this.props.isLoggedIn) {
      return (
        <ListItem
          style={styles.listStyle}
          button
          onPress={() =>
            this.props.navigation.navigate("MyCart", {
              condition: "logout"
            })
          }
        >
          <LogoutLogo width="25" height="25" color="black" />
          <Text style={styles.txtItem}>{String(this.props.isLoggedIn)}</Text>
        </ListItem>
      );
    }
  };

  render() {
    let username = "anonymous";
    let email = "";
    let image = "no_avatar.jpg";
    if (this.props.isLoggedIn) {
      username = this.props.user.username;
      email = this.props.user.email;
      image = this.props.user.picture;
    }
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
                uri: Config.PIC_URI + image
              }}
            />
            <Text style={styles.txtName}>{username}</Text>
            <Text style={styles.txtEmail}>{email}</Text>
          </View>
          <List
            dataArray={this.state.routes}
            contentContainerStyle={{
              borderColor: "transparent"
            }}
            renderRow={this.renderList}
          />
          {this.renderLoginLogout()}
        </LinearGradient>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    isLoggedIn: state.user.isLoggedIn
  };
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
