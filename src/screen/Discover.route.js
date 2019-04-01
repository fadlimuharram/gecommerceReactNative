import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Discover from "./Discover";
import Wishlist from "./Wishlist";
import { Love, Menu } from "../assets/svg/Love";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;

  if (routeName === "Discover") {
    return <Menu width="25" height="25" color="#ADADAD" />;
  } else if (routeName === "Wishlist") {
    return <Love width="25" height="25" color="#ADADAD" />;
  }
};

const TabNavigation = createBottomTabNavigator(
  {
    Discover: { screen: Discover },
    Wishlist: { screen: Wishlist }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: "#28AE5E",
      inactiveTintColor: "gray"
    }
  }
);
export default TabNavigation;
