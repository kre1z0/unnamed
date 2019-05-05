import React from "react";

import { AutoComplete } from "../AutoComplete";

import countryPolygons from "../../assets/data/countries";

const countries = countryPolygons.map(({ flag, name }) => ({
  icon: flag,
  name: name,
}));

export const CountryAutoComplete = props => {
  return <AutoComplete items={countries} {...props} />;
};
