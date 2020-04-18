import { css } from 'styled-components';
import { QUERIES } from './constants';

export const media = Object.keys(QUERIES).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${QUERIES[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
