import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '@components/UI/Checkbox';

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

export const List = ({ items = [], selectedItems, onChange, children }) => (
  <>
    <ListWrapper>
      {items.map(({ id, name, isActive }) => (
        <StyledCheckbox
          checked={selectedItems.includes(id)}
          onChange={() => onChange(id)}
          isActive={isActive}
          key={id}
        >
          {name}
        </StyledCheckbox>
      ))}
    </ListWrapper>
    {children}
  </>
);
