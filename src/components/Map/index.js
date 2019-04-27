import React, { Component } from "react";
import find from "lodash/find";
// https://leafletjs.com/reference-1.4.0.html
// https://react-leaflet.js.org/docs/en/context.html
import { TileLayer, Polygon } from "react-leaflet";

import { LeafletMap, CountryTooltip, Flag } from "./styled";
import { LeftPanel } from "../../components/LeftPanel";
import countryPolygons from "../../assets/data/countryPolygons";
import { fetchAllCountries } from "../../api/restcountries.eu";

export class Map extends Component {
  state = {
    lat: 51.505,
    lng: 14,
    zoom: 4,
    countries: [],
    selectedCountry: null,
    hoveredCountry: null,
  };

  componentDidMount() {
    fetchAllCountries()
      .then(({ data }) => this.setState({ countries: data }))
      .catch(({ response }) => console.error(response));
  }

  onCountry = (e, country) => {
    const { countries, selectedCountry } = this.state;
    const { code } = country;
    const info = find(countries, { alpha2Code: code });

    if (e.originalEvent.type === "mouseover") {
      // if (selectedCountry === null || (selectedCountry && selectedCountry.alpha2Code !== code)) {
      //   this.setState({ hoveredCountry: info });
      // }
      this.setState({ hoveredCountry: info });
    } else {
      if (selectedCountry === null || (selectedCountry && selectedCountry.alpha2Code !== code)) {
        this.setState({ selectedCountry: info });
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

  render() {
    const { lat, lng, zoom, selectedCountry, hoveredCountry } = this.state;
    const position = [lat, lng];

    return (
      <LeafletMap
        ref={this.onMapRef}
        onClick={this.onMap}
        onMouseOver={this.onMap}
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
            geoJSON: { coordinates },
          } = country;

          const isSelected = selectedCountry && selectedCountry.alpha2Code === code;
          const isHovered = hoveredCountry && hoveredCountry.alpha2Code === code;

          return (
            <Polygon
              key={code}
              positions={coordinates}
              color={isSelected ? "#90c53d" : isHovered ? "rgba(0,170,255,0.8)" : "transparent"}
              weight={1}
              onMouseOver={e => this.onCountry(e, country)}
              onClick={e => this.onCountry(e, country)}
            >
              <CountryTooltip sticky>
                <Flag src={hoveredCountry && hoveredCountry.flag} />
                {name}
              </CountryTooltip>
            </Polygon>
          );
        })}
        <LeftPanel
          isOpen={selectedCountry !== null}
          onClosePanel={() => this.setState({ selectedCountry: null })}
          {...selectedCountry}
        />
      </LeafletMap>
    );
  }
}
