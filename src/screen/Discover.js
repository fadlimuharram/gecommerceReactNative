import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, View, ImageBackground, StyleSheet } from "react-native";
import { Container, Content, Text } from "native-base";
import DiscoverCard from "../components/DescoverCard";
import { productGetByCategoryId } from "../_actions";
import { FlatList } from "react-native-gesture-handler";

class Discover extends Component {
  state = {
    products: []
  };

  _onPress = id => {
    this.props.navigation.navigate("Detail", {
      productId: id
    });
  };
  _onPressCart = () => {
    this.props.navigation.navigate("MyCart");
  };

  componentDidMount() {
    const { navigation, products, productGetByCategoryId } = this.props;

    // this.setState({
    //   selectedCategoryId: navigation.getParam("categoryId", "0")
    // });

    productGetByCategoryId(navigation.getParam("categoryId", "0"));
    // console.log("qq", this.props.products.tempData);
  }

  _keyExtractor = (item, index) => item.id;

  _renderCardItem = ({ item }) => (
    <DiscoverCard
      id={item.id}
      uri={item.uri}
      price={item.price}
      category={item.category_id}
      _onPress={this._onPress}
      _onPressCart={this._onPressCart}
    />
  );

  _renderCard = () => {
    const { products } = this.props;
    if (products) {
      console.log("pp", products);
      return (
        <FlatList
          data={products}
          renderItem={this._renderCardItem}
          keyExtractor={this._keyExtractor}
        />
      );
    }
    // console.log("pp", products);
    // return Object.keys(products).map(i => (
    //   <DiscoverCard
    //     uri={products[i].uri}
    //     price={product[i].price}
    //     category={product[i].categoryId}
    //     _onPress={this._onPress}
    //     _onPressCart={this._onPressCart}
    //   />
    // ));
  };

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          {this._renderCard()}
          {/* <Text>
            {this.props.products.length > 0
              ? this.renderCard(this.props.product)
              : "kosong"}
          </Text> */}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log("tmpdt", state.products);
  return {
    products: state.products.tempData
  };
};

export default connect(
  mapStateToProps,
  {
    productGetByCategoryId
  }
)(Discover);

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
