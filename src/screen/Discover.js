import React, { Component } from "react";
import { Image, View, ImageBackground, StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import DiscoverCard from "../components/DescoverCard";

class Discover extends Component {
  _onPress = () => {
    this.props.navigation.navigate("Detail");
  };
  _onPressCart = () => {
    this.props.navigation.navigate("MyCart");
  };
  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <DiscoverCard
            uri="https://insideguide.co.za/app/uploads/sites/2/2017/10/stellenberg-gardens-open-day.jpg"
            price="Rp. 2.000.000"
            category="Dendrobium"
            _onPress={this._onPress}
            _onPressCart={this._onPressCart}
          />
          <DiscoverCard
            uri="https://insideguide.co.za/app/uploads/sites/2/2017/10/stellenberg-gardens-open-day.jpg"
            price="Rp. 2.000.000"
            category="Dendrobium"
            _onPress={this._onPress}
            _onPressCart={this._onPressCart}
          />
        </Content>
      </Container>
    );
  }
}

export default Discover;

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
