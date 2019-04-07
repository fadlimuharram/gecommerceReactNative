import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
  ScrollView,
  Image
} from "react-native";
import { compose } from "redux";
import { Container, Content, Text, Card, CardItem } from "native-base";
import HomeCardCategory from "../components/HomeCardCategory";
import HomeCardRecommendation from "../components/HomeCardRecommendation";
// import { StackActions, NavigationActions } from "react-navigation";
import Header from "../components/Header";
import Swiper from "react-native-swiper";
import { withHeaderSideBar } from "./withHeaderHOC";

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

  onPressCategory = categoryId => {
    this.props.navigation.navigate("Discover", {
      categoryId
    });
  };

  onPressDetail = productId => {
    this.props.navigation.navigate("Detail", {
      productId: productId
    });
  };

  _keyExtractor = (item, index) => item.id;

  _renderItemCategory = ({ item }) => (
    <HomeCardCategory
      id={item.id}
      uri={item.uri}
      title={item.name}
      bgColor="rgba(137, 155, 107, 1.0)"
      onPress={() => this.onPressCategory(item.id)}
    />
  );

  renderItemRecommendation = ({ item }) => (
    <HomeCardRecommendation
      id={item.id}
      uri={item.uri}
      title={item.name}
      price={item.price}
      category={item.category.name}
      bgColor="rgba(137, 155, 107, 1.0)"
      onPress={() => this.onPressDetail(item.id)}
    />
  );

  componentDidMount() {
    console.log(this.props.categories);
    this.setState({
      categories: this.props.categories
    });
  }

  render() {
    return (
      <Content style={styles.content}>
        <Card>
          <CardItem cardBody>
            <Swiper
              style={styles.wrapper}
              autoplay={true}
              autoplayDirection={true}
              autoplayTimeout={2.5}
              showsButtons={false}
              activeDotStyle={{
                backgroundColor: "#28AE5E",
                width: 15,
                height: 15,
                borderColor: "white",
                borderWidth: 2
              }}
              dotStyle={{
                backgroundColor: "grey",
                width: 10,
                height: 10
              }}
            >
              <Image
                source={{
                  uri:
                    "https://3.bp.blogspot.com/-z9oDeUbAZl8/VrruNaRX5UI/AAAAAAAAAU8/7-guomCnv-E/s1600/Cara%2BBudidaya%2BAnggrek%2BDendrobium.jpg"
                }}
                style={styles.imgContent}
              />
              <Image
                source={{
                  uri:
                    "https://3.bp.blogspot.com/-z9oDeUbAZl8/VrruNaRX5UI/AAAAAAAAAU8/7-guomCnv-E/s1600/Cara%2BBudidaya%2BAnggrek%2BDendrobium.jpg"
                }}
                style={styles.imgContent}
              />
              <Image
                source={{
                  uri:
                    "https://bungaku.co.id/wp-content/uploads/2018/08/Tanaman-Anggrek-Dendrobium-1-520x574.jpg"
                }}
                style={styles.imgContent}
              />
              <Image
                source={{
                  uri:
                    "https://bungaku.co.id/wp-content/uploads/2018/08/Tanaman-Anggrek-Dendrobium-1-520x574.jpg"
                }}
                style={styles.imgContent}
              />
              <Image
                source={{
                  uri:
                    "https://bungaku.co.id/wp-content/uploads/2018/08/Tanaman-Anggrek-Dendrobium-1-520x574.jpg"
                }}
                style={styles.imgContent}
              />
            </Swiper>
          </CardItem>
        </Card>

        <Text style={styles.txtTitle}>Kategori</Text>
        <ScrollView horizontal={true}>
          <FlatList
            data={this.props.categories}
            renderItem={this._renderItemCategory}
            keyExtractor={this._keyExtractor}
            numColumns={this.props.categories.length / 2}
          />
        </ScrollView>

        <Text style={styles.txtTitle}>Rekomendasi</Text>
        <FlatList
          data={this.props.products}
          renderItem={this.renderItemRecommendation}
          keyExtractor={this._keyExtractor}
          numColumns={2}
        />
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.data,
    products: state.products.data
  };
};

const enhance = compose(
  withHeaderSideBar,
  connect(mapStateToProps)
);

export default enhance(Home);

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10
  },
  wrapper: {
    width: "100%",
    height: 150
  },
  imgContent: {
    height: "100%",
    width: "100%"
  }
});
