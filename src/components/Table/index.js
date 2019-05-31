import React, { Component } from "react";

import { Body } from "./Body";
import { TableContainer, TableUI, Thead, TableHeader, Tr, HeaderCell } from "./styled";

export class Table extends Component {
  state = {
    vh: 0,
    scrollLeft: 0,
    scrollTop: 0,
  };

  componentDidMount() {
    document.addEventListener("orientationchange", this.onOrientationChange);
    this.onOrientationChange();
  }

  componentWillUnmount() {
    document.addEventListener("orientationchange", this.onOrientationChange);
  }

  onOrientationChange = () => {
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setState({ vh: vh - 64 - 20 });
  };

  onScroll = e => {
    this.setState({ scrollLeft: e.target.scrollLeft, scrollTop: e.target.scrollTop });
  };

  render() {
    const { vh, scrollTop, scrollLeft } = this.state;
    const { data, head, cell, className } = this.props;

    return (
      <TableContainer vh={vh} onScroll={this.onScroll} className={className}>
        <TableUI>
          {head && (
            <Thead scrollTop={scrollTop}>
              <Tr>
                {head.map((title, index) => (
                  <TableHeader key={`th-${index}`}>
                    <HeaderCell>{title}</HeaderCell>
                  </TableHeader>
                ))}
              </Tr>
            </Thead>
          )}
          <Body data={data} cell={cell} head={head} scrollTop={scrollTop} scrollLeft={scrollLeft} />
        </TableUI>
      </TableContainer>
    );
  }
}
