import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1C1C1C;
    gap: 30px;
    height: 30vh;
    width: 100vw;
    max-width: 100%;
    border-top: 1px solid #3C3C3C;
    font-family: var(--secondary-font);
    font-size: 0.85vw;
    font-weight: 600;
`;

export const Text = styled.p`
  text-align: left;
`;

export const TextLink = styled.a`
  color: var(--terciary-color);
  text-decoration: none;
  font-weight: 200;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

export const TextLinkColumn = styled.td`
  border-right: 1px solid #3C3C3C;
  padding: 0.5px 20px;
`;