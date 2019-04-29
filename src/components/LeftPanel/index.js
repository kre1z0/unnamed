import React, { Component } from "react";
import L from "leaflet";
import numeral from "numeral";
import CloseIcon from "@material-ui/icons/Close";

import { rateLimit } from "../../utils/number";
import { Field } from "../../components/Field";
import { LeftPanelContainer, Flag, CloseBtn } from "./styled";

export class LeftPanel extends Component {
  state = {
    deltaX: 400,
    transition: false,
  };

  shouldComponentUpdate({ alpha2Code: nextAlpha2Code }, { deltaX: nextDeltaX }) {
    const { deltaX } = this.state;
    const { alpha2Code } = this.props;

    return deltaX !== nextDeltaX || alpha2Code !== nextAlpha2Code;
  }

  onRef = ref => ref && L.DomEvent.disableClickPropagation(ref);

  onSwiping = ({ deltaX }) => {
    this.setState({ deltaX: rateLimit(deltaX, 0, 400), transition: false });
  };

  onSwiped = ({ deltaX }) => {
    if (deltaX >= 200) {
      this.setState({ deltaX: 400, transition: true });
    } else {
      this.setState({ deltaX: 0, transition: true });
    }
  };

  componentDidUpdate({ alpha2Code: prevAlpha2Code }, prevState) {
    const { alpha2Code } = this.props;

    if (prevAlpha2Code !== alpha2Code) {
      this.setState({ deltaX: 0, transition: true });
    }
  }

  onClosePanel = () => this.setState({ deltaX: 400, transition: true });

  render() {
    const { deltaX, transition } = this.state;
    const { name, flag, population, capital } = this.props;

    return (
      <LeftPanelContainer
        transition={transition}
        deltaX={deltaX}
        onSwiped={this.onSwiped}
        onSwiping={this.onSwiping}
        onRef={this.onRef}
      >
        <Flag src={flag} />
        <CloseBtn onClick={this.onClosePanel}>
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
