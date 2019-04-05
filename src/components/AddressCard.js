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
            <Text style={styles.titleAddress}>Permata Bintaro Residence</Text>
            <Text style={styles.descAddres}>
              Jl. Elang IV, Sawah Lama, Ciputat, Kota Tangerang Selatan, Banten
              15413
            </Text>
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
    fontWeight: "bold",
    fontSize: 20
  },
  descAddres: {
    fontSize: 12,
    width: "80%"
  }
});
