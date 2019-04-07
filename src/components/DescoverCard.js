import React from "react";
import {
  Image,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions
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
import { Love } from "../assets/svg/Love";
import { stringToRupiah } from "../_helpers";

const DiscoverCard = ({ id, uri, price, name, _onPress, _onPressCart }) => (
  <Card style={styles.card}>
    <TouchableOpacity onPress={() => _onPress(id)}>
      <CardItem cardBody>
        <ImageBackground
          source={{
            uri
          }}
          style={{ height: 200, width: null, flex: 1 }}
        >
          <Button style={styles.btnWishlist} rounded>
            <Love width="25" height="25" color="white" />
          </Button>
        </ImageBackground>
      </CardItem>
    </TouchableOpacity>
    <CardItem>
      <Body style={styles.leftTxt}>
        <View>
          <Text style={styles.txtDesc}>{name}</Text>
          <Text style={styles.txtPrice}>{stringToRupiah(price)}</Text>
        </View>
      </Body>
    </CardItem>
  </Card>
);

export default DiscoverCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    width: Dimensions.get("window").width / 2
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
