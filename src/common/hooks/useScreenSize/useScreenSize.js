import { useWindowSize } from 'react-use';
import { QUERIES } from '@styles/constants';

export const useScreenSize = () => {
  const { width } = useWindowSize();
  const isTablet = width > QUERIES.MOBILE && width <= QUERIES.TABLET;
  const isMobile = width <= QUERIES.MOBILE;
  const isDesktop = width > QUERIES.TABLET;

  return { isTablet, isMobile, isDesktop };
};
