import React, { Component } from "react";
import { Container, Content } from "native-base";
import FormAddress from "../components/FormAddress";

class AddAddress extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <FormAddress />
        </Content>
      </Container>
    );
  }
}

export default AddAddress;
