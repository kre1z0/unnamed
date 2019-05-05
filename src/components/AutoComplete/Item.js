import React, { Component } from "react";
import { Icon, Item as ItemUI, Text } from "./styled";

export class Item extends Component {
  shouldComponentUpdate({ isHighlighted: nextIsHighlighted }, nextState) {
    const { isHighlighted } = this.props;

    return isHighlighted !== nextIsHighlighted;
  }

  render() {
    const { icon, name, isHighlighted, ...props } = this.props;

    return (
      <ItemUI isHighlighted={isHighlighted} {...props}>
        {icon && <Icon src={icon} alt="icon" />}
        <Text>{name}</Text>
      </ItemUI>
    );
  }
}
