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
import { getProductsById, postCart } from "../_actions";
import { CustomerStart } from "../assets/svg/Love";
import Swiper from "react-native-swiper";
import { Love } from "../assets/svg/Love";
import { stringToRupiah } from "../_helpers";
import Config from "react-native-config";

class Detail extends Component {
  componentDidMount() {
    const { navigation, getProductsById } = this.props;
    getProductsById(navigation.getParam("productId", "0"));
  }

  _onPressCart = id => {
    if (this.props.isLoggedIn) {
      // alert(this.props.access_token);
      const { postCart, access_token } = this.props;
      postCart(id, 1, access_token);
      this.props.navigation.navigate("MyCart");
    } else {
      this.props.navigation.navigate("Auth");
    }
  };

  renderSwiperImage = pictures => {
    return pictures.map((val, i) => (
      <Image
        source={{
          uri: Config.PIC_URI + val.cover
        }}
        style={styles.imgContent}
      />
    ));
  };

  render() {
    const { detail } = this.props;
    if (detail.length > 0) {
      return (
        <Container>
          <Content>
            <Card>
              <CardItem cardBody>
                <Swiper
                  style={styles.wrapper}
                  autoplay={true}
                  autoplayDirection={true}
                  autoplayTimeout={2.5}
                  showsButtons={false}
                  activeDotStyle={{
                    backgroundColor: "#28AE5E",
                    width: 15,
                    height: 15,
                    borderColor: "white",
                    borderWidth: 2
                  }}
                  dotStyle={{
                    backgroundColor: "grey",
                    width: 10,
                    height: 10
                  }}
                >
                  {this.renderSwiperImage(detail[0].pictures)}
                </Swiper>
              </CardItem>
              <CardItem>
                <View style={styles.content}>
                  <View style={styles.headerContent}>
                    <View style={styles.headerContentLeft}>
                      <Text style={styles.txtTitle}>{detail[0].name} </Text>
                      <Text style={styles.txtPrice}>
                        {stringToRupiah(String(detail[0].price))}
                      </Text>
                      <Text style={styles.txtCategorie}>
                        {/* {detail[0].category.name} */}
                      </Text>
                    </View>
                    <View style={styles.headerContentRight}>
                      <CustomerStart width="50" height="50" />
                      <View style={styles.headerContentRightText}>
                        <Text style={styles.txtAverage}> 4.7 </Text>
                        <Text style={styles.txtTotalVote}> {`(2983)`} </Text>
                      </View>
                    </View>
                  </View>

                  <Text style={styles.txtContent}>{detail[0].description}</Text>
                  <View style={styles.contentBordered}>
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

                  <View style={styles.discussionContainer}>
                    <Text style={styles.txtDis}>Diskusi Terakhir</Text>
                    <View style={styles.disParent}>
                      <Image
                        source={{
                          uri:
                            "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png"
                        }}
                        style={styles.disParentImg}
                      />
                      <View>
                        <Text style={styles.disParentTxtTitle}>Bagus Aria</Text>
                        <Text style={styles.disParentTxtDate}>
                          17 Maret pukul 19:17
                        </Text>
                        <Text style={styles.disParentTxtContent}>
                          masih ada kak ?
                        </Text>
                      </View>
                    </View>
                    <View style={styles.disChild}>
                      <Image
                        source={{
                          uri:
                            "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png"
                        }}
                        style={styles.disChildImg}
                      />
                      <View>
                        <Text style={styles.disChildTextTitle}>Admin</Text>
                        <Text style={styles.disChildTxtDate}>
                          17 Maret pukul 21:22
                        </Text>
                        <Text style={styles.disChildTxtContent}>
                          masih ada mas
                        </Text>
                      </View>
                    </View>
                    <View style={styles.disReadMore}>
                      <Text style={styles.disReadMoreTxt}>
                        Lihat Semua Diskusi
                      </Text>
                    </View>
                  </View>
                </View>
              </CardItem>
            </Card>
          </Content>
          <Button
            style={styles.btnCart}
            onPress={() => this._onPressCart(detail[0].id)}
            full
          >
            <Text style={styles.btnCartTxt}>Tambah Keranjang</Text>
          </Button>
        </Container>
      );
    } else {
      return <Text>Kosong</Text>;
    }
  }
}

const mapStateToProps = state => {
  return {
    detail: state.products.detail,
    isLoggedIn: state.user.isLoggedIn,
    access_token:
      state.user.access_token.type + " " + state.user.access_token.token
  };
};

export default connect(
  mapStateToProps,
  {
    getProductsById,
    postCart
  }
)(Detail);

const styles = StyleSheet.create({
  imgContent: {
    height: "100%",
    width: "100%"
  },
  content: {
    flex: 1,
    flexDirection: "column"
  },
  txtTitle: {
    fontSize: 30,
    fontWeight: "bold",
    maxWidth: "80%"
  },
  txtPrice: {
    fontSize: 15
  },
  txtCategorie: {
    color: "#AEAEAE",
    marginTop: 3
  },
  txtContent: {
    paddingTop: 30,
    paddingBottom: 30
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
  },
  contentBordered: {
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "#AEAEAE",
    paddingBottom: 12,
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 18,
    paddingBottom: 20
  },
  headerContentLeft: {},
  headerContentRight: {
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  headerContentRightText: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center"
  },
  txtAverage: {
    fontWeight: "bold",
    fontSize: 20
  },
  txtTotalVote: {
    color: "#AEAEAE"
  },
  txtDis: {
    fontWeight: "bold",
    fontSize: 17
  },
  discussionContainer: {
    marginTop: 20
  },
  disParent: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row"
  },
  disParentImg: {
    width: 80,
    height: 80
  },
  disParentTxtTitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 3
  },
  disParentTxtDate: {
    color: "#AEAEAE",
    fontSize: 10
  },
  disParentTxtContent: {
    marginTop: 5,
    color: "#757575"
  },
  disChild: {
    paddingLeft: 80,
    flex: 1,
    flexDirection: "row"
  },
  disChildImg: {
    width: 30,
    height: 30
  },
  disChildTxtTitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 3
  },
  disChildTxtDate: {
    color: "#AEAEAE",
    fontSize: 10
  },
  disChildTxtContent: {
    marginTop: 5,
    color: "#757575"
  },
  disReadMore: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 20
  },
  disReadMoreTxt: {
    color: "#28AE5E"
  },
  wrapper: {
    width: "100%",
    height: 300
  }
});
