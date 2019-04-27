import styled from "styled-components";
import { Link } from "gatsby";

import { containerWidth } from "../../styles/breakpoints";

export const Nav = styled.nav`
  pointer-events: none;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 44px;
  display: flex;
  width: 100%;
  max-width: ${containerWidth};
  margin: 0 auto;
`;

export const Home = styled(Link)`
  pointer-events: auto;
  width: 144px;
  height: 100%;
  font-size: 24px;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Li = styled.li`
  pointer-events: auto;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding-right: 15px;
  &:last-of-type {
    padding-right: 0;
  }
`;
