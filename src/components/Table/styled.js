import styled from "styled-components";

import { rateLimit } from "../../utils/number";

export const MainContainer = styled.div``;

export const TableContainer = styled.div.attrs(({ vh }) => ({
  style: {
    height: `${vh}px`,
  },
}))`
  position: relative;
  width: 100%;
  overflow: auto;
  overflow: overlay;
`;

export const TableUI = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const TitleContainer = styled.div`
  width: calc(100% - 12px);
  overflow: hidden;
`;

export const Thead = styled.thead.attrs(({ scrollLeft }) => ({
  style: {
    transform: `translateX(-${scrollLeft}px)`,
  },
}))`
  will-change: transform;
`;

export const Th = styled.th`
  white-space: nowrap;
  text-align: left;
`;

export const TableHeader = styled(Th)`
  background-color: #48a8e4;
  border-right: 2px solid #fff;
  color: #fff;
`;

export const FullName = styled(Th)`
  width: 100%;
  background-color: #48a8e4;
  color: #fff;
  border-top: 2px solid #fff;
`;

export const Tr = styled.tr``;

export const TbodyRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f5f5f5;
  }
`;

export const TitleRow = styled.tr.attrs(({ scrollTop, scrollLeft, ggwp, max }) => ({
  style: {
    transform: `translate(${scrollLeft}px, ${rateLimit(scrollTop, 0, max)}px)`,
    backgroundColor: ggwp,
  },
}))`
  will-change: transform;
`;

export const Td = styled.td`
  vertical-align: top;
`;

export const Cell = styled.div.attrs(({ cellWidth }) => ({
  style: {
    width: cellWidth ? `${cellWidth}px` : "100%",
  },
}))`
  line-height: 1.44;
  padding: 10px 15px;
`;

export const HeaderCell = styled(Cell).attrs(({ cellWidth }) => ({
  style: {
    width: cellWidth ? `${cellWidth}px` : "100%",
  },
}))``;

export const TitleCell = styled(Cell)`
  font-size: 18px;
`;

export const Badge = styled.span`
  text-align: center;
  width: 28px;
  height: 28px;
  line-height: 15px;
  font-size: 14px;
  display: inline-block;
  background-color: #fff;
  border-radius: 50%;
  padding: 6px;
  color: #48a8e4;
  margin-left: 5px;
`;
