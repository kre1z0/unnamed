import React, { Component } from "react";
import throttle from "lodash/throttle";
// https://leafletjs.com/reference-1.4.0.html
// https://react-leaflet.js.org/docs/en/context.html
import { TileLayer } from "react-leaflet";

import { LeafletMap } from "./styled";
import { CountryPolygon } from "../../components/CountryPolygon";
import { LeftPanel } from "../../components/LeftPanel";
import countryPolygons from "../../assets/data/countries";

export class Map extends Component {
  constructor(props) {
    super(props);
    this.onCountry = throttle(this.onCountry, 50);
  }

  state = {
    lat: 51.505,
    lng: 14,
    zoom: 4,
    countries: [],
    selectedCountry: null,
    hoveredCountry: null,
  };

  onCountry = (e, country) => {
    const { selectedCountry } = this.state;
    const { code } = country;

    if (e.originalEvent.type === "mouseover") {
      this.setState({ hoveredCountry: country });
    } else if (e.originalEvent.type === "mouseout") {
      this.setState({ hoveredCountry: null });
    } else if (e.originalEvent.type === "click") {
      if (selectedCountry === null || (selectedCountry && selectedCountry.code !== code)) {
        this.setState({ selectedCountry: country });
      }
    }
  };

  onMap = e => {
    const clickOnMap = e.originalEvent.target === this.map.container;

    if (clickOnMap) {
      this.setState({ selectedCountry: null, hoveredCountry: null });
    }
  };

  onMapRef = ref => {
    if (ref) {
      this.map = ref;
    }
  };

  onClosePanel = () => this.setState({ selectedCountry: null, hoveredCountry: null });

  onMouseOutPolygon = () => this.setState({ hoveredCountry: null });

  render() {
    const { lat, lng, zoom, selectedCountry, hoveredCountry } = this.state;
    const position = [lat, lng];

    if (typeof window !== "undefined") {
      return (
        <LeafletMap
          onMapRef={this.onMapRef}
          onClick={this.onMap}
          worldCopyJump={true}
          center={position}
          zoom={zoom}
          minZoom={4}
          maxZoom={44}
          zoomControl={false}
        >
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          {countryPolygons.map(country => {
            const {
              name,
              code,
              flag,
              geoJSON: { coordinates },
            } = country;

            const isSelected = Boolean(selectedCountry && selectedCountry.code === code);
            const isHovered = Boolean(hoveredCountry && hoveredCountry.code === code);

            return (
              <CountryPolygon
                key={code}
                flag={flag}
                name={name}
                isSelected={isSelected}
                isHovered={isHovered}
                coordinates={coordinates}
                onCountry={e => this.onCountry(e, country)}
                onMouseOutPolygon={this.onMouseOutPolygon}
              />
            );
          })}
          <LeftPanel onClosePanel={this.onClosePanel} {...selectedCountry} />
        </LeafletMap>
      );
    } else {
      return null;
    }
  }
}
