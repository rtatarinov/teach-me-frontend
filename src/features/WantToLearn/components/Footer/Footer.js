import React from 'react';
import styled from 'styled-components';
import { isEmpty } from '@utils/isEmpty';
import { Content } from '@components/UI/Content';
import { Button } from '@components/UI/Button';
import { ROUTES } from '@common/constants';

const Warning = styled.div`
  margin-right: auto;
  margin-left: 53px;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.orange};
  opacity: ${({ isTransparent }) => (isTransparent ? 0 : 1)};
  transition: ${({ theme }) => theme.transition.fast};
`;

const StyledButton = styled(Button)`
  & > a {
    padding: 12px 23px;
  }

  ${Button.Children} {
    min-width: 0;
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  ${Button.Icon} {
    margin-left: 7px;
    transform: scaleX(-1);
  }
`;

export const Footer = ({
  selectedTags = [],
  setIsShownWarning,
  isShownWarning,
}) => {
  const hasSelectedTags = !isEmpty(selectedTags);
  const handleClickNextButton = () => {
    if (!hasSelectedTags) {
      setIsShownWarning(true);
    }
  };

  return (
    <Content.Footer>
      <StyledButton
        bgColor={hasSelectedTags ? 'purple' : 'white'}
        color={hasSelectedTags ? 'white' : 'black'}
        icon="arrow"
        withoutOutline
        to={hasSelectedTags ? ROUTES.CAN_TEACH : null}
        onClick={handleClickNextButton}
      >
        Next
      </StyledButton>
      <Warning isTransparent={!isShownWarning}>
        Specify what you want to study
      </Warning>
    </Content.Footer>
  );
};
