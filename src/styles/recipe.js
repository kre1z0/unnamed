import styled from "styled-components";

export const Header = styled.header.attrs(({ image }) => ({
  style: {
    backgroundImage: `url(${image})`,
  },
}))`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  padding: 0 84px;
  margin-bottom: 25px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(38, 44, 55, 0.44);
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 15px 0 10px 0;
`;

export const Category = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Ingredient = styled.div`
  font-weight: 600;
  padding: 4px 8px;
  color: #fff;
  margin: 0 10px 10px 0;
  &:last-of-type {
    margin-right: 0;
  }
  &:nth-of-type(10n - 9) {
    background-color: #c255d6;
  }
  &:nth-of-type(10n - 8) {
    background-color: #4b39c3;
  }
  &:nth-of-type(10n - 7) {
    background-color: #95da49;
  }
  &:nth-of-type(10n - 6) {
    background-color: #eeaf47;
  }
  &:nth-of-type(10n - 5) {
    background-color: #61dafb;
  }
  &:nth-of-type(10n - 4) {
    background-color: #1b64b9;
  }
  &:nth-of-type(10n - 3) {
    background-color: #4794a4;
  }
  &:nth-of-type(10n - 2) {
    background-color: #ffcf4f;
  }
  &:nth-of-type(10n - 1) {
    background-color: #387b4f;
  }
  &:nth-of-type(10n) {
    background-color: #ff7c48;
  }
`;

export const Step = styled.h1`
  margin-top: 1.4em;
  position: relative;
  &:before {
    position: absolute;
    left: -2px;
    bottom: 20%;
    display: block;
    content: attr(aria-label);
    font-size: 2em;
    color: rgba(38, 44, 55, 0.14);
  }
`;
