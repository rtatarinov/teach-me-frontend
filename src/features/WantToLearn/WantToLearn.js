import React, { useState } from 'react';
import styled from 'styled-components';
import {
  useEffectOnce,
  useList,
  useLocalStorage,
  useUpdateEffect,
} from 'react-use';
import { HEADER_APPEARANCE } from '@common/constants';
import { Content } from '@components/UI/Content';
import { Loader } from '@components/UI/Loader';
import { Error } from '@components/UI/Error';
import { Layout } from '@components/UI/Layout';
import { ListWrapper } from '@components/ListWrapper';
import { List } from '@components/List';
import { useRequest } from '@hooks/index';
import { isEmpty } from '@utils/isEmpty';
import { Footer } from './components/Footer';
import { mocks } from './mocks';

const Wrapper = styled(Layout)`
  height: 100%;
`;

const Title = () => (
  <Content.Title>
    I want to learn<span role="img"> </span>🤓
  </Content.Title>
);

const Container = ({ children }) => (
  <Wrapper headerAppearance={HEADER_APPEARANCE.WITH_LANGUAGES}>
    <ListWrapper title={<Title />}>{children}</ListWrapper>
  </Wrapper>
);

export const WantToLearn = () => {
  const [isShownWarning, setIsShownWarning] = useState(false);
  const [{ isLoading, error, data: tags }, getTags] = useRequest({
    url: '#',
    initialIsLoading: true,
    mocks,
  });

  const [savedSelectedTags, setSavedSelectedTags] = useLocalStorage(
    'wantToLearnTags',
    null,
  );

  const [selectedTags, { push, remove }] = useList(savedSelectedTags || []);

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

    if (isShownWarning && selectedTags.length !== 0) {
      setIsShownWarning(false);
    }
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
          {`– Right now someone's looking for a conversation partner for that
          skill`}
        </Content.OnlineTagsMessage>
      </List>
      <Footer
        selectedTags={selectedTags}
        isShownWarning={isShownWarning}
        setIsShownWarning={setIsShownWarning}
      />
    </Container>
  );
};
