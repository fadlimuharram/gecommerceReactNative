import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screen/Home";
import DiscoverScreen from "../screen/Discover.route";
import DetailScreen from "../screen/Detail";
import MyCartScreen from "../screen/MyCart";
import CheckoutScreen from "../screen/Checkout";
import LoginScreen from "../screen/Login";
import RegisterScreen from "../screen/Register";

export const rootStack = createStackNavigator(
  {
    Register: {
      screen: RegisterScreen
    },
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    },
    Discover: {
      screen: DiscoverScreen
    },
    Detail: {
      screen: DetailScreen
    },
    MyCart: {
      screen: MyCartScreen
    },
    Checkout: {
      screen: CheckoutScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);
