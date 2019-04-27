import React, { Component } from "react";
import find from "lodash/find";
import throttle from "lodash/throttle";
// https://leafletjs.com/reference-1.4.0.html
// https://react-leaflet.js.org/docs/en/context.html
import { TileLayer } from "react-leaflet";

import { LeafletMap } from "./styled";
import { CountryPolygon } from "../../components/CountryPolygon";
import { LeftPanel } from "../../components/LeftPanel";
import countryPolygons from "../../assets/data/countryPolygons";
import { fetchAllCountries } from "../../api/restcountries.eu";

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

    if (typeof window !== "undefined") {
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

            const isSelected = Boolean(selectedCountry && selectedCountry.alpha2Code === code);
            const isHovered = Boolean(hoveredCountry && hoveredCountry.alpha2Code === code);

            return (
              <CountryPolygon
                key={code}
                flag={hoveredCountry && hoveredCountry.flag}
                name={name}
                isSelected={isSelected}
                isHovered={isHovered}
                coordinates={coordinates}
                onCountry={e => this.onCountry(e, country)}
              />
            );
          })}
          <LeftPanel
            isOpen={selectedCountry !== null}
            onClosePanel={() => this.setState({ selectedCountry: null })}
            {...selectedCountry}
          />
        </LeafletMap>
      );
    } else {
      return null;
    }
  }
}
