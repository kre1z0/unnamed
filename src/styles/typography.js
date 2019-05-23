import { css } from "styled-components";

import color from "./colors";

const typography = css`
  h1,
  h2 {
  }
  h1 {
  }

  h2 {
  }
  ul {
    li {
      font-size: 18px;
      margin-bottom: 1em;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      padding-left: 28px;
      li {
        font-size: 14px;
      }
    }
  }
  em {
    font-size: 18px;
  }
  p {
    line-height: 1.6;
    font-size: 18px;
    margin: 30px 0;
    @media (max-width: 991px) {
      line-height: 1.5;
      font-size: 16px;
      margin: 24px 0;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      font-size: 14px;
      margin: 20px 0;
    }
  }
  hr {
    border: none;
    text-align: left;
    width: 160px;
    height: 8px;
    margin: 0;
    background: ${color.green};
  }
`;

export default typography;
