import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

const HomeCard = ({ uri, title, desc, bgColor, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <ImageBackground source={{ uri }} style={styles.imgBg}>
        <View style={styles.cardItem}>
          <View style={[styles.body, { backgroundColor: bgColor }]}>
            <View style={styles.bodyItem}>
              <Text style={styles.textHuge}>{title}</Text>
              <Text style={styles.textMedium}>{desc}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

export default HomeCard;

const styles = StyleSheet.create({
  imgBg: {
    width: "100%",
    height: "auto"
  },
  card: {
    height: 210,
    marginTop: 15
  },
  cardItem: {
    backgroundColor: "rgba(52, 52, 52, 0.1)"
  },
  body: {
    padding: 10,
    width: "50%",
    height: "100%"
  },
  bodyItem: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  textHuge: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  textMedium: {
    color: "white",
    fontSize: 20,
    marginTop: 10
  }
});
