import React, { Component } from "react";
import { Container } from "native-base";

export const withAuthHOC = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      alert(this.props.dataUser);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return HOC;
};
