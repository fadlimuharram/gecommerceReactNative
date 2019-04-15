import React, { Component } from "react";
import { Container, Content } from "native-base";
import FormAddress from "../components/FormAddress";
import { connect } from "react-redux";
import { postAddress } from "../_actions";
class AddAddress extends Component {
  onSubmit = data => {
    this.props.postAddress(data, this.props.access_token);
    this.props.navigation.navigate("MyCart");
  };

  render() {
    return (
      <Container>
        <Content padder>
          <FormAddress onSubmit={this.onSubmit} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    access_token:
      state.user.access_token.type + " " + state.user.access_token.token
  };
};

export default connect(
  mapStateToProps,
  { postAddress }
)(AddAddress);
