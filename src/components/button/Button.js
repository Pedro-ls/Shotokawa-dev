import styled from 'styled-components';
import variant from '@styled-system/variant';

export const Button = styled('button')(
  {
    borderRadius: "5px",
    height: "auto",
    width: "auto",
    transition: "all 0.3s ease",
    fontSize: "16px",
    padding:"10px 40px",
  },
  variant({
    variants: {
      primary: {
        border: '2px solid var(--primary-color)',
        color: 'var(--terciary-color)',
        bg: 'var(--primary-color)',

        "&:hover": {
          color: 'var(--primary-color)',
          bg: 'transparent',
        }
      },
      secondary: {
        border: "none",
        color: 'var(--primary-color)',
        bg: 'rgba(0, 0, 0, 0.3)',

        "&:hover": {
          bg: 'var(--secondary-color)',
        }
      },
    }
  })
)