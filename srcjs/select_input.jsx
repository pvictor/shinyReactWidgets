import React, { Component } from 'react'
import { reactInput } from 'reactR';
import Select from 'react-select';

const SelectInput = ({ configuration, value, setValue }) => {

  const handleSinglevalue = (value) => value === null ? [] : value.value;

  const select = React.createElement(Select, {
      defaultValue: configuration.selected,
      options: configuration.choices,
      placeholder: configuration.placeholder,
      isClearable: configuration.isClearable,
      isSearchable: configuration.isSearchable,
      isMulti: configuration.isMulti,
      onChange: value => setValue(configuration.isMulti ? value.map(v => v.label) : handleSinglevalue(value))
    });

  if (configuration.label) {
    return (
      <React.Fragment>
        <div
          class = "shiny-input-container"
          style = {configuration.width ? {width: configuration.width} : {}}>
          <label for={configuration.inputId}>{configuration.label}</label>
          {select}
        </div>
      </React.Fragment>
    );
  } else {
    return select;
  }
};

reactInput('.select_input', 'shinyReactWidgets.select_input', SelectInput);
