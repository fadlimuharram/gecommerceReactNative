import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, View, ImageBackground, StyleSheet } from "react-native";
import { Container, Content, Text } from "native-base";
// import DiscoverCard from "../components/DescoverCard";
import HomeCardRecommendation from "../components/HomeCardRecommendation";
import { productGetByCategoryId, postCart } from "../_actions";
import { FlatList } from "react-native-gesture-handler";
import HeaderDiscover from "../components/HeaderDiscover";
import { withHeaderSearch } from "./withHeaderHOC";
import { compose } from "redux";

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
  // _onPressCart = item => {
  //   this.props.postCart(item);
  //   this.props.navigation.navigate("MyCart");
  // };

  _onPressWishList = item => {
    alert(item + " wishlist ");
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
      <HomeCardRecommendation
        id={item.id}
        uri={item.uri}
        title={item.name}
        price={item.price}
        category={item.category.name}
        bgColor="rgba(137, 155, 107, 1.0)"
        onPress={() => this._onPressWishList(item.id)}
      />
    );
  };

  _renderCard = () => {
    const { products } = this.props;
    if (products) {
      return (
        <FlatList
          contentContainerStyle={{ margin: 4 }}
          horizontal={false}
          data={products}
          renderItem={this._renderCardItem}
          keyExtractor={this._keyExtractor}
          numColumns={2}
        />
      );
    }
  };

  render() {
    return <Content style={styles.content}>{this._renderCard()}</Content>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.tempData,
    dataCart: state.cart.data
  };
};

const enhance = compose(
  withHeaderSearch,
  connect(
    mapStateToProps,
    {
      productGetByCategoryId,
      postCart
    }
  )
);

export default enhance(Discover);

const styles = StyleSheet.create({
  content: {}
});
