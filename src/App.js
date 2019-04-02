import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import { store, rootStack } from "./_helpers";
const AppContainer = createAppContainer(rootStack);
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
