import React, { Component } from "react";
import { Polygon } from "react-leaflet";
import { CountryTooltip, Flag } from "./styled";

export class CountryPolygon extends Component {
  shouldComponentUpdate({ isSelected: nextIsSelected, isHovered: nextiIsHovered }, nextState) {
    const { isSelected, isHovered } = this.props;

    return isSelected !== nextIsSelected || isHovered !== nextiIsHovered;
  }

  render() {
    const { name, coordinates, isSelected, flag, isHovered, onCountry } = this.props;

    return (
      <Polygon
        positions={coordinates}
        color={isSelected ? "#90c53d" : isHovered ? "rgba(0,170,255,0.8)" : "transparent"}
        weight={1}
        onMouseOver={onCountry}
        onClick={onCountry}
      >
        <CountryTooltip sticky>
          <Flag src={flag} />
          {name}
        </CountryTooltip>
      </Polygon>
    );
  }
}
