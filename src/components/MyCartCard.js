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
const MyCartCard = () => (
  <Card>
    <CardItem style={styles.card}>
      <Body style={styles.body}>
        <View style={styles.bodyLeft}>
          <Image
            source={{
              uri:
                "http://1.bp.blogspot.com/-C7WH1oJR4hY/TkaVuexKw5I/AAAAAAAAAso/uy2u_j_O8kM/s1600/anggrek+oncidium.jpg"
            }}
            style={styles.imgItem}
          />
        </View>
        <View style={styles.bodyRight}>
          <Text style={styles.txtTitel}>Judul</Text>
          <Text style={styles.txtCategory}>category</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.txtPrice}>Rp. 3.000.000</Text>

            <Button transparent style={styles.btnCart}>
              <Text style={styles.btnCardTxt}>-</Text>
            </Button>
            <Text style={styles.txtItemCount}>20</Text>

            <Button transparent style={styles.btnCart}>
              <Text style={styles.btnCardTxt}>+</Text>
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
  txtPrice: {
    marginRight: 25,
    fontWeight: "bold"
  },
  btnCart: {
    marginRight: 5,
    alignSelf: "center"
  },
  txtItemCount: {
    marginRight: 5,
    backgroundColor: "white",
    padding: 15
  },
  btnCardTxt: {
    fontSize: 25
  }
});
