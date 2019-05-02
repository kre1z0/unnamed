import React, { Component } from "react";
import { Normalize } from "styled-normalize";

import { isLongread } from "../routes/isLongread";
import { GlobalStyle } from "../styles/global";
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Semantic/Main";

class Layout extends Component {
  render() {
    const { children, location, navigate } = this.props;
    const fullHeight = !isLongread(location.pathname);

    return (
      <>
        <Normalize />
        <GlobalStyle fullHeight={fullHeight} />
        <Navbar isLongread={isLongread(location.pathname)} navigate={navigate} />
        <Main fullHeight={fullHeight}>{children}</Main>
      </>
    );
  }
}

export default Layout;
