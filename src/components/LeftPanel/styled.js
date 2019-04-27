import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const LeftPanelContainer = styled.div`
  width: 400px;
  left: ${({ isOpen }) => (isOpen ? 0 : `-400px`)};
  padding: 80px 15px 15px 15px;
  box-shadow: 0 0 12px 0 rgba(10, 18, 33, 0.1);
  cursor: default;
  transition: left 400ms ease;
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
