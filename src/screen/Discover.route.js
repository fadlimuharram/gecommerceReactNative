import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Discover from "./Discover";
import Wishlist from "./Wishlist";
import MyCart from "./MyCart";
import { Love, Menu } from "../assets/svg/Love";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { Platform } from "react-native";

// const getTabBarIcon = (navigation, focused, tintColor) => {
//   const { routeName } = navigation.state;
//   console.log(routeName);

//   if (routeName === "Discover") {
//     return <Icon name="rocket" size={30} color="#900" />;
//   } else if (routeName === "Wishlist") {
//     return <Icon name="rocket" size={30} color="#900" />;
//   }
// };

// const TabNavigation = createMaterialBottomTabNavigator(
//   {
//     Discover: { screen: Discover },
//     Wishlist: { screen: Wishlist },
//     MyCart: { screen: MyCart }
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) =>
//         getTabBarIcon(navigation, focused, tintColor)
//     }),
//     tabBarOptions: {
//       activeTintColor: "#28AE5E",
//       inactiveTintColor: "gray"
//     }
//   }
// );

const TabNavigation = createMaterialBottomTabNavigator(
  {
    Discover: {
      screen: Discover,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Menu width="20" height="20" color="white" />
        )
      }
    },
    Wishlist: {
      screen: Wishlist,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Love width="20" height="20" color={tintColor} />
        )
      }
    }
    // MyCart: {
    //   screen: MyCart,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Love width="20" height="20" color={tintColor} />
    //     )
    //   }
    // }
  },
  {
    barStyle: { backgroundColor: "#28AE5E" }
    // headerMode: "none",
    // navigationOptions: {
    //   headerVisible: false,
    //   header: null
    // }
  }
);
export default TabNavigation;
