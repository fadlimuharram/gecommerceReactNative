import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Form,
  Textarea,
  Item,
  Input,
  Card,
  Button,
  Picker,
  Label
} from "native-base";
import axios from "axios";
import { connect } from "react-redux";
import Config from "react-native-config";
class FormAddress extends Component {
  state = {
    isEdited: false,
    province: [],
    selectedProvince: 6,
    selectedProvinceData: [],
    city: [],
    selectedCity: 0,
    selectedCityData: [],
    title: "",
    address: "",
    postal: "",
    receiver: "",
    phone: ""
  };

  componentDidMount() {
    if (this.props.isEdited && this.props.isEdited === true) {
      this.setState({ isEdited: true });
    }
    this.requestProvince();
    this.requestCity(this.state.selectedProvince);
  }

  onSubmit = () => {
    // this.props.onSubmit();
    const {
      title,
      address,
      selectedProvinceData,
      selectedProvince,
      selectedCityData,
      selectedCity,
      postal,
      receiver,
      phone
    } = this.state;
    const data = {
      title,
      address,
      province: selectedProvinceData.province,
      province_id: selectedProvince,
      city: selectedCityData.city_name,
      city_id: selectedCity,
      postal,
      receiver,
      phone
    };
    this.props.onSubmit(data);
  };

  requestProvince = () => {
    axios
      .get(Config.API_URL + "province", {
        headers: {
          Authorization: this.props.access_token
        }
      })
      .then(res => {
        this.setState({
          province: res.data.data.rajaongkir.results,
          selectedProvince: "6"
        });
        this.findProvinceById();
      });
  };

  requestCity = val => {
    axios
      .get(Config.API_URL + `city/${val}`, {
        headers: {
          Authorization: this.props.access_token
        }
      })
      .then(res => {
        this.setState({
          city: res.data.data.rajaongkir.results,
          selectedCity: res.data.data.rajaongkir.results[0].city_id
        });
        this.findPostalByIdCity();
      });
  };

  renderButton = () => {
    if (this.state.isEdited) {
      return (
        <View style={styles.btnContainer}>
          <Button style={styles.btnSave}>
            <Text style={styles.txtSave}>Simpan</Text>
          </Button>
          <Button onPress={this.props._onCancle} style={styles.btnSave}>
            <Text style={styles.txtSave}>Cancle</Text>
          </Button>
        </View>
      );
    } else {
      return (
        <Button style={styles.btnSave} onPress={this.onSubmit} full>
          <Text style={styles.txtSave}>Simpan</Text>
        </Button>
      );
    }
  };

  renderProvince = () => {
    return this.state.province.map((val, i) => (
      <Picker.Item label={`${val.province}`} value={`${val.province_id}`} />
    ));
  };

  renderCity = () => {
    return this.state.city.map((val, i) => (
      <Picker.Item label={`${val.city_name}`} value={`${val.city_id}`} />
    ));
  };

  onValueProvinceChange = val => {
    this.setState({
      selectedProvince: val
      // province: dataProvince.province
    });
    this.findProvinceById();
    this.requestCity(val);
  };

  onValueCityChange = val => {
    this.setState({
      selectedCity: val
    });
    this.findPostalByIdCity();
  };

  findProvinceById = () => {
    const dataProvince = this.state.province.find((value, i) => {
      return value.province_id === this.state.selectedProvince;
    });

    this.setState({
      selectedProvinceData: dataProvince
    });
  };

  findPostalByIdCity = () => {
    const dataCity = this.state.city.find((val, i) => {
      return val.city_id === this.state.selectedCity;
    });
    this.setState({
      selectedCityData: dataCity,
      postal: dataCity.postal_code
    });
  };
  render() {
    return (
      <Form>
        <Card style={styles.card}>
          <Item>
            <Input
              placeholder="Simpan Sebagai"
              value={this.state.title}
              onChangeText={title => this.setState({ title })}
            />
          </Item>
        </Card>
        <Card style={styles.card}>
          <Item>
            <Input
              placeholder="Alamat"
              value={this.state.address}
              onChangeText={address => this.setState({ address })}
            />
          </Item>

          <Item inlineLabel>
            <Label>Provinsi</Label>
            <Picker
              note
              mode="dropdown"
              style={styles.provincePicker}
              selectedValue={this.state.selectedProvince}
              onValueChange={this.onValueProvinceChange}
            >
              {this.renderProvince()}
            </Picker>
          </Item>

          <Item inlineLabel>
            <Label>Kota</Label>
            <Picker
              note
              mode="dropdown"
              style={styles.provincePicker}
              selectedValue={this.state.selectedCity}
              onValueChange={this.onValueCityChange}
            >
              {this.renderCity()}
            </Picker>
          </Item>

          <Item>
            <Input
              placeholder="Kode Pos"
              value={this.state.postal}
              onChangeText={postal => this.setState({ postal })}
            />
          </Item>
        </Card>

        <Card style={styles.card}>
          <Item>
            <Input
              placeholder="Nama Penerima"
              value={this.state.receiver}
              onChangeText={receiver => this.setState({ receiver })}
            />
          </Item>
          <Item>
            <Input
              placeholder="No Telepon Penerima"
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
            />
          </Item>
        </Card>
        {this.renderButton()}
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    access_token:
      state.user.access_token.type + " " + state.user.access_token.token
  };
};

export default connect(mapStateToProps)(FormAddress);

const styles = StyleSheet.create({
  card: {
    padding: 10
  },
  btnSave: {
    backgroundColor: "#28AE5E",
    padding: 10
  },
  txtSave: {
    color: "white"
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  provincePicker: {
    width: "100%"
  }
});
