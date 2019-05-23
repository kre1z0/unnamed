import styled from "styled-components";

import { Arrow } from "../../components/Icons/Arrow";

export const Container = styled.figure`
  position: relative;
  margin: 0;
`;

export const Header = styled.h1`
  cursor: pointer;
  margin-top: 2.8em;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  text-decoration: ${({ isOpen }) => (isOpen ? "none" : "line-through")};
  &:before {
    position: absolute;
    left: -2px;
    bottom: 20%;
    display: block;
    content: attr(aria-label);
    font-size: 2em;
    color: rgba(38, 44, 55, 0.14);
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 1.8em;
    margin-top: 1.8em;
    &:before {
      font-size: 1.8em;
    }
  }
`;

export const Content = styled.div`
  overflow: hidden;
  transition: 200ms height ease;
  height: ${({ h, isPreview }) => (isPreview ? "auto" : `${h}px`)};
  max-height: ${({ isOpen, isPreview }) => (!isOpen && isPreview ? 0 : "auto")};
`;

export const ArrowIcon = styled(Arrow)`
  transition: 200ms transform ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(-90deg)")};
`;
