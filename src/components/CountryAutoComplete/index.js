import React, { Component } from "react";

import { fetchAllCountries } from "../../api/restcountries.eu";
import { AutoComplete } from "../AutoComplete";

export class CountryAutoComplete extends Component {
  state = {
    countries: [],
    value: "",
  };

  componentDidMount() {
    fetchAllCountries()
      .then(({ data }) =>
        this.setState({
          countries: data.map(({ alpha2Code, flag, name }) => ({
            code: alpha2Code,
            icon: flag,
            name: name,
          })),
        }),
      )
      .catch(({ response }) => console.error(response));
  }

  onSelect = value => {
    const { onSelect } = this.props;

    this.setState(
      {
        value,
      },
      () => {
        onSelect && onSelect(value);
      },
    );
  };

  render() {
    const { countries, value } = this.state;

    return (
      <AutoComplete
        items={countries}
        value={value}
        onChange={e => this.setState({ value: e.target.value })}
        onSelect={value => this.onSelect(value)}
      />
    );
  }
}
