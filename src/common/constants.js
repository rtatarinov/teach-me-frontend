export const PROJECT_NAME = 'Teach me';
export const { API_URL } = process.env;
export const { ZOOM_CLIENT_ID } = process.env;
export const { REDIRECT_URL_AFTER_ZOOM } = process.env;

export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  LOGIN_AFTER_ZOOM: '/login',
  ABOUT_US: '/about',
  WANT_LEARN: '/want-learn',
  CAN_TEACH: '/can-teach',
};

export const HEADER_APPEARANCE = {
  WITH_NAVIGATION: 'with-navigations',
};

export const REQUEST_STATUS = {
  READY: 'ready',
  SENT: 'sent',
  SUCCESS: 'successful',
};
