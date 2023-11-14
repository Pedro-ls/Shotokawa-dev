import styled from 'styled-components';

export const Sidebar = styled.aside`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #2F2E2E;
    width: 20%;
    height: 100%;
    position: fixed; 
    top: 0; 
    right: 0; 
    overflow-y: auto;
`;

export const Title = styled.h4`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
    position: sticky;
    top: 0; 
    background: #2F2E2E; 
    z-index: 1;
    padding-top: 20px;
`;

export const Sugestao = styled.img`
    width: 140px;
    height: 190px;
    margin-bottom: 40px;
`;

export const SugestaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: calc(100% - 90px); 
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0px; /* Largura da barra de rolagem */
    }

`;