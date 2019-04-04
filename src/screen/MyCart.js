import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Container, Content, Button, Text } from "native-base";
import MyCartCard from "../components/MyCartCard";
import { RightArrow } from "../assets/svg/Love";
import { connect } from "react-redux";
import { updatCart } from "../_actions";
import { stringToRupiah } from "../_helpers";
class MyCart extends Component {
  state = {
    data: [],
    total: 0
  };
  _onPress = () => {
    this.props.navigation.navigate("Checkout", {
      totalCart: stringToRupiah(this.state.total.toString())
    });
  };

  refreshData = () => {
    const { dataCart } = this.props;
    this.setState({
      data: dataCart
    });
    this.countTotal();
  };

  componentDidMount() {
    this.refreshData();

    this.props.navigation.addListener("willFocus", route => {
      this.refreshData();
    });
  }

  countTotal = () => {
    let total = 0;
    this.props.dataCart.forEach((val, i) => {
      total += val.quantity * val.price;
    });
    this.setState({
      total: total
    });
  };

  _onAddQuantity = id => {
    const newStateData = [];
    this.state.data.forEach((val, i) => {
      if (val.id === id) {
        newStateData.push({
          id: val.id,
          name: val.name,
          price: val.price,
          desc: val.desc,
          uri: val.uri,
          category_id: val.category_id,
          category: val.category, //dummy
          quantity: val.quantity + 1
        });
      } else {
        newStateData.push(val);
      }
    });
    this.setState({
      data: newStateData
    });
    this.countTotal();
    this.props.updatCart(newStateData);
  };

  _renderItem = ({ item }) => {
    return (
      <MyCartCard
        uri={item.uri}
        title={item.name}
        category={item.category.name}
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
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />

          <View style={styles.break} />
        </Content>
        <View style={styles.contentCheckout}>
          <View>
            <Text style={styles.txtTotal}>Total</Text>
            <Text style={styles.txtPrice}>
              {stringToRupiah(this.state.total.toString())}
            </Text>
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
  { updatCart }
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
