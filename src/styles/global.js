import { createGlobalStyle } from "styled-components";

import color from "../styles/colors";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 14px;
    font-family: "Open Sans", Tahoma, sans-serif;
    color: ${color.dark};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0;
  }
  img {
    outline: none;
  }
`;
