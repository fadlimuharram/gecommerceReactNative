import React, { Component } from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
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
  Body,
  Right
} from "native-base";

class Detail extends Component {
  _onPressCart = () => {
    this.props.navigation.navigate("MyCart");
  };
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://cdn.shopify.com/s/files/1/1589/6833/products/ASMBUN1134_7-Luxury-White-Anggrek-In--Vase_133c5686-fe67-4fb9-a5fa-d8f2e10c21f3_800x.png"
                }}
                style={styles.imgContent}
              />
            </CardItem>
            <CardItem>
              <View style={styles.content}>
                <Text style={styles.txtPrice}>Rp. 3.000.000</Text>
                <Text style={styles.txtCategorie}>Anggrek</Text>
                <Text style={styles.txtContent}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Placeat odio eius unde sunt sed cumque aut, quae corrupti
                  velit non voluptas quos veritatis soluta ducimus obcaecati
                  debitis rem fuga consectetur!
                </Text>
                <ScrollView horizontal={true} style={styles.tagContent}>
                  <Button
                    style={styles.btnStyle}
                    color="28AE5E"
                    bordered
                    rounded
                  >
                    <Text style={styles.btnTxt}>Tag Satu</Text>
                  </Button>
                  <Button style={styles.btnStyle} bordered rounded>
                    <Text style={styles.btnTxt}>Tag Dua</Text>
                  </Button>
                  <Button style={styles.btnStyle} bordered rounded>
                    <Text style={styles.btnTxt}>Tag Tiga</Text>
                  </Button>
                </ScrollView>
              </View>
            </CardItem>
          </Card>
        </Content>
        <Button style={styles.btnCart} onPress={this._onPressCart} full>
          <Text style={styles.btnCartTxt}>Tambah Keranjang</Text>
        </Button>
      </Container>
    );
  }
}

export default Detail;

const styles = StyleSheet.create({
  imgContent: {
    height: 500,
    width: null,
    flex: 1
  },
  content: {
    flex: 1,
    flexDirection: "column"
  },
  txtPrice: {
    fontSize: 30,
    fontWeight: "bold"
  },
  txtCategorie: {
    color: "#AEAEAE",
    marginTop: 3
  },
  txtContent: {
    marginTop: 10
  },
  tagContent: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15
  },
  btnStyle: {
    borderColor: "#28AE5E",
    marginRight: 5
  },
  btnTxt: {
    color: "#28AE5E"
  },
  btnCart: {
    borderColor: "#28AE5E",
    backgroundColor: "#28AE5E"
  },
  btnCartTxt: {
    color: "white"
  }
});
