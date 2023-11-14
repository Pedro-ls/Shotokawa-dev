import styled from "styled-components";

export const AuthorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const AuthorName = styled.h2`
    font-family: var(--secondary-font);
    font-size: 1rem;
`;

export const AuthorPhoto = styled.img`
    width: 250px;
    height: 250px;
`;