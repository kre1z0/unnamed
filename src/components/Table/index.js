import React, { Component } from "react";

import { Body } from "./Body";
import {
  MainContainer,
  TableContainer,
  TableUI,
  TitleContainer,
  Thead,
  TableHeader,
  Tr,
  HeaderCell,
} from "./styled";

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
    this.setState({ vh: vh - 120 });
  };

  onScroll = e => {
    this.setState({ scrollLeft: e.target.scrollLeft, scrollTop: e.target.scrollTop });
  };

  render() {
    const { vh, scrollTop, scrollLeft } = this.state;
    const { data, head, cell, className } = this.props;

    return (
      <MainContainer className={className}>
        <TitleContainer>
          <TableUI>
            {head && (
              <Thead scrollLeft={scrollLeft}>
                <Tr>
                  {head.map((title, index) => (
                    <TableHeader key={`th-${index}`}>
                      <HeaderCell cellWidth={cell[index] - 12 / cell.length}>{title}</HeaderCell>
                    </TableHeader>
                  ))}
                </Tr>
              </Thead>
            )}
          </TableUI>
        </TitleContainer>
        <TableContainer vh={vh} onScroll={this.onScroll}>
          <TableUI>
            <Body
              data={data}
              cell={cell}
              head={head}
              scrollTop={scrollTop}
              scrollLeft={scrollLeft}
            />
          </TableUI>
        </TableContainer>
      </MainContainer>
    );
  }
}
