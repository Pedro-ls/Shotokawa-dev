import styled from 'styled-components';

const Container = styled.section`
    padding: 4px 6px;
    margin: 4px;
    display: flex;
    flex-direction: column;
    color: white;

    background: #090808;
    border-radius: 4px;
`;
const Text = styled.p`
    padding: 1px;
    font-size: 14pt;
`;
const Heading = styled.p`
    display: flex;
    justify-content: space-between;
    background: #080604;
    border-bottom: 1ṕx solid darkgray;
    padding: 5px;
    font-weight: 600;
    font-size: 18pt;
`;
const Icon = styled.div`
    text-align: center;
    border: 2px solid transparent;
    padding: 4px 2px;
    font-size: 16pt;
`;

export const ErrorStyled = {
    Container,
    Text,
    Icon,
    Heading,
};
