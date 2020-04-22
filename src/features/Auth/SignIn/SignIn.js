import React from 'react';
import { Button } from '@components/UI/Button';
import { ROUTES } from '@common/constants';

export const SignIn = () => {
  return (
    <Button
      href={`https://zoom.us/oauth/authorize?response_type=code&client_id=7tKfYZ0ATcWgjaMVJwD3uQ&redirect_uri=https://localhost${ROUTES.WANT_LEARN}`}
    >
      Next
    </Button>
  );
};
