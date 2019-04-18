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
import Config from "react-native-config";
class ProfileCard extends Component {
  state = {
    avatarSource: null,
    isChangeProfileSelected: false,
    username: "",
    email: ""
  };

  componentDidMount() {
    this.setState({
      username: this.props.username,
      email: this.props.email
    });
  }

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
            <Input placeholder="Username" value={this.state.username} />
          </Item>
          <Item stackedLabel>
            <Input placeholder="Email" value={this.state.email} />
          </Item>
          <View style={styles.avatarContainer}>
            <Text>Ubah Avatar</Text>
            {this.state.avatarSource === null ? (
              <Image
                style={styles.avatar}
                source={{
                  uri: Config.PIC_URI + this.props.picture
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
                uri: Config.PIC_URI + this.props.picture
              }}
            />
          </View>
          <View style={styles.topRight}>
            <Text style={styles.txtName}>{this.props.username}</Text>
            <Text style={styles.txtEmail}>{this.props.email}</Text>
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
