import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";

import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Input,
  Item,
  Form
} from "native-base";

import { DeleteBtnX, PlusLogo, MinusLogo } from "../assets/svg/Love";
import { stringToRupiah } from "../_helpers";
const MyCartCard = ({
  uri,
  title,
  category,
  price,
  quantity,
  _onAddQuantity,
  _onDecQuantity
}) => (
  <Card>
    <CardItem style={styles.card}>
      <Body style={styles.body}>
        <View style={styles.bodyLeft}>
          <Image
            source={{
              uri
            }}
            style={styles.imgItem}
          />
        </View>
        <View style={styles.bodyRight}>
          <View styles={styles.titleContainer}>
            <Text style={styles.txtTitel}>{title}</Text>
            <Text style={styles.txtCategory}>{category}</Text>
          </View>

          <Button small transparent style={styles.btnDelete}>
            <DeleteBtnX width="10" height="10" color="black" />
          </Button>

          <View style={styles.priceContainer}>
            <Text style={styles.txtPrice}>{stringToRupiah(price)}</Text>

            <Button transparent onPress={_onDecQuantity} style={styles.btnCart}>
              <MinusLogo width="10" height="10" color="black" />
            </Button>
            <Text style={styles.txtItemCount}>{quantity}</Text>

            <Button transparent onPress={_onAddQuantity} style={styles.btnCart}>
              <PlusLogo width="10" height="10" color="black" />
            </Button>
          </View>
        </View>
      </Body>
    </CardItem>
  </Card>
);

export default MyCartCard;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row"
  },
  bodyLeft: {},
  card: {
    backgroundColor: "#defcea"
  },
  bodyRight: {
    marginLeft: 10
  },
  imgItem: {
    width: 100,
    height: 100
  },
  priceContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  txtTitel: {
    fontSize: 20,
    fontWeight: "bold"
  },
  txtCategory: {
    fontSize: 12,
    color: "#ADADAD"
  },
  btnDelete: {
    position: "absolute",
    top: 0,
    right: 0
  },
  txtPrice: {
    marginRight: 25,
    fontWeight: "bold"
  },
  btnCart: {
    marginLeft: 20
  },
  txtItemCount: {
    backgroundColor: "white",
    padding: 15
  },
  btnCardTxt: {
    fontSize: 25
  }
});
