import React, { Component } from "react";

import { Close } from "../../components/Icons/Close";
import { CloseBtn, Flag } from "./styled";
import { Field } from "../Field";

export class Content extends Component {
  shouldComponentUpdate({ alpha2Code: nextAlpha2Code }, nextState) {
    const { alpha2Code } = this.props;

    return Boolean(alpha2Code !== nextAlpha2Code && nextAlpha2Code);
  }

  render() {
    const { onClosePanel, name, flag } = this.props;

    return (
      <>
        <Flag src={flag} />
        <CloseBtn onClick={onClosePanel}>
          <Close />
        </CloseBtn>
        <h1>{name}</h1>
        <Field name="name 1" value="value 1" />
        <Field name="name 2" value="value 2" />
        <Field name="name 3" value="value 3" />
        <Field name="name 4" value="value 4" />
      </>
    );
  }
}
