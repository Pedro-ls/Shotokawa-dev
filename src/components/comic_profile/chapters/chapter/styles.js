import styled from "styled-components";

export const ChapterContainer = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    font-family: var(--secondary-font);
    background-color: #1D1D1D;
    border-bottom: 1px solid rgb(62, 68, 70);
    gap: 1.5rem;
    align-items: center;
    padding: 1rem;
    height: auto;
    width: 100%;

    &:hover {
        background-color: #232323        ;
        transition: 0.3s;
    }
`;