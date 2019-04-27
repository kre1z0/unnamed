import styled from "styled-components";
import { Tooltip } from "react-leaflet";

export const CountryTooltip = styled(props => <Tooltip {...props} />)`
  display: flex;
  border: none;
  align-items: center;
  font-weight: 600;
  height: 34px;
  &.leaflet-tooltip-left {
    margin-left: -14px;
  }
  &.leaflet-tooltip-right {
    margin-left: 14px;
  }
`;

export const Flag = styled.img`
  width: auto;
  max-height: 26px;
  height: auto;
  margin-right: 6px;
  box-shadow: 0 0 6px 0 rgba(10, 18, 33, 0.2);
`;
