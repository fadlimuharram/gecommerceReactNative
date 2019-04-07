import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
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
import ImagePicker from "react-native-image-picker";
import {
  ArrowBottomToggle,
  ArrowRightToggle,
  MapsLogo
} from "../../assets/svg/Love";
class ProfileCard extends Component {
  state = {
    avatarSource: null,
    isChangeProfileSelected: false
  };

  selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  };

  toggleProfile = () => {
    this.setState({
      isChangeProfileSelected: !this.state.isChangeProfileSelected
    });
  };

  renderEditProfile = () => {
    if (this.state.isChangeProfileSelected) {
      return (
        <View style={styles.topDataProfileContainer}>
          <Text>Ubah Data Profile</Text>
          <Item stackedLabel>
            <Input placeholder="Username" value="Fadli Muharram" />
          </Item>
          <Item stackedLabel>
            <Input placeholder="Email" value="fadlimuharram@hotmail.com" />
          </Item>
          <View style={styles.avatarContainer}>
            <Text>Ubah Avatar</Text>
            {this.state.avatarSource === null ? (
              <Image
                style={styles.avatar}
                source={{
                  uri:
                    "https://images2.alphacoders.com/644/thumb-1920-644961.png"
                }}
              />
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource} />
            )}
            <Button
              transparent
              style={styles.btnChangeAvatar}
              onPress={this.selectPhotoTapped}
            >
              <Text>Ubah AVATAR</Text>
            </Button>
          </View>

          <Button style={styles.btnChangeData} full>
            <Text style={styles.txtChangeData}>Ubah Data</Text>
          </Button>
        </View>
      );
    }
  };

  renderArrowToggle = () => {
    if (this.state.isChangeProfileSelected) {
      return <ArrowBottomToggle width="25" height="25" color="black" />;
    } else {
      return <ArrowRightToggle width="25" height="25" color="black" />;
    }
  };

  render() {
    return (
      <Card>
        <View style={styles.topContainer}>
          <View>
            <Thumbnail
              large
              source={{
                uri: "https://images2.alphacoders.com/644/thumb-1920-644961.png"
              }}
            />
          </View>
          <View style={styles.topRight}>
            <Text style={styles.txtName}>Fadli Muharram</Text>
            <Text style={styles.txtEmail}>fadlimuharram@hotmail.com</Text>
          </View>
          <View style={styles.toggleIcon}>
            <TouchableOpacity onPress={this.toggleProfile}>
              {this.renderArrowToggle()}
            </TouchableOpacity>
          </View>
        </View>

        {this.renderEditProfile()}
      </Card>
    );
  }
}

export default ProfileCard;

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
  },
  avatarContainer: {
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btnChangeAvatar: {
    alignSelf: "center"
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
    marginTop: 20
  },
  btnChangeData: {
    backgroundColor: "#28AE5E"
  },
  txtChangeData: {
    color: "white"
  },
  topDataProfileContainer: {
    marginTop: 20
  }
});
