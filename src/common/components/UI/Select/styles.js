import { opacify } from 'polished';
import { theme } from '@styles/theme';

export const customStyles = {
  control: () => ({
    position: 'relative',
    display: 'flex',
    border: 'none',
    width: `calc(100% - 48px)`,
    margin: `0 auto 19px`,
    padding: `8px 17px 8px 45px`,
    backgroundColor: opacify(-0.94, theme.colors.black),
    borderRadius: theme.borderRadius.xm,

    ':before': {
      position: 'absolute',
      top: '12px',
      left: '17px',
      width: '13px',
      height: '13px',
      content: '""',
      border: `2px solid ${theme.colors.black}`,
      borderRadius: '50%',
    },

    ':after': {
      position: 'absolute',
      top: '24px',
      left: '27px',
      width: '6px',
      height: '2px',
      content: '""',
      backgroundColor: theme.colors.black,
      transform: `rotate(45deg)`,
    },
  }),
  container: () => ({
    position: 'absolute',
    top: 'calc(100% + 5px)',
    right: '-15px',
    width: '342px',
    paddingTop: '24px',
    paddingBottom: '8px',
    borderRadius: theme.borderRadius.m,
    boxShadow: `0 11px 35px ${opacify(-0.95, theme.colors.black)}`,
  }),
  menu: () => ({
    position: 'static',
  }),
  option: (provided, { isSelected }) => ({
    position: 'relative',
    padding: '16px 24px',
    backgroundColor: 'none',
    fontSize: theme.fonts.size.s,
    color: isSelected ? theme.colors.purple : theme.colors.black,
    fontWeight: isSelected && theme.fonts.weight.medium,
    cursor: isSelected ? 'default' : 'pointer',

    ':after': {
      position: 'absolute',
      top: '50%',
      right: '24px',
      width: '16px',
      height: '16px',
      content: '""',
      transform: 'translateY(-50%)',
      border: `4px solid ${isSelected ? theme.colors.purple : `transparent`}`,
      borderRadius: '50%',
    },

    ':hover': {
      opacity: isSelected ? 1 : 0.75,
    },
  }),
  valueContainer: (provides) => {
    const styles = {
      padding: 0,
    };

    return {
      ...provides,
      ...styles,
    };
  },
  indicatorsContainer: () => ({
    display: `none`,
  }),
  indicatorSeparator: () => ({
    display: `none`,
  }),
  singleValue: (provides) => {
    const styles = {
      fontWeight: theme.fonts.weight.medium,
    };

    return {
      ...provides,
      ...styles,
    };
  },
};
