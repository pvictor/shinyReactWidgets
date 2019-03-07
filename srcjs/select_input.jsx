import React, { Component } from 'react';
import { reactInput } from 'reactR';
import Select from 'react-select';


const SelectInput = ({ configuration, value, setValue }) => {
  return React.createElement(Select, {
    defaultValue: configuration.selected,
    options: configuration.choices,
    placeholder: configuration.placeholder,
    isClearable: configuration.isClearable,
    isSearchable: configuration.isSearchable,
    isMulti: configuration.isMulti,
    onChange: function(value) {
      if (configuration.isMulti) {
        var res = [];
        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            res.push(value[key].label);
          }
        }
        setValue(res);
      } else {
        setValue(value.value);
      }
    }
  });
};

reactInput('.select_input', 'shinyReactWidgets.select_input', SelectInput);
