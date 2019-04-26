import React, { Component } from "react";

import { GlobalStyle } from "../styles/global";
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Semantic/Main";

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <GlobalStyle />
        <Navbar />
        <Main>{children}</Main>
      </div>
    );
  }
}

export default Layout;
