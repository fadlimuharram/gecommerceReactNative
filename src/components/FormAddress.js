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
    city: [],
    selectedCity: 0,
    selectedCityData: []
  };

  componentDidMount() {
    if (this.props.isEdited && this.props.isEdited === true) {
      this.setState({ isEdited: true });
    }
    this.requestProvince();
    this.requestCity(this.state.selectedProvince);
  }

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
        <Button style={styles.btnSave} full>
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
    });

    this.requestCity(val);
  };

  onValueCityChange = val => {
    this.setState({
      selectedCity: val
    });
    this.findPostalByIdCity();
  };

  findPostalByIdCity = () => {
    const dataCity = this.state.city.find((val, i) => {
      return val.city_id === this.state.selectedCity;
    });
    this.setState({
      selectedCityData: dataCity
    });
  };
  render() {
    return (
      <Form>
        <Card style={styles.card}>
          <Item>
            <Input placeholder="Simpan Sebagai" />
          </Item>
        </Card>
        <Card style={styles.card}>
          <Item>
            <Input placeholder="Alamat" />
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
              defaultValue={
                this.state.selectedCityData &&
                this.state.selectedCityData.postal_code
              }
            />
          </Item>
        </Card>

        <Card style={styles.card}>
          <Item>
            <Input placeholder="Nama Penerima" />
          </Item>

          <Item>
            <Input placeholder="No Telepon Penerima" />
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
