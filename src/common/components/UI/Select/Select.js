import React, { memo } from 'react';
import Select from 'react-select';
import { customStyles } from './styles';

const SelectComponent = ({
  options,
  defaultValue,
  name,
  styles = customStyles,
}) => (
  <Select
    defaultValue={defaultValue}
    name={name}
    options={options}
    styles={styles}
  />
);

export const SelectUI = memo(SelectComponent);
