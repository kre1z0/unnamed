import styled, { css } from "styled-components";
import { Link } from "gatsby";

import { Close } from "../../components/Icons/Close";
import { IconButton } from "../../components/Buttons/IconButton";
import { Row } from "../../components/NoSemantic/Row";

export const navbarHeight = "64px";

const fixed = css`
  background-color: #fff;
  box-shadow: 0 8px 8px 0 rgba(10, 18, 33, 0.05);
`;

export const Nav = styled.nav`
  pointer-events: none;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: ${navbarHeight};
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  transition: all 200ms ease;
  ${({ sticky }) => sticky && fixed}
`;

export const Container = styled(Row)`
  display: flex;
`;

export const GoBackBtn = styled(IconButton)`
  pointer-events: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseIcon = styled(Close).attrs(({ fill }) => ({
  style: {
    fill,
  },
}))`
  width: 1.2em;
  height: 1.2em;
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
  margin: 0;
  &:last-of-type {
    padding-right: 0;
  }
`;
