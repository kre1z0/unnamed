import React, { Component } from "react";

import { CountryAutoComplete } from "../../../components/CountryAutoComplete";

export default class CountrySelect extends Component {
  render() {
    const { onChange, forID, classNameWrapper, value } = this.props;

    return (
      <CountryAutoComplete
        onSelect={value => onChange(value)}
        value={value || ""}
        onChange={e => onChange(e.target.value)}
        inputProps={{ id: forID, className: classNameWrapper }}
      />
    );
  }
}
