import React, { memo } from 'react';
import Select from 'react-select';
import { customStyles } from './styles';

const SelectComponent = ({
  options,
  defaultValue,
  name,
  styles = customStyles,
  menuIsOpen,
  placeholder,
  onChange,
}) => (
  <Select
    defaultValue={defaultValue}
    name={name}
    options={options}
    styles={styles}
    menuIsOpen={menuIsOpen}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export const SelectUI = memo(SelectComponent);
