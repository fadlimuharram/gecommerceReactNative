import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Thumbnail,
  Container,
  Content,
  Card,
  CardItem,
  Form,
  Input,
  Item,
  Button
} from "native-base";
import Header from "../components/Header";
class Settings extends Component {
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Content>
          <Card>
            <View style={styles.topContainer}>
              <View>
                <Thumbnail
                  large
                  source={{
                    uri:
                      "https://images2.alphacoders.com/644/thumb-1920-644961.png"
                  }}
                />
              </View>
              <View style={styles.topRight}>
                <Text style={styles.txtName}>Fadli Muharram</Text>
                <Text style={styles.txtEmail}>fadlimuharram@hotmail.com</Text>
              </View>
              <View style={styles.toggleIcon}>
                <Text>></Text>
              </View>
            </View>
            <View>
              <Item stackedLabel>
                <Input placeholder="Username" />
              </Item>
              <Item stackedLabel>
                <Input placeholder="Email" />
              </Item>
              <Button full>
                <Text>Ubah Data</Text>
              </Button>
            </View>
          </Card>
          <Card>
            <Text>Tambah Alamat</Text>
          </Card>
          <Card>
            <Text>Ganti Password</Text>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  topRight: {
    marginLeft: 10
  },
  txtName: {
    fontWeight: "bold",
    fontSize: 20
  },
  txtEmail: {
    fontSize: 15,
    marginTop: 10
  },
  toggleIcon: {
    position: "absolute",
    right: 0,
    marginRight: 30
  }
});
