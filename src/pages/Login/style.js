import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 87vh;
  background-image: url('./src/assets/cover.png');
  background-size: cover;
  padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const LoginHeader = styled.header`
  background-color: var(--secondary-color);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 100px;
  height: 13vh;
  
`;

export const Logo = styled.img`
  width: 200px;
  height: 100px;
  margin-left: -10px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 30px;
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 40px;
`;

export const LoginTitle = styled.div`
  font-size: 27px;
  margin-bottom: 30px;
  margin-top: 20px;
  color: var(--primary-color);
  margin-right: 205px;
  margin-left: 10px;
  font-family: 'Courier New', Courier, monospace;
`;

export const RememberCredentials = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  font-family: 'Courier New', Courier, monospace;
`;

export const RememberCheckbox = styled.input`
  margin-right: 5px;
`;

export const RememberLabel = styled.label`
  color: var(--terciary-color);
  font-size: 16px;
`;

export const RememberPassword = styled.label`
  color: var(--terciary-color);
  font-size: 16px;
  font-family: Courier, monospace;
  cursor: pointer;
  transition: all 0.2s ease;
  

  &:hover {
    color: var(--primary-color);
  }
`; 

export const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 0;
  margin-left: 70px;
  width: 600px;
`;

export const SloganTitle = styled.div`
  font-size: 60px;
  font-family: var(--primary-font);
  flex-wrap: wrap;
  color: var(--primary-color);
`;
