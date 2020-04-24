import React from 'react';
import styled from 'styled-components';
import { useStopwatch } from 'react-timer-hook';
import { opacify } from 'polished';

const StopWatchText = styled.div`
  margin-bottom: 7px;
  color: ${({ theme }) => opacify(-0.4, theme.colors.black)};
`;

export const StopWatch = ({ autoStart }) => {
  const { seconds, minutes } = useStopwatch({ autoStart });

  return (
    <StopWatchText>
      <span>{minutes}</span>:<span>{seconds}</span>
    </StopWatchText>
  );
};
