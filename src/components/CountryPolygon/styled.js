import React from "react";
import styled from "styled-components";
import { Tooltip } from "react-leaflet";

export const CountryTooltip = styled(props => <Tooltip {...props} />)`
  display: flex;
  border: none;
  align-items: center;
  font-weight: 600;
  height: 34px;
  visibility: ${({ isHovered }) => (isHovered ? "visibility" : "hidden")};
  &.leaflet-tooltip-left {
    margin-left: -14px;
  }
  &.leaflet-tooltip-right {
    margin-left: 14px;
  }
`;

export const Flag = styled.img`
  max-width: none;
  width: auto;
  height: 26px;
  margin-right: 6px;
  box-shadow: 0 0 6px 0 rgba(10, 18, 33, 0.2);
`;
