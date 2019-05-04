import React from "react";

import { CountryAutoComplete } from "../../../components/CountryAutoComplete";

export const CountrySelect = props => {
  const { onChange } = props;
  return <CountryAutoComplete onSelect={value => onChange(value)} />;
};
