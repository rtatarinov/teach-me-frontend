import React, { useRef, useContext } from 'react';
import { useScroll, useUpdateEffect, useEffectOnce } from 'react-use';
import styled from 'styled-components';
import { Checkbox } from '@components/UI/Checkbox';
import { CollapsedHeader } from '@context/collapsedHeader';
import { customScroll } from '@styles/placeholders';

const Wrapper = styled.div`
  height: calc(100vh - 360px);
  overflow-y: auto;
  ${customScroll};
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 760px;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 16px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const List = ({ items, selectedItems, onChange, children }) => {
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
      <ListWrapper>
        {items.map(({ id, title, isActive }) => (
          <StyledCheckbox
            checked={selectedItems.includes(id)}
            onChange={() => onChange(id)}
            isActive={isActive}
            key={id}
          >
            {title}
          </StyledCheckbox>
        ))}
      </ListWrapper>
      {children}
    </Wrapper>
  );
};
