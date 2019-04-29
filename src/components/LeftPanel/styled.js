import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { Swiper } from "../../components/Swiper";

export const LeftPanelContainer = styled(props => <Swiper {...props} />).attrs(
  ({ deltaX, transition }) => ({
    style: {
      left: `-${deltaX}px`,
      transition: transition ? "left 400ms ease" : "none",
    },
  }),
)`
  width: 400px;
  padding: 80px 15px 15px 15px;
  box-shadow: 0 0 12px 0 rgba(10, 18, 33, 0.1);
  cursor: default;
  z-index: 999;
  position: absolute;
  top: 0;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
`;

export const Flag = styled.img`
  position: absolute;
  left: 15px;
  top: 15px;
  width: 60px;
  height: auto;
  box-shadow: 0 6px 6px 0 rgba(10, 18, 33, 0.2);
`;

export const CloseBtn = styled(IconButton)`
  && {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;
