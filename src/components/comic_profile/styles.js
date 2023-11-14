import styled from "styled-components";
import { Button } from "../button/Button";

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    background: #1D1D1D;
    width: 77%;
    height: auto;
    position: absolute;
    right: 0;
    top: 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: #1D1D1D;
    gap: 20px;
    position: fixed;
    padding: 30px;
    border-bottom: 1px solid #707876;
    height: auto;
    width: calc(77% - 40px);
`;

export const SwitchButton = styled(Button)`
    font-family: var(--secondary-font);
    font-size: 14px;
    font-weight: 600;
    border: 1px solid #3e4446 !important;
    padding: 0;
    height: 30px;
    width: 95px;

    &:hover {
        background: #D4900D !important;
        border: none !important;
    }
`;