import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, ImageBackground, FlatList } from "react-native";
import { Container, Content } from "native-base";
import HomeCard from "../components/HomeCard";
// import { StackActions, NavigationActions } from "react-navigation";
import Header from "../components/Header";
class Home extends Component {
  state = {
    categories: []
  };

  // componentDidMount() {
  //   const resetAction = StackActions.reset({
  //     index: 0,
  //     actions: [NavigationActions.navigate({ routeName: "Home" })]
  //   });
  //   this.props.navigation.dispatch(resetAction);
  // }

  _onPress = categoryId => {
    this.props.navigation.navigate("Discover", {
      categoryId
    });
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <HomeCard
      id={item.id}
      uri={item.uri}
      title={item.name}
      desc="Walnut Calender Pocket Watch 2"
      bgColor="rgba(137, 155, 107, 1.0)"
      onPress={() => this._onPress(item.id)}
    />
  );

  componentDidMount() {
    console.log(this.props.categories);
    this.setState({
      categories: this.props.categories
    });
  }

  render() {
    if (this.state.categories) {
      console.log("tess", this.props.categories);
      return (
        <Container>
          <Header {...this.props} />
          <Content style={styles.content}>
            <FlatList
              data={this.props.categories}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
            />
          </Content>
        </Container>
      );
    } else {
      return <Text>Kosong</Text>;
    }
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.data
  };
};

export default connect(
  mapStateToProps,
  {}
)(Home);

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
