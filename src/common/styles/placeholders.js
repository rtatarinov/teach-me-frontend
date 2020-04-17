import { opacify } from 'polished';
import { theme } from './theme';

export const resetButtonStyle = `
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const addHoverOpacity = `
  transition: opacity ${theme.transition.default} ease;

  &:hover {
    opacity: 0.75;
  }
`;

export const customScroll = `
  @-moz-document url-prefix() {
    & {
      scrollbar-color: ${opacify(-0.4, theme.colors.black)} transparent;
      scrollbar-width: thin;
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${opacify(-0.4, theme.colors.black)};
    border-radius: ${theme.borderRadius.default};
  }
`;
