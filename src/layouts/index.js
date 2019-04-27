import React, { Component } from "react";

import { GlobalStyle } from "../styles/global";
// import { Navbar } from "../components/Navbar";
import { Main } from "../components/Semantic/Main";

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <GlobalStyle fullHeight />
        {/*<Navbar />*/}
        <Main fullWidth fullHeight>
          {children}
        </Main>
      </>
    );
  }
}

export default Layout;
