import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import { Card, CardItem, Body, Button } from "native-base";
import { stringToRupiah } from "../_helpers";
import { Love } from "../assets/svg/Love";
const HomeCardRecommendation = ({
  uri,
  title,
  bgColor,
  price,
  category,
  onPress
}) => (
  <TouchableOpacity onPress={onPress}>
    <Card style={styles.card}>
      <CardItem cardBody>
        <ImageBackground source={{ uri }} style={styles.img}>
          <Button style={styles.btnWishlist} rounded small>
            <Love width="15" height="15" color="white" />
          </Button>
        </ImageBackground>
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Body>
          <Text style={styles.txtTitle}>{title}</Text>
          <Text style={styles.txtPrice}>{stringToRupiah(price)}</Text>
        </Body>
      </CardItem>
    </Card>
  </TouchableOpacity>
);

export default HomeCardRecommendation;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: null,
    height: Dimensions.get("window").width / 2 - 90
  },
  card: {
    width: Dimensions.get("window").width / 2 - 10,
    height: Dimensions.get("window").width / 2
  },
  txtTitle: {
    width: "95%",
    fontWeight: "bold",
    fontSize: 16
  },
  txtBtnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  txtPrice: {
    marginTop: 10,
    color: "#28AE5E",
    fontSize: 12
  },
  txtCategory: {
    alignSelf: "flex-end"
  },
  btnWishlist: {
    width: 25,
    height: 25,
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 5,
    backgroundColor: "#28AE5E",
    justifyContent: "center",
    alignItems: "center"
  }
});
