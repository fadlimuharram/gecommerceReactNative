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
import { connect } from "react-redux";
import { productFindById } from "../_actions";
class Detail extends Component {
  componentDidMount() {
    const { navigation, productFindById } = this.props;
    // alert(navigation.getParam("productId", "0"));
    productFindById(navigation.getParam("productId", "0"));
  }

  _onPressCart = () => {
    this.props.navigation.navigate("MyCart");
  };
  render() {
    const { detail } = this.props;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={{
                  uri: detail[0].uri
                }}
                style={styles.imgContent}
              />
            </CardItem>
            <CardItem>
              <View style={styles.content}>
                <Text style={styles.txtPrice}>Rp. {detail[0].price}</Text>
                <Text style={styles.txtCategorie}>Anggrek</Text>
                <Text style={styles.txtContent}>{detail[0].desc}</Text>
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

const mapStateToProps = state => {
  return {
    detail: state.products.tempData
  };
};

export default connect(
  mapStateToProps,
  {
    productFindById
  }
)(Detail);

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
