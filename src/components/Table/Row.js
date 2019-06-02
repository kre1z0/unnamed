import React from "react";

import { TbodyRow, Td, Cell } from "./styled";

export const Row = React.memo(({ data, cell, ggwp, groupIndex, onRefRows }) => {
  console.info("--> ggwp up");
  return (
    <TbodyRow ref={ref => onRefRows(ref, groupIndex)} style={{ background: ggwp ? "green" : "" }}>
      {Object.keys(data).map((key, i) =>
        key !== "group" ? (
          <Td key={`${key}-${i}`}>
            <Cell cellWidth={cell[i]}>{data[key]}</Cell>
          </Td>
        ) : null,
      )}
    </TbodyRow>
  );
});
