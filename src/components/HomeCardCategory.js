import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
} from "react-native";
import { Card, CardItem, Body, Thumbnail } from "native-base";

const HomeCardCategory = ({ uri, title, bgColor, onPress }) => (
  // <TouchableOpacity onPress={onPress}>
  //   <View style={styles.card}>
  //     <Image source={{ uri }} style={styles.imgBg} />
  //     <View style={styles.cardItem}>
  //       <View style={[styles.body, { backgroundColor: bgColor }]}>
  //         <View style={styles.bodyItem}>
  //           <Text style={styles.textHuge}>{title}</Text>
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // </TouchableOpacity>
  <TouchableOpacity onPress={onPress}>
    <Card transparent style={styles.card}>
      <CardItem cardBody>
        <Thumbnail large source={{ uri }} style={styles.img} />
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Body>
          <Text style={styles.txtTitle}>{title}</Text>
        </Body>
      </CardItem>
    </Card>
  </TouchableOpacity>
);

export default HomeCardCategory;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: null,
    height: Dimensions.get("window").width / 3 - 50
  },
  card: {
    width: Dimensions.get("window").width / 3,
    height: "auto",
    marginTop: 15
  },
  txtTitle: {
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center"
  }
});
