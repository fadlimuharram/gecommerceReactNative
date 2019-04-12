import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Container, Form, Item, Input, Button } from "native-base";
import LinearGradient from "react-native-linear-gradient";

import { LogoIcon } from "../assets/svg/Love";
import { connect } from "react-redux";
import { register } from "../_actions";

class Register extends Component {
  static navigationOptions = {
    header: null,
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  };
  _toLogin = () => {
    this.props.navigation.navigate("Login");
  };
  _toHome = () => {
    const { confirm_password, password, email, username } = this.state;
    if (confirm_password !== password) alert("password not match");

    this.props.registerUser(username, email, password, confirm_password);
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
                  <Item>
                    <Input
                      placeholder="username"
                      placeholderTextColor="white"
                      onChangeText={username => this.setState(username)}
                      value={this.state.username}
                    />
                  </Item>
                  <Item>
                    <Input
                      placeholder="email"
                      placeholderTextColor="white"
                      value={this.state.email}
                      onChangeText={email => this.setState(email)}
                    />
                  </Item>
                  <Item>
                    <Input
                      placeholder="password"
                      placeholderTextColor="white"
                      onChangeText={password => this.setState(password)}
                      value={this.state.password}
                    />
                  </Item>
                  <Item>
                    <Input
                      placeholder="confirm password"
                      placeholderTextColor="white"
                      value={this.state.confirm_password}
                      onChangeText={confirm_password =>
                        this.setState(confirm_password)
                      }
                    />
                  </Item>
                  <Button
                    style={styles.btnRegister}
                    onPress={this._toHome}
                    full
                  >
                    <Text style={styles.txtRegister}>Register</Text>
                  </Button>
                  <TouchableOpacity onPress={this._toLogin}>
                    <Text style={styles.txtSignIn}>
                      Already have an account? Sign in
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

const mapStateToProps = state => {
  return {
    dataUser: state.user
  };
};

export default connect(
  mapStateToProps,
  { registerUser: register }
)(Register);

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  logoContainer: {
    alignSelf: "center",
    marginTop: 20
  },
  txtLogo: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
  formContainer: {
    marginTop: 50,
    padding: 10
  },
  btnRegister: {
    backgroundColor: "white",
    marginTop: 30
  },
  txtRegister: {
    color: "#28AE5E"
  },
  txtSignIn: {
    color: "white",
    marginTop: 20,
    alignSelf: "center"
  }
});
