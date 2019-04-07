import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Content } from "native-base";
import WishlistCard from "../components/WishlistCard";
import HeaderDiscover from "../components/HeaderDiscover";
import { compose } from "redux";
import { withHeaderSearch } from "./withHeaderHOC";

class Wishlist extends Component {
  _onPress = () => {
    this.props.navigation.navigate("Detail");
  };

  _onPressCart = () => {
    this.props.navigation.navigate("MyCart");
  };

  render() {
    return (
      <Content>
        <WishlistCard
          uri="http://sandiorchid.com/wp-content/uploads/2016/06/12998571_489789244553191_441052337968027901_n.jpg"
          price="Rp. 2.000.000"
          category="Dendrobium"
          _onPress={this._onPress}
          _onPressCart={this._onPressCart}
        />
        <WishlistCard
          uri="http://sandiorchid.com/wp-content/uploads/2016/06/12998571_489789244553191_441052337968027901_n.jpg"
          price="Rp. 2.000.000"
          category="Dendrobium"
          _onPress={this._onPress}
          _onPressCart={this._onPressCart}
        />
      </Content>
    );
  }
}

const enhance = compose(withHeaderSearch);

export default enhance(Wishlist);
