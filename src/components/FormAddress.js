import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Form, Textarea, Item, Input, Card, Button } from "native-base";

class FormAddress extends Component {
  state = {
    isEdited: false
  };

  componentDidMount() {
    if (this.props.isEdited && this.props.isEdited === true) {
      this.setState({ isEdited: true });
    }
  }

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

          <Item>
            <Input placeholder="Kota atau Kecamatan" />
          </Item>

          <Item>
            <Input placeholder="Kode Pos" />
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

export default FormAddress;

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
  }
});
