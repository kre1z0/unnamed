import React from "react";
import groupBy from "lodash/groupBy";

import { Cell, Td, FullName, TitleCell, Tr, TbodyRow, Badge } from "./styled";

export const Body = React.memo(({ data, cell, head }) => {
  const grouped = groupBy(data, "group");

  return (
    <tbody>
      {Object.keys(grouped).map(key => (
        <React.Fragment key={`group-${key}`}>
          <Tr>
            <FullName colSpan={head.length}>
              <TitleCell>
                {key} <Badge>{grouped[key].length}</Badge>
              </TitleCell>
            </FullName>
          </Tr>
          {grouped[key].map((item, index) => (
            <TbodyRow key={`row-${index}`}>
              {Object.keys(item).map((key, i) =>
                key !== "group" ? (
                  <Td key={`${key}-${i}`}>
                    <Cell cellWidth={cell[i]}>{item[key]}</Cell>
                  </Td>
                ) : null,
              )}
            </TbodyRow>
          ))}
        </React.Fragment>
      ))}
    </tbody>
  );
});
