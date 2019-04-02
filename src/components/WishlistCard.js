import React from "react";
import {
  Image,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import { Trash } from "../assets/svg/Love";

const WishlistCard = ({ uri, price, category, _onPress, _onPressCart }) => (
  <Card style={styles.card}>
    <TouchableOpacity onPress={_onPress}>
      <CardItem cardBody>
        <ImageBackground
          source={{
            uri
          }}
          style={{ height: 200, width: null, flex: 1 }}
        >
          <Button style={styles.btnWishlist} rounded>
            <Trash width="25" height="25" />
          </Button>
        </ImageBackground>
      </CardItem>
    </TouchableOpacity>
    <CardItem>
      <Left style={styles.leftTxt}>
        <View>
          <Text style={styles.txtPrice}>{price}</Text>
          <Text style={styles.txtDesc}>{category}</Text>
        </View>
      </Left>
      <Body>
        <Button rounded onPress={_onPressCart} style={styles.btnBuy}>
          <Text>Tambah Keranjang</Text>
        </Button>
      </Body>
    </CardItem>
  </Card>
);

export default WishlistCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 15
  },
  btnWishlist: {
    width: 50,
    height: 50,
    backgroundColor: "#28AE5E",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 7,
    marginRight: 10
  },
  leftTxt: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  btnBuy: {
    backgroundColor: "#28AE5E"
  },
  txtPrice: {
    fontSize: 20,
    fontWeight: "bold"
  },
  txtDesc: {
    fontSize: 12
  }
});
