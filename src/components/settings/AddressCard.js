import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Card, Button } from "native-base";
import {
  MapsLogo,
  ArrowRightToggle,
  ArrowBottomToggle
} from "../../assets/svg/Love";
import AddressCard from "../AddressCard";
import FormAddress from "../FormAddress";
class AddressSettingCard extends Component {
  state = {
    isShow: false,
    isEdited: false
  };

  toggleIsShow = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };

  toggleIsEdited = () => {
    this.setState({
      isEdited: !this.state.isEdited
    });
  };

  renderEditedCard = () => (
    <View>
      <FormAddress _onCancle={this.toggleIsEdited} isEdited={true} />
    </View>
  );

  renderCard = () => {
    if (this.state.isEdited) {
      return this.renderEditedCard();
    } else {
      return <AddressCard _onPress={this.toggleIsEdited} />;
    }
  };

  renderIsShow = () => {
    if (this.state.isShow) {
      return (
        <View>
          {this.renderCard()}
          <TouchableOpacity
            style={styles.txtNewAddressContainer}
            onPress={this._onPressToAddAddress}
          >
            <Text style={styles.txtAddNewAddress}>
              {" "}
              Add New Address {`(+)`}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  renderIsShowButton = () => {
    if (this.state.isShow) {
      return <ArrowBottomToggle width="25" height="25" color="black" />;
    } else {
      return <ArrowRightToggle width="25" height="25" color="black" />;
    }
  };

  _onPressToAddAddress = () => {
    this.props.navigation.navigate("AddAddress");
  };

  render() {
    return (
      <Card>
        <View style={styles.addressTopContainer}>
          <MapsLogo width="25" height="25" color="black" />
          <Text style={styles.txtAdress}>Daftar Alamat</Text>
          <View style={styles.toggleArrowContainer}>
            <TouchableOpacity onPress={this.toggleIsShow}>
              {this.renderIsShowButton()}
            </TouchableOpacity>
          </View>
        </View>
        {this.renderIsShow()}
      </Card>
    );
  }
}

export default AddressSettingCard;

const styles = StyleSheet.create({
  addressTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20
  },
  txtAdress: {
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 20
  },
  toggleArrowContainer: {
    position: "absolute",
    right: 0,
    marginRight: 30
  },
  txtNewAddressContainer: {
    marginTop: 20,
    alignSelf: "flex-end",
    padding: 10
  },
  txtAddNewAddress: {
    color: "#28AE5E"
  }
});
