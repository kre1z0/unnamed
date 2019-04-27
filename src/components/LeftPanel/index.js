import React, { Component } from "react";
import L from "leaflet";
import numeral from "numeral";
import CloseIcon from "@material-ui/icons/Close";

import { Field } from "../../components/Field";
import { LeftPanelContainer, Flag, CloseBtn } from "./styled";

export class LeftPanel extends Component {
  onRef = ref => ref && L.DomEvent.disableClickPropagation(ref);

  render() {
    const { onClosePanel, isOpen, name, flag, population, capital } = this.props;

    return (
      <LeftPanelContainer isOpen={isOpen} ref={this.onRef}>
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
      </LeftPanelContainer>
    );
  }
}
