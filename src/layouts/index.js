import React, { Component } from "react";
import { Normalize } from "styled-normalize";

import withRouter from "../hoc/withRouter";
import { GlobalStyle } from "../styles/global";
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Semantic/Main";

class Layout extends Component {
  render() {
    const { children, location, navigate, isHomePage } = this.props;
    const isLongread = !isHomePage();

    return (
      <>
        <Normalize />
        <GlobalStyle fullHeight={!isLongread} />
        <Navbar isLongread={isLongread} navigate={navigate} location={location} />
        <Main fullHeight={!isLongread}>{children}</Main>
      </>
    );
  }
}

export default withRouter(Layout);
