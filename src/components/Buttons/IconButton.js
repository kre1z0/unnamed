import styled from "styled-components";

import color from "../../styles/colors";

export const IconButton = styled.button`
  color: ${color.dark};
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  transition: all 200ms ease;
  &:active,
  &:focus {
    outline: none;
  }
  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
`;
