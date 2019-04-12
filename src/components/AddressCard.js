import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Content, Card } from "native-base";
import { MapsLogo } from "../assets/svg/Love";
class AddressCard extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props._onPress}>
        <View style={styles.addressContainer}>
          <View style={styles.addressMapsIconContainer}>
            <MapsLogo height="30" width="30" color="black" />
          </View>

          <View style={styles.addressContent}>
            <Text style={styles.titleAddress}>{this.props.title}</Text>
            <Text style={styles.descAddres}>{this.props.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default AddressCard;

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: "row"
  },
  addressMapsIconContainer: {
    alignSelf: "center"
  },
  addressContent: {
    padding: 20
  },
  titleAddress: {
    width: "100%",
    fontWeight: "bold",
    fontSize: 20
  },
  descAddres: {
    fontSize: 12,
    width: "100%"
  }
});
