import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { store, rootStack, authStack } from "./_helpers";
import AuthLoadingScreen from "./screen/AuthLoadingScreen";

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: rootStack,
    Auth: authStack
  })
);
// main color
// #28AE5E
// rgb(40,174,94)
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
