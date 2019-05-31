import React from "react";
import groupBy from "lodash/groupBy";

import { Row } from "./Row";
import { FullName, TitleCell, TitleRow, Badge } from "./styled";

export const Body = React.memo(({ data, cell, head, scrollTop, scrollLeft }) => {
  const grouped = groupBy(data, "group");

  return (
    <tbody>
      {Object.keys(grouped).map(key => (
        <React.Fragment key={`group-${key}`}>
          <TitleRow scrollTop={scrollTop} scrollLeft={scrollLeft}>
            <FullName colSpan={head.length}>
              <TitleCell>
                {key} <Badge>{grouped[key].length}</Badge>
              </TitleCell>
            </FullName>
          </TitleRow>
          {grouped[key].map((item, index) => (
            <Row ggwp={index === 0} key={`row-${index}`} cell={cell} data={item} />
          ))}
        </React.Fragment>
      ))}
    </tbody>
  );
});
