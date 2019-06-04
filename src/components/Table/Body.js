import React, { Component } from "react";
import groupBy from "lodash/groupBy";

import { Row } from "./Row";
import { FullName, TitleCell, TitleRow, Badge } from "./styled";

export class Body extends Component {
  state = {
    groupHeights: [],
  };

  groups = [];

  componentDidMount() {
    this.setGroupHeights();
  }

  setGroupHeights = () => {
    const groupHeights = this.groups.map(group =>
      group.reduce((prev, curr) => {
        const { height } = curr.getBoundingClientRect();
        return prev + height;
      }, 0),
    );

    this.setState({ groupHeights });
  };

  onRefRows = (ref, index) => {
    if (ref) {
      if (!this.groups[index]) {
        this.groups.push([]);
      }
      this.groups[index].push(ref);
    }
  };

  render() {
    const { groupHeights } = this.state;
    const { data, cell, head, scrollTop, scrollLeft } = this.props;
    const grouped = groupBy(data, "group");

    return (
      <tbody>
        {Object.keys(grouped).map((key, groupIndex) => {
          const sum = groupHeights.slice(0, groupIndex).reduce((prev, curr) => prev + curr, 0);

          return (
            <React.Fragment key={`group-${key}`}>
              <TitleRow
                scrollTop={sum - scrollTop <= 0 ? Math.abs(sum - scrollTop) : 0}
                scrollLeft={scrollLeft}
                max={groupHeights[groupIndex] - 48 || 0}
                ref={ref => this.onRefRows(ref, groupIndex)}
              >
                <FullName colSpan={head.length}>
                  <TitleCell>
                    {key} <Badge>{grouped[key].length}</Badge>
                  </TitleCell>
                </FullName>
              </TitleRow>
              {grouped[key].map((item, index) => (
                <Row
                  ggwp={index === 0}
                  groupIndex={groupIndex}
                  onRefRows={this.onRefRows}
                  key={`row-${index}`}
                  cell={cell}
                  data={item}
                />
              ))}
            </React.Fragment>
          );
        })}
      </tbody>
    );
  }
}
