import React, { memo } from 'react';
import styled from 'styled-components';
import { media } from '@styles/utils';
import { TeamMember } from './components/TeamMember';

const Wrapper = styled.div`
  display: flex;
  ${media.TABLET`
    justify-content: space-between;
    flex-wrap: wrap;
  `}
  ${media.MOBILE`
    display: block;
  `}
`;

const Member = styled(TeamMember)`
  &:not(:last-child) {
    margin-right: 120px;
    ${media.TABLET`
      margin-right: 20px;
      margin-bottom: 30px;
    `}
  }
`;

const team = [
  {
    id: 1,
    avatar: '/img/team/andrew.jpg',
    name: 'Andrew',
    position: 'Design',
    description:
      'Site of the Day - Awwwards Winner. Winner of Hakaton in Salekhard (2019), Finalist of Hakaton VK 2017/19. ',
    portfolioLink: '#',
    contactsLink: '#',
  },
  {
    id: 2,
    avatar: '/img/team/roman.jpg',
    name: 'Roman',
    position: 'Front-end developer',
    description:
      'Site of the Day - Awwwards Winner. Winner of Hakaton in Salekhard (2019), Finalist of Hakaton VK 2017/19. ',
    portfolioLink: '#',
    contactsLink: '#',
  },
  {
    id: 3,
    avatar: '/img/team/matvey.jpg',
    name: 'Matvey',
    position: 'Back-end developer',
    description:
      'Site of the Day - Awwwards Winner. Winner of Hakaton in Salekhard (2019), Finalist of Hakaton VK 2017/19. ',
    portfolioLink: '#',
    contactsLink: '#',
  },
];

const TeamComponent = () => (
  <Wrapper>
    {team.map((item) => (
      <Member key={item.id} member={item} />
    ))}
  </Wrapper>
);

export const Team = memo(TeamComponent);
