import React from "react";
import styled from "styled-components";
import { Map } from "react-leaflet";

export const LeafletMap = styled(({ onMapRef, ...props }) => <Map ref={onMapRef} {...props} />)`
  width: 100%;
  height: 100%;
`;
