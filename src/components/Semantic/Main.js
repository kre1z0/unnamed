import styled from "styled-components";

import { containerWidth } from "../../styles/breakpoints";

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ fullWidth }) => (fullWidth ? "none" : containerWidth)};
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
`;
