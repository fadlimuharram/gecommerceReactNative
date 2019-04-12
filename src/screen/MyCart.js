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
import { getCart, getAddress, updatCart, deleteCart } from "../_actions";
import { stringToRupiah } from "../_helpers";
import Header from "../components/Header";
import AddressCart from "../components/AddressCard";
import { ScrollView } from "react-native-gesture-handler";
import Config from "react-native-config";
class MyCart extends Component {
  state = {
    isMyCartShow: true
  };

  _onPressToCheckOut = () => {
    // this.props.navigation.navigate("Checkout", {
    //   totalCart: stringToRupiah(this.state.total.toString())
    // });
  };

  _onPressToAddAddress = () => {
    this.props.navigation.navigate("AddAddress");
  };

  isLoggedInStatus() {
    const { isLoggedIn, access_token } = this.props;
    if (!isLoggedIn) {
      this.props.navigation.navigate("Auth");
    } else {
      this.props.navigation.addListener("didFocus", () => {
        this.props.getCart(access_token);
        this.props.getAddress(access_token);
      });
    }
  }

  onAddQuantity = (id, oldQuantity) => {
    const quantity = oldQuantity + 1;
    this.props.updatCart(id, quantity, this.props.access_token);
  };

  onDecQuantity = (id, oldQuantity) => {
    if (oldQuantity - 1 > 0) {
      const quantity = oldQuantity - 1;
      this.props.updatCart(id, quantity, this.props.access_token);
    }
  };

  onQuantityTextChange = (id, oldQuantity) => {
    this.props.updatCart(id, oldQuantity, this.props.access_token);
  };

  deleteCart = id => {
    this.props.deleteCart(id, this.props.access_token);
    this.props.getCart(this.props.access_token);
  };

  generateTotal = () => {
    // alert(this.props.dataCart[0].product.name);
    if (this.props.dataCart) {
      let ttl = 0;
      this.props.dataCart.forEach((val, i) => {
        ttl += val.quantity * val.product.price;
      });
      return String(ttl);
    }
  };

  _renderItem = ({ item }) => {
    return (
      <MyCartCard
        id={item.id}
        uri={Config.PIC_URI + item.product.pictures[0].cover}
        title={item.product.name}
        category={item.product.category.name}
        price={item.product.price}
        quantity={item.quantity}
        _onAddQuantity={() => this.onAddQuantity(item.id, item.quantity)}
        _onDecQuantity={() => this.onDecQuantity(item.id, item.quantity)}
        _onDeleteCart={() => this.deleteCart(item.id)}
      />
    );
  };

  _keyExtractor = (item, index) => item.id;

  renderAddress = () => {
    return this.props.dataAddress.map((val, i) => (
      <AddressCart
        title={val.title}
        address={val.address}
        _onPress={this._onPressToCheckOut}
      />
    ));
  };

  renderMyCart = () => {
    if (this.state.isMyCartShow) {
      return (
        <Content>
          <FlatList
            data={this.props.dataCart}
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
                {this.renderAddress()}
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
    this.isLoggedInStatus();
    return (
      <Container>
        <Header {...this.props} />

        {this.renderMyCart()}

        <View style={styles.contentCheckout}>
          <View>
            <Text style={styles.txtTotal}>Total</Text>
            <Text style={styles.txtPrice}>
              {/* {stringToRupiah(this.state.total)} */}
              {stringToRupiah(String(this.props.totalCart))}
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
    totalCart: state.cart.total,
    access_token:
      state.user.access_token.type + " " + state.user.access_token.token,
    isLoggedIn: state.user.isLoggedIn,
    dataAddress: state.address.data
  };
};

export default connect(
  mapStateToProps,
  { getCart, getAddress, updatCart, deleteCart }
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
