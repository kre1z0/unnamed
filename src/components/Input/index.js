import styled from "styled-components";

export const Input = styled.input`
  padding: 0 8px;
  width: 100%;
  border: 1px solid rgb(223, 223, 227);
  height: 30px;
  border-radius: 2px;
  &:focus,
  &:active {
    outline: none;
    border: 1px solid #48a8e4;
  }
`;
