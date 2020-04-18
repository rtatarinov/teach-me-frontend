import React, { memo } from 'react';
import styled from 'styled-components';

const Member = styled.section`
  max-width: 300px;
  font-size: ${({ theme }) => theme.fonts.size.s};
  line-height: ${({ theme }) => theme.fonts.lineHeight.s};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;

const Avatar = styled.div`
  position: relative;
  overflow: hidden;
  width: 69px;
  height: 69px;
  margin-right: 22px;
  border-radius: 50%;
`;

const AvatarValue = styled.img`
  object-fit: cover;
`;

const Name = styled.h2`
  margin: 0 0 5px;
  font-size: ${({ theme }) => theme.fonts.size.m};
  font-weight: ${({ theme }) => theme.fonts.weight.bigMedium};
`;

const Description = styled.div`
  margin-bottom: 15px;
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.a`
  padding: 7px 10px;
  font-weight: ${({ theme }) => theme.fonts.weight.bigMedium};
  color: ${({ theme }) => theme.colors.purple};

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:first-child {
    padding-left: 0;
  }

  &:hover {
    text-decoration: none;
  }
`;

const TeamMemberComponent = ({ member, className }) => {
  const {
    name,
    avatar,
    position,
    description,
    portfolioLink,
    contactsLink,
  } = member;

  return (
    <Member className={className}>
      <Header>
        <Avatar>
          <AvatarValue src={avatar} alt={name} />
        </Avatar>
        <div>
          <Name>{name}</Name>
          <div>{position}</div>
        </div>
      </Header>
      <Description>{description}</Description>
      <Links>
        <Link href={portfolioLink} target="_blank">
          Portfolio
        </Link>
        <Link href={contactsLink} target="_blank">
          Contact
        </Link>
      </Links>
    </Member>
  );
};

export const TeamMember = memo(TeamMemberComponent);
