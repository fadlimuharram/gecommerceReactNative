import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Content, Card, Button } from "native-base";
import { CreditCard } from "../assets/svg/Love";
import {
  CreditCardInput,
  LiteCreditCardInput
} from "react-native-credit-card-input";

// const Checkout = () => <CreditCardInput onChange={_onChange} />;

class Checkout extends Component {
  state = {
    totalCart: 0,
    number: 0,
    expiry: 0,
    cvc: 0,
    type: "visa" // will be one of [null, "visa", "master-card", "american-express", "diners-club", "discover", "jcb", "unionpay", "maestro"]
  };

  componentDidMount() {
    this.setState({
      totalCart: this.props.navigation.getParam("totalCart", 0)
    });
  }
  _onChange = form => {
    const { number, expiry, cvc } = form.values;
    this.setState({
      number,
      expiry,
      cvc
    });
  };
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.txtTotal}>TOTAL</Text>
        <Text style={styles.txtPrice}>Rp. {this.state.totalCart}</Text>
        <CreditCardInput onChange={this._onChange} />
        <Button style={styles.btnPay} full>
          <Text style={styles.txtBtnPay}>Pay Secure</Text>
        </Button>
      </View>
    );
  }
}

export default Checkout;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 30
  },
  btnPay: {
    position: "absolute",
    bottom: 0,
    width: "100%",

    backgroundColor: "#28AE5E"
  },
  txtBtnPay: {
    color: "white"
  },
  txtPrice: {
    alignSelf: "center",
    fontSize: 30,
    color: "#28AE5E",
    fontWeight: "bold",
    marginBottom: 40
  },
  txtTotal: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 5
  }
});
