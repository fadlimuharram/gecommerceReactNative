import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Container, Content, Button, Text } from "native-base";
import MyCartCard from "../components/MyCartCard";
import { RightArrow } from "../assets/svg/Love";
import { connect } from "react-redux";
import { addQuantity } from "../_actions";
class MyCart extends Component {
  _onPress = () => {
    this.props.navigation.navigate("Checkout", {
      totalCart: this.props.totalCart
    });
  };

  _onAddQuantity = id => {
    this.props.addQuantity(id);
  };

  _renderItem = ({ item }) => {
    return (
      <MyCartCard
        uri={item.uri}
        title={item.name}
        category={item.category_id}
        price={item.price}
        quantity={item.quantity}
        _onAddQuantity={() => this._onAddQuantity(item.id)}
      />
    );
  };

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.props.dataCart}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />

          <View style={styles.break} />
        </Content>
        <View style={styles.contentCheckout}>
          <View>
            <Text style={styles.txtTotal}>Total</Text>
            <Text style={styles.txtPrice}>Rp. {this.props.totalCart}</Text>
          </View>
          <View>
            <Button onPress={this._onPress} style={styles.btnCheckout}>
              <Text>Checkout </Text>
              <RightArrow width="20" height="20" color="white" />
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataCart: state.cart.data,
    totalCart: state.cart.total
  };
};

export default connect(
  mapStateToProps,
  { addQuantity }
)(MyCart);

const styles = StyleSheet.create({
  contentCheckout: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%"
  },
  break: {
    marginBottom: 70
  },
  btnCheckout: {
    backgroundColor: "#28AE5E",
    paddingRight: 10
  },
  txtPrice: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#28AE5E"
  },
  txtTotal: {
    fontWeight: "bold"
  }
});
