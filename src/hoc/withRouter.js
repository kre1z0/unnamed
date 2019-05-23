import React, { Component } from "react";

export default function(CustomComponent) {
  return class extends Component {
    isHomePage = () => this.props.location.pathname === "/";
    isRecipePage = () => this.props.location.pathname.indexOf("/recipes") === 0;

    render() {
      return (
        <CustomComponent
          isRecipePage={this.isRecipePage}
          isHomePage={this.isHomePage}
          {...this.props}
        />
      );
    }
  };
}
