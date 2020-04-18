import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { customScroll } from '@styles/placeholders';
import { useEffectOnce, useScroll, useUpdateEffect } from 'react-use';
import { CollapsedHeader } from '@context/collapsedHeader';

const Wrapper = styled.div`
  height: calc(100vh - 300px);
  overflow-y: auto;
  ${customScroll};
`;

export const ListWrapper = ({ children, title }) => {
  const scrollRef = useRef(null);
  const { y } = useScroll(scrollRef);
  const { setIsCollapsedHeader } = useContext(CollapsedHeader);

  useUpdateEffect(() => {
    setIsCollapsedHeader(y > 30);
  }, [y]);

  useEffectOnce(() => {
    return () => {
      setIsCollapsedHeader(false);
    };
  });

  return (
    <Wrapper ref={scrollRef}>
      {title}
      {children}
    </Wrapper>
  );
};
