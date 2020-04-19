import React from 'react';
import styled from 'styled-components';
import { useTimer } from 'react-timer-hook';
import { useEffectOnce } from 'react-use';

const Wrapper = styled.span`
  color: inherit;
`;

export const Timer = ({
  className,
  expiryTimestamp = 30,
  onExpire = Function.prototype,
  withAutoStart,
}) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + expiryTimestamp);

  const { seconds, start } = useTimer({ expiryTimestamp: time, onExpire });

  useEffectOnce(() => {
    if (withAutoStart) {
      start();
    }
  });

  return <Wrapper className={className}>{seconds}</Wrapper>;
};
