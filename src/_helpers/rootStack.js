import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import HomeScreen from "../screen/Home";
import DiscoverScreen from "../screen/Discover.route";
import DetailScreen from "../screen/Detail";
import MyCartScreen from "../screen/MyCart";
import CheckoutScreen from "../screen/Checkout";
import LoginScreen from "../screen/Login";
import RegisterScreen from "../screen/Register";
import SideBar from "../components/Sidebar";
import SettingScreen from "../screen/Settings";
import AddAddress from "../screen/AddAddress";
import Logout from "../screen/Logout";

export const drawerNav = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    MyCart: {
      screen: MyCartScreen,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    Setting: {
      screen: SettingScreen
    },
    Logout: {
      screen: Logout
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export const rootStack = createStackNavigator(
  {
    Home: {
      screen: drawerNav,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    Discover: {
      screen: DiscoverScreen,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    Detail: {
      screen: DetailScreen
    },
    MyCart: {
      screen: MyCartScreen,
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    },
    Checkout: {
      screen: CheckoutScreen
    },
    AddAddress: {
      screen: AddAddress
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "white"
      }
    }
  }
);
