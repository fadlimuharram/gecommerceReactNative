import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, View, ImageBackground, StyleSheet } from "react-native";
import { Container, Content, Text } from "native-base";
// import DiscoverCard from "../components/DescoverCard";
import HomeCardRecommendation from "../components/HomeCardRecommendation";
import { getProductsByCategory } from "../_actions";
import { FlatList } from "react-native-gesture-handler";
import HeaderDiscover from "../components/HeaderDiscover";
import { withHeaderSearch } from "./withHeaderHOC";
import { compose } from "redux";
import Config from "react-native-config";

class Discover extends Component {
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

  // _onPressWishList = item => {
  //   alert(item + " wishlist ");
  // };

  componentDidMount() {
    const { navigation, getProductsByCategory } = this.props;
    const getCategoryID = navigation.getParam("categoryId", 0);
    if (getCategoryID !== 0) {
      getProductsByCategory(getCategoryID, 1, 1);
    }

    // const { navigation, products, productGetByCategoryId } = this.props;

    // productGetByCategoryId(navigation.getParam("categoryId", "0"));
  }

  // _onGoBackButton = () => {
  //   this.props.navigation.navigate("Home");
  // };

  _keyExtractor = (item, index) => item.id;

  // _renderCardItem = ({ item }) => {
  //   let isSelected = this.props.dataCart.find(
  //     (val, index) => val.id === item.id
  //   );
  //   isSelected = isSelected ? true : false;

  //   return (
  //     <HomeCardRecommendation
  //       id={item.id}
  //       uri={item.uri}
  //       title={item.name}
  //       price={item.price}
  //       category={item.category.name}
  //       bgColor="rgba(137, 155, 107, 1.0)"
  //       onPress={() => this._onPressWishList(item.id)}
  //     />
  //   );
  // };

  onPressDetail = productId => {
    this.props.navigation.navigate("Detail", {
      productId: productId
    });
  };

  renderItemRecommendation = ({ item }) => (
    <HomeCardRecommendation
      id={item.id}
      uri={Config.PIC_URI + item.pictures[0].cover}
      title={item.name}
      price={String(item.price)}
      bgColor="rgba(137, 155, 107, 1.0)"
      onPress={() => this.onPressDetail(item.category_id)}
    />
  );

  render() {
    return (
      <Content style={styles.content}>
        <FlatList
          data={this.props.products}
          renderItem={this.renderItemRecommendation}
          keyExtractor={this._keyExtractor}
          numColumns={2}
        />
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.data,
    dataCart: state.cart.data
  };
};

const enhance = compose(
  withHeaderSearch,
  connect(
    mapStateToProps,
    {
      getProductsByCategory
    }
  )
);

export default enhance(Discover);

const styles = StyleSheet.create({
  content: {}
});
