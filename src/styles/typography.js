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
  }
  em {
    font-size: 18px;
  }
  p {
    line-height: 1.6;
    font-size: 18px;
    margin: 30px 0;
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
