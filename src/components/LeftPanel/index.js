import React, { Component } from "react";
import L from "leaflet";

import { rateLimit } from "../../utils/number";
import { Content } from "./Content";
import { LeftPanelContainer } from "./styled";

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
    const { onClosePanel } = this.props;

    if (deltaX >= 200) {
      this.setState(
        {
          deltaX: 400,
          transition: true,
        },
        () => {
          onClosePanel();
        },
      );
    } else {
      this.setState({ deltaX: 0, transition: true });
    }
  };

  componentDidUpdate({ alpha2Code: prevAlpha2Code }, prevState) {
    const { alpha2Code } = this.props;

    const countyIsChanged = prevAlpha2Code !== alpha2Code;

    if (countyIsChanged && alpha2Code) {
      this.setState({ deltaX: 0, transition: true });
    } else if (countyIsChanged && !alpha2Code) {
      this.setState({ deltaX: 400, transition: true });
    }
  }

  onClosePanel = () => {
    const { onClosePanel } = this.props;

    this.setState(
      {
        deltaX: 400,
        transition: true,
      },
      () => {
        onClosePanel();
      },
    );
  };

  render() {
    const { deltaX, transition } = this.state;

    return (
      <LeftPanelContainer
        transition={transition}
        deltaX={deltaX}
        onSwiped={this.onSwiped}
        onSwiping={this.onSwiping}
        onRef={this.onRef}
      >
        <Content onClosePanel={this.onClosePanel} {...this.props} />
      </LeftPanelContainer>
    );
  }
}
