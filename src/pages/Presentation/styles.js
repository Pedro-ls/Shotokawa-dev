import styled from 'styled-components';

import { fadeIn } from '../../animations/fade/FadeIn';
import { moveUpDown } from '../../animations/move/MoveUpDown';

import { Button } from '../../components/button/Button';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  max-width: 100%;
`;

export const LoginButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 5.5vh;
  width: 10vw;
  font-size: 1.2vw;
  padding: 0;
`;

export const Title = styled.h1`
  font-size: 4.5vw;
  text-align: left;
  color: var(--primary-color);
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const ScrollButton = styled.button`
  position: absolute;
  bottom: 20px;
  border: 2px solid var(--terciary-color);
  width: 70px;
  height: 70px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: ${moveUpDown} 1s infinite;
  transition: all 0.3s ease;

  &:hover {
    border: 2px solid var(--primary-color);
    background: var(--secondary-color);
  }

  @media(min-width: 1440px) {
    width: 80px;
    height: 80px;
  }

  @media(min-width: 2000px) {
    width: 120px;
    height: 120px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 3vw;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.5vw;
  text-align: left;
`;

export const ImageContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 55%;
  height: 100%;
`;

export const FiguresContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
`;

export const FigureTextContainer = styled.div`
  background: ${({ selected }) => selected ? 'var(--primary-color)' : 'var(--terciary-color)'};
  border-bottom: 1px solid #666666;
  color: ${({ selected }) => (selected ? 'var(--terciary-color)' : '#666666')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0 5% 0 15%;
  width: 100%;
  height: 25%;
  cursor: pointer;
`;

export const FigureText = styled.p`
  font-size: 1vw;
  font-family: var(--secondary-font);
  font-weight: 600;
  text-align: left;
`;

export const Footer = styled(Wrapper)`
  height: 34vh;
  background: #1b1b1e;
  flex-direction: column;
  justify-content: space-between;
  padding: 2vw 0;
`;

export const TextLink = styled.a`
  color: var(--terciary-color);
  text-decoration: none;
  font-size: 1vw;
  font-weight: 200;
  font-family: var(--secondary-font);
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

export const TextLinkColumn = styled.td`
  border-right: 1px solid #3C3C3C;
  padding: 0.5px 20px;
`;