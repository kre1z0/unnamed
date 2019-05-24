import { createGlobalStyle, css } from "styled-components";

import color from "../styles/colors";
import typography from "../styles/typography";
import leaflet from "../styles/leaflet";

const scroll = css`
  * {
    ::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.12);
      border: 4px solid transparent;
      background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.36);
    }

    ::-webkit-scrollbar-thumb:active {
      background-color: rgba(0, 0, 0, 0.36);
    }

    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
`;

const fullHeightCss = css`
  #___gatsby {
    height: 100%;
    > div:first-of-type {
      height: 100%;
    }
  }
`;

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
    width: 100%;
    height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
    ${({ fullHeight }) => fullHeight && fullHeightCss};
  }
  img {
    outline: none;
    max-width: 100%;
    height: auto;
  }
  * {
    box-sizing: border-box;
  }
  ${typography}
  ${leaflet}
  ${scroll}
`;
