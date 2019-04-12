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
import { connect } from "react-redux";
import { updatCart, getCart } from "../_actions";

class MyCartCard extends React.Component {
  state = {
    tempQuantity: 0
  };

  componentDidMount() {
    this.setState({
      tempQuantity: this.props.quantity
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.quantity !== this.state.tempQuantity) {
      this.setState({ tempQuantity: nextProps.quantity });
    }
  }

  onQuantityChange = text => {
    if (text > 0) {
      this.props.updatCart(this.props.id, text, this.props.access_token);
      this.setState({
        tempQuantity: this.props.quantity
      });
    }

    this.setState({
      tempQuantity: text
    });
  };

  render() {
    const {
      id,
      uri,
      title,
      category,
      price,
      quantity,
      _onAddQuantity,
      _onDecQuantity,
      _onDeleteCart,
      onQuantityTextChange
    } = this.props;
    return (
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

              <Button
                small
                transparent
                onPress={_onDeleteCart}
                style={styles.btnDelete}
              >
                <DeleteBtnX width="10" height="10" color="black" />
              </Button>

              <View style={styles.priceContainer}>
                <Text style={styles.txtPrice}>{stringToRupiah(price)}</Text>

                <Button
                  transparent
                  onPress={_onDecQuantity}
                  style={styles.btnCart}
                >
                  <MinusLogo width="10" height="10" color="black" />
                </Button>
                <TextInput
                  style={styles.txtItemCount}
                  value={String(this.state.tempQuantity)}
                  onChangeText={this.onQuantityChange}
                />

                <Button
                  transparent
                  onPress={_onAddQuantity}
                  style={styles.btnCart}
                >
                  <PlusLogo width="10" height="10" color="black" />
                </Button>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    access_token:
      state.user.access_token.type + " " + state.user.access_token.token,
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { updatCart, getCart }
)(MyCartCard);

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
