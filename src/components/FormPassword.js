import React, { Component } from "react";
import { StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { Form, Card, Item, Input, Button } from "native-base";
class FormPassword extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <Form>
          <Card style={styles.card}>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Item>
              <Input placeholder="Confirm Password" />
            </Item>
            <Button style={styles.btnChangePass} full>
              <Text style={styles.txtChangePass}>Ubah Password</Text>
            </Button>
          </Card>
        </Form>
      </KeyboardAvoidingView>
    );
  }
}

export default FormPassword;

const styles = StyleSheet.create({
  card: {
    padding: 10
  },
  btnChangePass: {
    backgroundColor: "#28AE5E",
    marginTop: 20
  },
  txtChangePass: {
    color: "white"
  }
});
