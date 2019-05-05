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

  shouldComponentUpdate({ code: nextcode }, { deltaX: nextDeltaX }) {
    const { deltaX } = this.state;
    const { code } = this.props;

    return deltaX !== nextDeltaX || code !== nextcode;
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

  componentDidUpdate({ code: prevcode }, prevState) {
    const { code } = this.props;

    const countyIsChanged = prevcode !== code;

    if (countyIsChanged && code) {
      this.setState({ deltaX: 0, transition: true });
    } else if (countyIsChanged && !code) {
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
