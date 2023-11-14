import styled from "styled-components";

export const NewContainer = styled.div`
    display: flex;
    align-items: flex-end;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, 
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border-radius: 10px;
    cursor: pointer;
    height: 250px;
    width: 450px;
    transition: height 0.25s, width 0.25s;

    &:hover {
        height: 300px;
        width: 500px;
    }
`;


export const NewHeadlineContainer = styled.div`
    height: auto;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const NewHeadline = styled.span`
    width: 90%;
`;