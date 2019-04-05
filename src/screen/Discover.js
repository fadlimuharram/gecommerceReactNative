import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, View, ImageBackground, StyleSheet } from "react-native";
import { Container, Content, Text } from "native-base";
import DiscoverCard from "../components/DescoverCard";
import { productGetByCategoryId, postCart } from "../_actions";
import { FlatList } from "react-native-gesture-handler";
import HeaderDiscover from "../components/HeaderDiscover";

class Discover extends Component {
  state = {
    products: []
  };

  static navigationOptions = {
    header: null
  };

  _onPress = id => {
    this.props.navigation.navigate("Detail", {
      productId: id
    });
  };
  _onPressCart = item => {
    this.props.postCart(item);
    this.props.navigation.navigate("MyCart");
  };

  componentDidMount() {
    const { navigation, products, productGetByCategoryId } = this.props;

    productGetByCategoryId(navigation.getParam("categoryId", "0"));
  }

  _onGoBackButton = () => {
    this.props.navigation.navigate("Home");
  };

  _keyExtractor = (item, index) => item.id;

  _renderCardItem = ({ item }) => {
    let isSelected = this.props.dataCart.find(
      (val, index) => val.id === item.id
    );
    isSelected = isSelected ? true : false;

    return (
      <DiscoverCard
        id={item.id}
        uri={item.uri}
        price={item.price}
        category={item.category.name}
        _onPress={this._onPress}
        _onPressCart={() => this._onPressCart(item)}
        isOnCart={isSelected}
      />
    );
  };

  _renderCard = () => {
    const { products } = this.props;
    if (products) {
      return (
        <FlatList
          data={products}
          renderItem={this._renderCardItem}
          keyExtractor={this._keyExtractor}
        />
      );
    }
  };

  render() {
    return (
      <Container>
        <HeaderDiscover
          _onGoBackButton={this._onGoBackButton}
          {...this.props}
        />
        <Content style={styles.content}>{this._renderCard()}</Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.tempData,
    dataCart: state.cart.data
  };
};

export default connect(
  mapStateToProps,
  {
    productGetByCategoryId,
    postCart
  }
)(Discover);

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
