import React, { PureComponent } from "react";

import color from "../../styles/colors";
import menu from "../../routes";
import withRouter from "../../hoc/withRouter";
import { Nav, Container, GoBackBtn, CloseIcon, Home, Ul, Li, DefaultLink } from "./styled";

class NavbarBase extends PureComponent {
  state = {
    sticky: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const sticky = window.pageYOffset > 0;

    this.setState({ sticky });
  };

  render() {
    const { sticky } = this.state;
    const { isLongread, navigate } = this.props;

    return (
      <Nav sticky={sticky}>
        <Container>
          {isLongread ? (
            <GoBackBtn onClick={() => navigate("/")}>
              <CloseIcon fill={sticky ? color.dark : "rgba(255, 255, 255, 0.5)"} />
            </GoBackBtn>
          ) : (
            <>
              <Home to="/">Home</Home>
              <Ul>
                {menu.map(({ name }) => (
                  <Li key={name}>
                    <DefaultLink to={`/${name}`} activeStyle={{ color: color.green }}>
                      {name}
                    </DefaultLink>
                  </Li>
                ))}
              </Ul>
            </>
          )}
        </Container>
      </Nav>
    );
  }
}

export const Navbar = withRouter(NavbarBase);
