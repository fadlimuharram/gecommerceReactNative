import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Picker,
  Item,
  Label,
  Button
} from "native-base";
import { connect } from "react-redux";
import { getAddressById } from "../_actions";
import Config from "react-native-config";
import { stringToRupiah } from "../_helpers/currency";
import axios from "axios";

class OrderDetail extends Component {
  state = {
    weight: 0,
    result: [],
    selectedCourier: {}
  };

  componentDidMount() {
    const {
      getAddressById,
      navigation,
      access_token,
      cart,
      total
    } = this.props;
    this.countTotalWeight(cart);
    getAddressById(navigation.getParam("id", "0"), access_token);
  }

  getCost = weight => {
    const data = {
      destination: this.props.navigation.getParam("city_id", "0"),
      weight: weight,
      courier: "jne"
    };
    // alert(JSON.stringify(data));
    axios
      .post(Config.API_URL + "cost", data, {
        headers: {
          Authorization: this.props.access_token
        }
      })
      .then(response => {
        this.setState({
          result: response.data.data.rajaongkir.results[0],
          selectedCourier: response.data.data.rajaongkir.results[0].costs[0]
        });
      })
      .catch(e => {
        alert(JSON.stringify(e));
      });
  };

  countTotalWeight = cart => {
    let total = 0;
    cart.forEach((val, i) => {
      total += val.quantity * val.product.weight;
    });
    this.setState({
      weight: total
    });
    this.getCost(total);
  };

  onCourierChange = key => {
    const data = this.state.result.costs.filter(val => {
      return val.service === key;
    });
    this.setState({
      selectedCourier: data[0]
    });
  };

  renderProduct = products => {
    return products.map((val, i) => (
      <View style={styles.productContainer}>
        <Image
          style={styles.productImg}
          source={{
            uri: Config.PIC_URI + val.product.pictures[0].cover
          }}
        />
        <View style={styles.productContent}>
          <Text style={styles.productNameTxt}>{val.product.name}</Text>
          <Text style={styles.quantityWeightTxt}>
            {val.quantity} barang{" "}
            {`(${val.product.weight * val.quantity} gram)`}
          </Text>
          <Text style={styles.productTotalTxt}>
            {stringToRupiah(val.product.price * val.quantity)}
          </Text>
        </View>
      </View>
    ));
  };

  renderPicker = () => {
    if (this.state.result.costs && this.state.result.costs.length > 0) {
      return this.state.result.costs.map(val => {
        return <Picker.Item label={val.service} value={val.service} />;
      });
    }
  };

  render() {
    if (this.props.detail.id && this.state.result) {
      const { address, title, receiver, phone } = this.props.detail;

      return (
        <Container>
          <Content>
            <Card>
              <CardItem>
                <Body>
                  <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>
                      Tujuan Pengiriman {`(${title})`}
                    </Text>
                  </View>

                  <Text style={styles.txtReceiver}>{receiver}</Text>

                  <Text>{phone}</Text>
                  <Text>{address}</Text>
                </Body>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Body>
                  <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Rincian Barang</Text>
                  </View>

                  {this.renderProduct(this.props.cart)}
                </Body>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Body>
                  <Item inlineLabel>
                    <Label>Kurir</Label>
                    <Picker
                      note
                      mode="dropdown"
                      style={{ width: 120 }}
                      selectedValue={this.state.selectedCourier.service}
                      onValueChange={this.onCourierChange}
                    >
                      {this.renderPicker()}
                    </Picker>
                  </Item>

                  <Text style={styles.txtWeight}>
                    Berat : {this.state.weight} gram{" "}
                  </Text>
                  <Text>
                    Perkiraan tiba:{" "}
                    {this.state.selectedCourier.cost &&
                      this.state.selectedCourier.cost[0].etd}{" "}
                    hari
                  </Text>
                  <Text style={styles.productTotalTxt}>
                    {this.state.selectedCourier.cost &&
                      stringToRupiah(this.state.selectedCourier.cost[0].value)}
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Body>
                  <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Ringkasan Barang</Text>
                  </View>
                  <Text>
                    Total Belanja : {stringToRupiah(this.props.total)}
                  </Text>
                  <Text>
                    Total Ongkos Kirim :{" "}
                    {this.state.selectedCourier.cost &&
                      stringToRupiah(this.state.selectedCourier.cost[0].value)}
                  </Text>
                  <Text>Total Pembayaran : </Text>
                  <Text style={styles.txtTotalPayment}>
                    {this.state.selectedCourier.cost &&
                      stringToRupiah(
                        this.props.total +
                          this.state.selectedCourier.cost[0].value
                      )}
                  </Text>
                </Body>
              </CardItem>
              <Button style={styles.btnPay} full>
                <Text style={styles.txtBtnPay}>Bayar</Text>
              </Button>
            </Card>
          </Content>
        </Container>
      );
    } else {
      return <Text>loading...</Text>;
    }
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.data,
    total: state.cart.total,
    detail: state.address.detailData,
    access_token:
      state.user.access_token.type + " " + state.user.access_token.token
  };
};

export default connect(
  mapStateToProps,
  { getAddressById }
)(OrderDetail);

const styles = StyleSheet.create({
  headerTextContainer: {
    borderColor: "grey",
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  headerText: {
    fontWeight: "bold",
    paddingBottom: 4,
    fontSize: 16
  },
  txtReceiver: {
    fontWeight: "bold"
  },
  productContainer: {
    flexDirection: "row",
    paddingTop: 5
  },
  productImg: {
    flex: 1,
    width: null,
    height: Dimensions.get("window").width / 2 - 150
  },
  productContent: {
    flex: 4,
    paddingLeft: 5
  },
  productNameTxt: {
    fontWeight: "bold"
  },
  quantityWeightTxt: {
    fontSize: 10
  },
  productTotalTxt: {
    color: "#28AE5E"
  },
  txtWeight: {
    marginTop: 10
  },
  txtTotalPayment: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
    alignSelf: "center"
  },
  btnPay: {
    backgroundColor: "#28AE5E",
    marginTop: 15
  },
  txtBtnPay: {
    color: "white"
  }
});
