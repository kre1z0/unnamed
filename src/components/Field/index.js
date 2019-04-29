import React from "react";

import { FieldContainer, Name, Value } from "./styled";

export const Field = React.memo(({ name, value }) => (
  <FieldContainer>
    <Name>{name}</Name>
    <Value>{value}</Value>
  </FieldContainer>
));
