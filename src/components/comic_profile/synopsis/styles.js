import styled from "styled-components";

export const GeneralContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    align-self: flex-start;
    padding-top: 120px;
    height: auto;
    width: calc(80% - 10%);
`;

export const SynopsisContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: var(--secondary-font);
    gap: 20px;
    height: auto;
    width: 90%;
    margin-bottom: 50px;
`;

export const GeneralInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-top: 50px;
    width: 90%;
`;

export const Title = styled.h3`
    font-family: var(--primary-font);
    font-size: 1.25rem;
`;

export const Subtitle = styled.span`
    font-family: var(--secondary-font);
    font-size: 1rem;
    font-weight: 800;
`;

export const Text = styled.p`
    font-size: 1rem;
    font-family: var(--secondary-font);
    text-align: justify;
`;

export const Subtext = styled.span`
    font-size: 1rem;
    font-family: var(--secondary-font);
    font-weight: 400;
`;

export const Publisher = styled.img``;

export const AuthorsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
    width: auto;
    height: auto;
`;