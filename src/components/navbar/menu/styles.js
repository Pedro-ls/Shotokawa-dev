import styled from 'styled-components';

export const MenuWrapper = styled.div`
    background-color: #1d1d1d;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    width: 80%;
    padding: 0;
    margin: 0;
    flex: 1;
    list-style: none;
    font-family: var(--secondary-font);
`;

export const TitlesContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: stretch;

    justify-content: space-between;
    gap: 1rem;
    padding: 0;
    margin: 0;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #2d2d2d;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }

    &.clicked {
        background-color: #2d2d2d;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
`;
