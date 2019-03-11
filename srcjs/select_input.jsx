import React, { Component } from 'react';
import { reactInput } from 'reactR';
import Select from 'react-select';

const SelectInput = ({ configuration, value, setValue }) => {
  const select = React.createElement(Select, {
      defaultValue: configuration.selected,
      options: configuration.choices,
      placeholder: configuration.placeholder,
      isClearable: configuration.isClearable,
      isSearchable: configuration.isSearchable,
      isMulti: configuration.isMulti,
      onChange: value => setValue(configuration.isMulti ? value.map(v => v.label) : value.value)
    });

  if (configuration.label) {
    return (
      <React.Fragment>
        <label for={configuration.inputId}>{configuration.label}</label>
        <div
          class = "shiny-input-container"
          style = {configuration.width ? {width: configuration.width} : {}}>
          {select}
        </div>
      </React.Fragment>
    );
  } else {
    return select;
  }
};

reactInput('.select_input', 'shinyReactWidgets.select_input', SelectInput);
