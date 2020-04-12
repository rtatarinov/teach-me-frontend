import { theme } from '@styles/theme';
import { opacify } from 'polished';
import { BUTTON_APPEARANCE } from '@styles/constants';

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

    &:focus {
      outline: none;
      box-shadow: 0 0 0 6px
        ${opacify(withoutOutline ? -0.9 : -0.7, theme.colors[bgColor])};
    }
  `;

  if (!withoutOutline) {
    styles += `box-shadow: 0 0 0 6px ${opacify(-0.9, theme.colors[bgColor])};`;
  }

  return styles;
};
