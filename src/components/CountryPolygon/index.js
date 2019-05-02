import React, { Component } from "react";

import { Polygon } from "react-leaflet";
import { CountryTooltip, Flag } from "./styled";
import color from "../../styles/colors";

export class CountryPolygon extends Component {
  shouldComponentUpdate({ isSelected: nextIsSelected, isHovered: nextiIsHovered }, nextState) {
    const { isSelected, isHovered } = this.props;

    return isSelected !== nextIsSelected || isHovered !== nextiIsHovered;
  }

  render() {
    const {
      name,
      coordinates,
      isSelected,
      flag,
      isHovered,
      onCountry,
      onMouseOutPolygon,
    } = this.props;

    return (
      <Polygon
        positions={coordinates}
        color={isSelected ? color.green : isHovered ? "rgba(0,170,255,0.8)" : "transparent"}
        weight={1}
        onMouseOver={onCountry}
        onMouseOut={onMouseOutPolygon}
        onClick={onCountry}
      >
        <CountryTooltip isHovered={isHovered} sticky>
          <Flag src={flag} />
          {name}
        </CountryTooltip>
      </Polygon>
    );
  }
}
