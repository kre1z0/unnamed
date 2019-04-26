import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

import color from "../../styles/colors";

export const Link = styled(GatsbyLink)`
  color: ${color.dark};
  text-decoration: none;
  font-weight: 600;
`;
