import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screen/Home";
import DiscoverScreen from "../screen/Discover.route";
import DetailScreen from "../screen/Detail";
import MyCartScreen from "../screen/MyCart";
import CheckoutScreen from "../screen/Checkout";
import LoginScreen from "../screen/Login";
import RegisterScreen from "../screen/Register";

export const authStack = createStackNavigator(
  {
    Register: {
      screen: RegisterScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);
