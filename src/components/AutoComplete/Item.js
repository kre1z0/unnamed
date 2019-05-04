import React, { Component } from "react";
import { Icon, Item as ItemUI, Text } from "./styled";

const AutoCompleteItem = React.forwardRef(({ icon, name, isHighlighted, ...props }, ref) => {
  return (
    <ItemUI ref={ref} isHighlighted={isHighlighted} {...props}>
      {icon && <Icon src={icon} alt="icon" />}
      <Text>{name}</Text>
    </ItemUI>
  );
});

export class Item extends Component {
  shouldComponentUpdate({ isHighlighted: nextIsHighlighted }, nextState) {
    const { isHighlighted } = this.props;

    return isHighlighted !== nextIsHighlighted;
  }

  render() {
    return <AutoCompleteItem {...this.props} />;
  }
}
