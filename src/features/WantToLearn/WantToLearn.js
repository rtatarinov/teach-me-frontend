import React from 'react';
import { useEffectOnce, useList } from 'react-use';
import styled from 'styled-components';
import { Content } from '@components/UI/Content';
import { Layout } from '@components/UI/Layout';
import { Loader } from '@components/UI/Loader';
import { Error } from '@components/UI/Error';
import { Checkbox } from '@components/UI/Checkbox';
import { useRequest } from '@hooks/index';
import { isEmpty } from '@utils/isEmpty';
import { Footer } from './components/Footer';
import { mocks } from './mocks';

const Wrapper = styled(Layout)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 760px;
  margin-bottom: auto;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 16px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Container = ({ children }) => (
  <Wrapper>
    <Content.Title>I want to learn</Content.Title>
    {children}
  </Wrapper>
);

export const WantToLearn = () => {
  const [{ isLoading, error, data: tags }, getTags] = useRequest({
    url: '#',
    initialIsLoading: true,
    mocks,
  });

  const [selectedTags, { push, remove }] = useList([]);

  const handleChange = (id) => {
    const indexOfElement = selectedTags.findIndex((item) => item === id);

    if (indexOfElement === -1) {
      push(id);
    } else {
      remove(indexOfElement);
    }
  };

  useEffectOnce(() => {
    getTags();
  });

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Error>Ошибка сервера</Error>
      </Container>
    );
  }

  if (isEmpty(tags)) {
    return (
      <Container>
        <Error>К сожалению список тэгов пуст</Error>
      </Container>
    );
  }

  return (
    <Container>
      <List>
        {tags.map(({ id, title }) => (
          <StyledCheckbox
            checked={selectedTags.includes(id)}
            onChange={() => handleChange(id)}
            key={id}
          >
            {title}
          </StyledCheckbox>
        ))}
      </List>
      <Footer selectedTags={selectedTags} />
    </Container>
  );
};
