import React from "react";

import { TbodyRow, Td, Cell } from "./styled";

export const Row = React.memo(({ data, cell, ggwp, groupIndex, onRefRows }) => {
  return (
    <TbodyRow ref={ref => onRefRows(ref, groupIndex)} style={{ background: ggwp ? "green" : "" }}>
      {Object.keys(data).map((key, i) =>
        key !== "group" ? (
          <Td key={`${key}-${i}`}>
            <Cell cellWidth={cell[i - 1]}>{data[key]}</Cell>
          </Td>
        ) : null,
      )}
    </TbodyRow>
  );
});
