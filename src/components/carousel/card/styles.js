import styled from 'styled-components';
import { variant } from '@styled-system/variant';
import { moveUp } from '../../../animations/move/moveUp';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  height: 210px;
  border-radius: 5px;
  transition: width 0.2s ease, height 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  &:hover {
    width: 160px;
    height: 220px;
  }
`;

export const Description = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  animation: ${moveUp} 0.2s forwards;
  height: 100%;
  width: 100%;
`;

export const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Genre = styled('span')(
    {
      fontSize: '0.8rem',
      fontFamily: 'var(--secondary-font)',
      color: '#EAA113',
      fontWeight: 'bold',
      
    },
    variant({
      variants: {
        subgenre: {
          fontSize: '0.7rem',
          fontWeight: 'normal',
          color: '#fff',
          
        },
      }
    })
  )

export const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  text-align: center;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--secondary-font);
  color: #fff;
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const CircleButton = styled('button')(
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      height: '32px',
      width: '32px',
      borderRadius: '50%',
      border: 'none',
      color: '#fff',
      transition: "all 0.3s ease"
      
    },
    variant({
      variants: {
        read: {
          backgroundColor: '#EAA113',

          "&:hover": {
            backgroundColor: '#C48100',
          }
          
        },
        trash: {
          backgroundColor: 'transparent',
          border: '1px solid #fff',

          "&:hover": {
            backgroundColor: '#fff',
            border: '1px solid #000',
            color: '#000',
          }
          
        },
        back: {
          backgroundColor: 'transparent',

        },
      }
    })
  )