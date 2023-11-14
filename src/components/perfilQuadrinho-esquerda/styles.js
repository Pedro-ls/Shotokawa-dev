import styled from 'styled-components';

export const Sidebar = styled.aside`
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    background: #000;
    width: 23%;
    height: 100%;
    position: fixed;
    left: 49px;
    padding-top: 25px;
    border-right: solid 3px #2f2e2e;
`;

export const Quadrinho = styled.div`
    position: relative;
    width: 90%;
    height: 380px;
`;

export const InfoQuadrinho = styled.div`
    position: relative;
    bottom: 70px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    width: 90%;
    height: 110px;
`;

export const Botao = styled.button`
    display: flex;
    background-color: #21252b;
    padding: 2px;
    margin-right: 10px;
    border-radius: 20px;
    border: none;
    align-items: center;
    justify-content: center;
    height: auto;
    width: auto;
    font-family: Arial, Helvetica, sans-serif;

    &:hover {
        transition: all 0.3s ease;
        background-color: #2f353e;
    }
`;

export const BotaoLeitura = styled.button`
    background-color: #bb800e;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding: 10px;
    font-size: 16px;
    margin-top: 40px;
    border-radius: 2px;

    &:hover {
        transition: all 0.3s ease;
        background-color: #eaa012;
    }
`;
