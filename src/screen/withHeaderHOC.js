import React, { Component } from "react";
import { Container } from "native-base";
import HeaderDiscover from "../components/HeaderDiscover";
import { ArrowLeft, MenuIcon } from "../assets/svg/Love";

export const withHeaderSearch = WrappedComponent => {
  class HOC extends Component {
    onGoBackButton = () => {
      this.props.navigation.navigate("Home");
    };

    renderLeftLogo = () => <ArrowLeft height="16" width="16" color="black" />;

    render() {
      return (
        <Container>
          <HeaderDiscover
            onLeftLogoPress={this.onGoBackButton}
            renderLeftLogo={this.renderLeftLogo}
            {...this.props}
          />
          <WrappedComponent {...this.props} />
        </Container>
      );
    }
  }
  return HOC;
};

export const withHeaderSideBar = WrappedComponent => {
  class HOC extends Component {
    onOpenDrawer = () => {
      this.props.navigation.openDrawer();
    };

    renderLeftLogo = () => <MenuIcon widht="25" height="25" color="black" />;

    render() {
      return (
        <Container>
          <HeaderDiscover
            onLeftLogoPress={this.onOpenDrawer}
            renderLeftLogo={this.renderLeftLogo}
            {...this.props}
          />
          <WrappedComponent {...this.props} />
        </Container>
      );
    }
  }
  return HOC;
};
