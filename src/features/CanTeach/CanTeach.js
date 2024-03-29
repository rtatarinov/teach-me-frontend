import React from 'react';
import {
  useEffectOnce,
  useList,
  useLocalStorage,
  useUpdateEffect,
} from 'react-use';
import styled from 'styled-components';
import { Content } from '@components/UI/Content';
import { Layout } from '@components/Layout';
import { Loader } from '@components/UI/Loader';
import { Error } from '@components/UI/Error';
import { ListWrapper } from '@components/ListWrapper';
import { List } from '@components/List';
import { useRequest } from '@hooks/useRequest';
import { isEmpty } from '@utils/isEmpty';
import { HEADER_APPEARANCE } from '@common/constants';
import { Footer } from './components/Footer';

const Wrapper = styled(Layout)`
  height: 100%;
`;

const Title = () => (
  <Content.Title>
    I can teach
    <span role="img" aria-label="emoji about teaching">
      {' '}
    </span>
    ‍‍🎓
  </Content.Title>
);

const Container = ({ children }) => (
  <Wrapper headerAppearance={HEADER_APPEARANCE.WITH_NAVIGATION}>
    <ListWrapper title={<Title />}>{children}</ListWrapper>
  </Wrapper>
);

export const CanTeach = () => {
  const [{ isLoading, error, data: tags }, getTags] = useRequest({
    url: '/data/skills',
    initialIsLoading: true,
  });

  const [savedSelectedTags, setSavedSelectedTags] = useLocalStorage(
    'canTeachTags',
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
      <Footer selectedTags={selectedTags} />
    </Container>
  );
};
