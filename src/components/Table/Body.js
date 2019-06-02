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

  getMax(index) {
    const { groupHeights } = this.state;
    const { scrollTop } = this.props;

    const sum = groupHeights.reduce((prev, curr, i) => {
      if (i === index) {
        return prev;
      }
      return prev + curr;
    }, 0);

    console.info("--> ggwp 4444", sum);
    return groupHeights[index] - 48 || 0;
  }

  render() {
    const { groupHeights } = this.state;
    const { data, cell, head, scrollTop, scrollLeft } = this.props;
    const grouped = groupBy(data, "group");
    console.info("--> groupHeights ggwp 4444", groupHeights);
    return (
      <tbody>
        {Object.keys(grouped).map((key, groupIndex) => (
          <React.Fragment key={`group-${key}`}>
            <TitleRow
              scrollTop={scrollTop}
              scrollLeft={scrollLeft}
              max={this.getMax(groupIndex)}
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
        ))}
      </tbody>
    );
  }
}
