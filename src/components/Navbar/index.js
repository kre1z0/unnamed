import React, { PureComponent } from "react";

import color from "../../styles/colors";
import menu from "../../routes";
import { Link } from "../../components/Semantic/Link";
import { Nav, Container, GoBackBtn, CloseIcon, Home, Ul, Li } from "./styled";

export class Navbar extends PureComponent {
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
                    <Link to={`/${name}`} activeStyle={{ color: color.green }}>
                      {name}
                    </Link>
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
