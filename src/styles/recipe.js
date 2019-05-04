import styled from "styled-components";

export const Header = styled.header.attrs(({ image }) => ({
  style: {
    backgroundImage: `url(${image})`,
  },
}))`
  margin: 0 -15px;
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

export const Country = styled.div`
  z-index: 1;
  position: absolute;
  right: 4px;
  top: 4px;
  padding: 4px 6px;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.64);
  line-height: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Flag = styled.img`
  width: auto;
  height: 20px;
  box-shadow: 0 6px 6px 0 rgba(255, 255, 255, 0.2);
  margin-right: 6px;
`;

export const Category = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.64);
  &:first-child {
    margin-right: 4px;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Ingredient = styled.div`
  border-radius: 1px;
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

export const FigureStep = styled.figure`
  margin: 0;
`;

export const Step = styled.h1`
  margin-top: 2.8em;
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

export const Footer = styled.footer`
  font-weight: 600;
  margin-top: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 44px 0;
  background-color: rgba(38, 44, 55, 0.14);
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, 0.64);
  background-image: url(https://i.pinimg.com/originals/d3/32/37/d332372e0f554f8ec6ae134df55d0671.png),
    url(https://i.pinimg.com/originals/d3/32/37/d332372e0f554f8ec6ae134df55d0671.png);
  background-size: 40px;
  background-repeat: repeat-x;
  background-position: top, bottom;
`;

export const CatImg = styled.img`
  border-radius: 4px;
  width: auto;
  height: 80px;
  margin-right: 14px;
  opacity: 0.6;
`;
