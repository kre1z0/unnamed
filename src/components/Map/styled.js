import styled from "styled-components";
import { Map } from "react-leaflet";

export const LeafletMap = styled(props => <Map {...props} />)`
  width: 100%;
  height: 100%;
`;
