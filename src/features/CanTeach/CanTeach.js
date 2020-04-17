import React from 'react';
import {
  useEffectOnce,
  useList,
  useLocalStorage,
  useUpdateEffect,
} from 'react-use';
import styled from 'styled-components';
import { Content } from '@components/UI/Content';
import { Layout } from '@components/UI/Layout';
import { Loader } from '@components/UI/Loader';
import { Error } from '@components/UI/Error';
import { List } from '@components/List';
import { useRequest } from '@hooks/index';
import { isEmpty } from '@utils/isEmpty';
import { HEADER_APPEARANCE } from '@common/constants';
import { Footer } from './components/Footer';
import { mocks } from './mocks';

const Wrapper = styled(Layout)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Container = ({ children }) => (
  <Wrapper headerAppearance={HEADER_APPEARANCE.WITH_LANGUAGES}>
    <Content.Title>I can teach</Content.Title>
    {children}
  </Wrapper>
);

export const CanTeach = () => {
  const [{ isLoading, error, data: tags }, getTags] = useRequest({
    url: '#',
    initialIsLoading: true,
    mocks,
  });

  const [savedSelectedTags, setSavedSelectedTags] = useLocalStorage(
    'canTeachTags',
    null,
  );

  const [selectedTags, { push, remove }] = useList(
    savedSelectedTags ? savedSelectedTags : [],
  );

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

  useUpdateEffect(() => {
    setSavedSelectedTags(selectedTags);
  }, [selectedTags]);

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
        <Error>Server error</Error>
      </Container>
    );
  }

  if (isEmpty(tags)) {
    return (
      <Container>
        <Error>Unfortunately, tags list is empty</Error>
      </Container>
    );
  }

  return (
    <Container>
      <List items={tags} selectedItems={selectedTags} onChange={handleChange}>
        <Content.OnlineTagsMessage>
          – Right now someone's looking for a conversation partner for that
          skill
        </Content.OnlineTagsMessage>
      </List>
      <Footer selectedTags={selectedTags} />
    </Container>
  );
};
