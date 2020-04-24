import React from 'react';
import styled from 'styled-components';
import { Content } from '@components/UI/Content';
import { Layout } from '@components/Layout';
import { HEADER_APPEARANCE } from '@common/constants';
import { ListWrapper } from '@components/ListWrapper';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

const Title = styled(Content.Title)`
  margin-bottom: 53px;
`;

export const AboutUs = () => (
  <Layout headerAppearance={HEADER_APPEARANCE.WITH_NAVIGATION}>
    <ListWrapper>
      <Title>
        Team <span role="img">😎</span>
      </Title>
      <Team />
    </ListWrapper>
    <Footer />
  </Layout>
);
