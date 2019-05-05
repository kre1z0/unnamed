import React, { Component } from "react";

import { fetchAllCountries } from "../../api/restcountries.eu";
import { AutoComplete } from "../AutoComplete";

export class CountryAutoComplete extends Component {
  state = {
    countries: [],
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

  render() {
    const { countries } = this.state;

    return <AutoComplete items={countries} {...this.props} />;
  }
}
