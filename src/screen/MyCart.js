import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Content, Button, Text } from "native-base";
import MyCartCard from "../components/MyCartCard";
import { RightArrow } from "../assets/svg/Love";

class MyCart extends Component {
  _onPress = () => {
    this.props.navigation.navigate("Checkout");
  };
  render() {
    return (
      <Container>
        <Content>
          <MyCartCard />
          <MyCartCard />
          <MyCartCard />
          <MyCartCard />
          <MyCartCard />
          <View style={styles.break} />
        </Content>
        <View style={styles.contentCheckout}>
          <View>
            <Text style={styles.txtTotal}>Total</Text>
            <Text style={styles.txtPrice}>Rp. 2.000.000</Text>
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

export default MyCart;

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
