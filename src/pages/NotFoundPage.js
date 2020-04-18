import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTitle } from 'react-use';
import { PROJECT_NAME, ROUTES } from '@common/constants';
import { Container } from '@components/UI/Container';
import { Header } from '@components/UI/Layout/components/Header';
import { Button } from '@components/UI/Button';

const rocketMovement = keyframes`
  100% {
    transform: translate(1200px, -600px);
  }
`;

const spinEarth = keyframes`
  100% {
    transition: transform 20s;
    transform: rotate(-360deg);
  }
`;

const moveAstronaut = keyframes`
  100% {
    transform: translate(-160px, -160px);
  }
`;

const rotateAstronaut = keyframes`
  100% {
    transform: rotate(-720deg);
  }
`;

const glowStar = keyframes`
  40% {
    opacity: 0.3;
  }

  90%,
  100% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(180deg, #3c2b59 0%, #502e5e 100%);
`;

const Stars = styled.div`
  position: relative;
  height: 100%;
  background-image: url('/img/stars.svg');
  background-repeat: repeat;
  background-position: left top;
  background-size: contain;
`;

const StyledHeader = styled(Header)`
  ${Header.Logo} {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Rocket = styled.img`
  position: absolute;
  top: 75%;
  left: 5vw;
  z-index: ${({ theme }) => theme.zIndex.rocket};
  width: 40px;
  transform: translateX(-50px);
  animation: ${rocketMovement} 200s linear infinite both running;
`;

const Earth = styled.img`
  position: absolute;
  top: 20%;
  left: 15%;
  z-index: ${({ theme }) => theme.zIndex.default};
  width: 100px;
  animation: ${spinEarth} 100s infinite linear both;
`;

const Moon = styled.img`
  position: absolute;
  top: 12%;
  left: 25%;
  width: 80px;
`;

const BoxAstronaut = styled.div`
  position: absolute;
  top: 60%;
  right: 10vw;
  z-index: ${({ theme }) => theme.zIndex.astronaut};
  will-change: transform;
  animation: ${moveAstronaut} 50s infinite linear both alternate;
`;

const Astronaut = styled.img`
  width: 140px;
  animation: ${rotateAstronaut} 200s infinite linear both alternate;
`;

const Star = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  opacity: 0.3;

  &:nth-child(1) {
    top: 80%;
    left: 25%;
    animation: ${glowStar} 2s infinite ease-in-out alternate 1s;
  }

  &:nth-child(2) {
    top: 20%;
    left: 40%;
    animation: ${glowStar} 2s infinite ease-in-out alternate 3s;
  }

  &:nth-child(3) {
    top: 25%;
    left: 25%;
    animation: ${glowStar} 2s infinite ease-in-out alternate 5s;
  }

  &:nth-child(4) {
    top: 75%;
    left: 80%;
    animation: ${glowStar} 2s infinite ease-in-out alternate 7s;
  }

  &:nth-child(5) {
    top: 90%;
    left: 50%;
    animation: ${glowStar} 2s infinite ease-in-out alternate 9s;
  }
`;

const Body = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.colors.white};
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 110px;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Text = styled.div`
  max-width: 470px;
  margin-bottom: 60px;
  font-size: ${({ theme }) => theme.fonts.size.l};
  line-height: 169%;
  text-align: center;
`;

const NotFoundPage = () => {
  useTitle(`Page not found - ${PROJECT_NAME}`);

  return (
    <Wrapper>
      <Stars>
        <Container>
          <StyledHeader />
          <div>
            <Rocket src="/img/rocket.svg" />
            <div>
              <Earth src="/img/earth.svg" />
              <Moon src="/img/moon.svg" />
            </div>
            <BoxAstronaut>
              <Astronaut src="/img/astronaut.svg" />
            </BoxAstronaut>
          </div>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </Container>
        <Body>
          <Title>404</Title>
          <Text>Something went wrong. Looks like this page got lost.</Text>
          <ButtonWrapper>
            <Button to={ROUTES.HOME} bgColor="orange">
              Go back home
            </Button>
          </ButtonWrapper>
        </Body>
      </Stars>
    </Wrapper>
  );
};

export default NotFoundPage;
