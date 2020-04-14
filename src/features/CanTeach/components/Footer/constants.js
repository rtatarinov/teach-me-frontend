import { REQUEST_STATUS } from '@common/constants';

export const buttonText = {
  [REQUEST_STATUS.READY]: 'Start',
  [REQUEST_STATUS.SENT]: 'Stop',
  [REQUEST_STATUS.SUCCESS]: 'Accept',
  default: '',
};

export const buttonBackground = {
  [REQUEST_STATUS.READY]: 'purple',
  [REQUEST_STATUS.SENT]: 'purple',
  [REQUEST_STATUS.SUCCESS]: 'green',
  default: 'purple',
};
