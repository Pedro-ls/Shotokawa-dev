import { styled } from 'styled-components';
import { Button as ButtonExtend } from '../../components/button/Button';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin-block: 4px;
    border-radius: 2%;
    border: 2px solid #ee7825;

    padding: 10px 8px;
    &:hover {
        box-shadow: 6px 2px 20px #ee7825;
    }
`;

const Text = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Button = styled(ButtonExtend)`
    background-color: #ee7825;
    border-color: #ee7825;
    margin-block: 2px;
`;

export default {
    Text,
    Card,
    Button,
};
