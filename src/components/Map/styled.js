import styled from "styled-components";
import { Map, Tooltip } from "react-leaflet";

export const LeafletMap = styled(Map)`
  width: 100%;
  height: 100%;
`;

export const CountryTooltip = styled(Tooltip)`
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
  padding-right: 6px;
`;
