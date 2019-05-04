import styled, { css } from "styled-components";

import { Input as InputUI } from "../Input";

const width = "200px";

const isHighlightedStyle = css`
  background-color: rgba(200, 200, 200, 0.4);
`;

export const AutocompleteContainer = styled.div`
  z-index: 99999999;
  position: relative;
  width: ${width};
  > div:first-of-type {
    width: 100%;
  }
`;

export const Item = styled.div`
  width: ${width};
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 24px;
  padding: 4px;
  ${({ isHighlighted }) => isHighlighted && isHighlightedStyle}
`;

export const Text = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Icon = styled.img`
  width: 24px;
  height: auto;
  margin-right: 4px;
`;

export const Input = styled(InputUI)`
  padding-left: 32px;
`;

export const SelectedIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 4px;
`;
