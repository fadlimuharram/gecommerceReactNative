import React, { Component } from "react";
import { Container, Content, Form, Item, Input, Button } from "native-base";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { LogoIcon, LockIcon } from "../assets/svg/Love";
import LinearGradient from "react-native-linear-gradient";

class Login extends Component {
  static navigationOptions = {
    header: null
  };
  _toRegister = () => {
    this.props.navigation.navigate("Register");
  };
  _toHome = () => {
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#3BCEAC" barStyle="light-content" />
        <LinearGradient style={styles.content} colors={["#3BCEAC", "#28AE5E"]}>
          <ScrollView>
            <View style={styles.logoContainer}>
              <LogoIcon width="150" height="150" color="white" />
              <Text style={styles.txtLogo}> GECOMMERCE </Text>
            </View>
            <View style={styles.formContainer}>
              <KeyboardAvoidingView>
                <Form>
                  <Item style={styles.itemInput}>
                    <Input
                      placeholder="Username"
                      placeholderTextColor="white"
                      selectionColor="white"
                    />
                  </Item>
                  <Item style={styles.itemInput} floatingLabel last>
                    <Input
                      placeholder="Password"
                      placeholderTextColor="white"
                    />
                  </Item>
                  <Button style={styles.btnLogin} onPress={this._toHome} full>
                    <Text style={styles.txtLogin}>LOGIN</Text>
                  </Button>
                  <TouchableOpacity onPress={this._toRegister}>
                    <Text style={styles.txtRegister}>
                      Not Registered Yet? Create Here{" "}
                    </Text>
                  </TouchableOpacity>
                </Form>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </LinearGradient>
      </Container>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  logoContainer: {
    alignSelf: "center",
    marginTop: 60
  },
  txtLogo: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
  formContainer: {
    padding: 20
  },
  itemInput: {
    marginBottom: 5
  },
  btnLogin: {
    marginTop: 50,
    backgroundColor: "white"
  },
  txtLogin: {
    color: "#28AE5E"
  },
  txtRegister: {
    color: "white",
    alignSelf: "center",
    marginTop: 20
  }
});
