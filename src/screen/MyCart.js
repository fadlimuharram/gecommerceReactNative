import React, { Component } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Button,
  Text,
  Card,
  CardItem,
  Body
} from "native-base";
import MyCartCard from "../components/MyCartCard";
import { RightArrow, ArrowLeft2, MapsLogo } from "../assets/svg/Love";
import { connect } from "react-redux";
import { updatCart, deleteCart } from "../_actions";
import { stringToRupiah } from "../_helpers";
import Header from "../components/Header";
import AddressCart from "../components/AddressCard";
import { ScrollView } from "react-native-gesture-handler";

class MyCart extends Component {
  state = {
    data: [],
    total: 0,
    isMyCartShow: true
  };

  _onPressToCheckOut = () => {
    this.props.navigation.navigate("Checkout", {
      totalCart: stringToRupiah(this.state.total.toString())
    });
  };

  _onPressToAddAddress = () => {
    this.props.navigation.navigate("AddAddress");
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

    this.props.navigation.addListener("didFocus", route => {
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
    this.props.updatCart(newStateData);
    this.refreshData();
  };

  _onDecQuantity = id => {
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
          quantity: val.quantity - 1
        });
      } else {
        newStateData.push(val);
      }
    });
    this.setState({
      data: newStateData
    });
    this.props.updatCart(newStateData);
    this.refreshData();
  };

  _deleteCart = id => {
    this.props.deleteCart(id);
    this.refreshData();
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
        _onDecQuantity={() => this._onDecQuantity(item.id)}
        _onDeleteCart={() => this._deleteCart(item.id)}
      />
    );
  };

  _keyExtractor = (item, index) => item.id;

  renderMyCart = () => {
    if (this.state.isMyCartShow) {
      return (
        <Content>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />

          <View style={styles.break} />
        </Content>
      );
    } else {
      return (
        <Content>
          <Card>
            <CardItem>
              <Body>
                <AddressCart _onPress={this._onPressToCheckOut} />
                <AddressCart _onPress={this._onPressToCheckOut} />
                <AddressCart _onPress={this._onPressToCheckOut} />
                <AddressCart _onPress={this._onPressToCheckOut} />

                <TouchableOpacity
                  onPress={this._onPressToAddAddress}
                  style={{ alignSelf: "flex-end" }}
                >
                  <Text style={{ color: "#28AE5E" }}>
                    Tambah Lokasi Baru {`(+)`}
                  </Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
        </Content>
      );
    }
  };

  renderMyCartButton = () => {
    if (this.state.isMyCartShow) {
      return (
        <Button onPress={this._toggleMyCart} style={styles.btnCheckout}>
          <Text>Masukan Alamat </Text>
          <RightArrow width="20" height="20" color="white" />
        </Button>
      );
    } else {
      return (
        <Button onPress={this._toggleMyCart} style={styles.btnKeranjang}>
          <ArrowLeft2 width="20" height="20" color="white" />
          <Text> Keranjang </Text>
        </Button>
      );
    }
  };

  _toggleMyCart = () => {
    this.setState({
      isMyCartShow: !this.state.isMyCartShow
    });
  };

  render() {
    return (
      <Container>
        <Header {...this.props} />

        {this.renderMyCart()}

        <View style={styles.contentCheckout}>
          <View>
            <Text style={styles.txtTotal}>Total</Text>
            <Text style={styles.txtPrice}>
              {stringToRupiah(this.state.total.toString())}
            </Text>
          </View>
          <View>{this.renderMyCartButton()}</View>
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
  { updatCart, deleteCart }
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
    width: "100%",
    borderColor: "#C9C9C9",
    borderTopWidth: 1
  },
  break: {
    marginBottom: 70
  },
  btnCheckout: {
    backgroundColor: "#28AE5E",
    paddingRight: 10
  },
  btnKeranjang: {
    backgroundColor: "#28AE5E",
    paddingLeft: 10
  },
  txtPrice: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#28AE5E"
  },
  txtTotal: {
    fontWeight: "bold"
  },
  addressContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  }
});
