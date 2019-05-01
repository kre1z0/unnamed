import React, { Component } from "react";
import numeral from "numeral";
import CloseIcon from "@material-ui/icons/Close";

import { CloseBtn, Flag } from "./styled";
import { Field } from "../Field";

export class Content extends Component {
  shouldComponentUpdate({ alpha2Code: nextAlpha2Code }, nextState) {
    const { alpha2Code } = this.props;

    return Boolean(alpha2Code !== nextAlpha2Code && nextAlpha2Code);
  }

  render() {
    const { onClosePanel, name, flag, population, capital } = this.props;

    return (
      <>
        <Flag src={flag} />
        <CloseBtn onClick={onClosePanel}>
          <CloseIcon />
        </CloseBtn>
        <h1>{name}</h1>
        <Field
          name="population"
          value={numeral(population)
            .format("0,0[.]")
            .replace(/,/g, " ")}
        />
        <Field name="capital" value={capital} />
        <Field />
        <Field />
      </>
    );
  }
}
