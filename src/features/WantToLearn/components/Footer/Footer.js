import React from 'react';
import styled from 'styled-components';
import { isEmpty } from '@utils/isEmpty';
import { Content } from '@components/UI/Content';
import { Button } from '@components/UI/Button';

const Warning = styled.div`
  margin-right: auto;
  margin-left: 50px;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.orange};
`;

const StyledButton = styled(Button)`
  ${Button.Icon} {
    transform: scaleX(-1);
  }
`;

export const Footer = ({ selectedTags = [] }) => {
  const hasSelectedTags = !isEmpty(selectedTags);

  return (
    <Content.Footer>
      <StyledButton
        bgColor={hasSelectedTags ? 'purple' : 'white'}
        color={hasSelectedTags ? 'white' : 'black'}
        disabled={!hasSelectedTags}
        icon="arrow"
        withoutOutline
      >
        Next
      </StyledButton>
      {!hasSelectedTags && <Warning>Specify what you want to study</Warning>}
    </Content.Footer>
  );
};
