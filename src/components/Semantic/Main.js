import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
`;
