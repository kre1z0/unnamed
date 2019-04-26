import React from "react";
import PropTypes from "prop-types";

import color from '../../styles/colors';
import menu from "../../routes";
import { Link } from "../../components/Semantic/Link";
import { Nav, Home, Ul, Li } from "./styled";

export const Navbar = () => {
  return (
    <Nav>
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
    </Nav>
  );
};

Navbar.propTypes = {
  component: PropTypes.bool,
};
