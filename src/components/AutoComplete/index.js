import React from "react";
// https://github.com/reactjs/react-autocomplete
import ReactAutocomplete from "react-autocomplete";

import { matchStateToTerm, sortStates } from "../../utils/sort";
import { Item } from "./Item";
import { AutocompleteContainer, Input, SelectedIcon } from "./styled";

export const AutoComplete = props => {
  const { items, value } = props;
  const selectedItem = items.find(item => item.name === value);
  const selectedItemIcon = selectedItem && selectedItem.icon;

  return (
    <AutocompleteContainer>
      {selectedItemIcon && <SelectedIcon src={selectedItemIcon} alt="icon" />}
      <ReactAutocomplete
        getItemValue={item => item.name}
        shouldItemRender={matchStateToTerm}
        sortItems={sortStates}
        renderInput={inputProps => <Input {...inputProps} />}
        renderItem={({ name, icon }, isHighlighted) => (
          <Item name={name} key={name} icon={icon} isHighlighted={isHighlighted} />
        )}
        {...props}
      />
    </AutocompleteContainer>
  );
};
