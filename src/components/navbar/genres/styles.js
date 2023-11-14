import styled from 'styled-components';

export const GenreWrapper = styled.ul`
    background-color: #1d1d1d;
    font-size: 0.7rem;
`;

export const GenreItem = styled.li`
    cursor: pointer;
    display: flex;
    align-items: stretch;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
    padding: 5px;
    margin: 0;

    &:hover {
        background-color: #2d2d2d;
        border-radius: 0.5rem;
    }
`;
