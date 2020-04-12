import { theme } from '@styles/theme';
import { opacify } from 'polished';
import { BUTTON_APPEARANCE } from './constants';

export const styles = {
  [BUTTON_APPEARANCE.BIG]: `
    padding: 18px 20px;
    border-radius:  ${theme.borderRadius.l};
  `,
};

export const getCommonStyles = (withoutOutline, bgColor) => {
  let styles = `
    transition: ease ${theme.transition.fast} all;

    &:hover {
      background-color: ${opacify(-0.3, theme.colors[bgColor])};
    }
  `;

  if (!withoutOutline) {
    styles += `box-shadow: 0px 0px 0px 6px ${opacify(
      -0.9,
      theme.colors[bgColor],
    )};`;
  }

  return styles;
};
