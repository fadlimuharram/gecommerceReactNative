import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Container, Content } from "native-base";
import HomeCard from "../components/HomeCard";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  _onPress = () => {
    this.props.navigation.navigate("Discover");
  };

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <HomeCard
            uri="https://raselhekma.org/uploads/blog/1547547312.jpg"
            title="MMT"
            desc="Walnut Calender Pocket Watch"
            bgColor="rgba(212, 208, 110, 1.0)"
            onPress={this._onPress}
          />
          <HomeCard
            uri="https://raselhekma.org/uploads/editor/6189588376.jpeg"
            title="MMT 2"
            desc="Walnut Calender Pocket Watch 2"
            bgColor="rgba(137, 155, 107, 1.0)"
            onPress={this._onPress}
          />
          <HomeCard
            uri="https://cityofpowell.us/wp-content/uploads/2015/07/FullSizeRender.jpg"
            title="MMT 3"
            desc="Walnut Calender Pocket Watch 2"
            bgColor="rgba(81, 145, 33, 1.0)"
            onPress={this._onPress}
          />
        </Content>
      </Container>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
