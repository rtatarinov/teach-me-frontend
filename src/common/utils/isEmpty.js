/* eslint-disable no-nested-ternary */

export const isEmpty = (value) => {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'object':
      return value === null
        ? true
        : Array.isArray(value)
        ? !value.length
        : Object.entries(value).length === 0 && value.constructor === Object;
    case 'string':
      return !value.length;
    default:
      return false;
  }
};
