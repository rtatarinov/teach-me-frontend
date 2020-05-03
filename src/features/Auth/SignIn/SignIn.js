import React from 'react';
import { Button } from '@components/UI/Button';
import { ZOOM_CLIENT_ID, REDIRECT_URL_AFTER_ZOOM } from '@common/constants';

export const SignIn = () => {
  return (
    <Button
      href={`https://zoom.us/oauth/authorize?response_type=code&client_id=${ZOOM_CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_ZOOM}`}
    >
      Login with zoom
    </Button>
  );
};
