import styled from 'styled-components';
import Slider from 'react-slick';

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    margin: 0 auto;
    gap: 10px;
    width: 95%;
`;

export const CarouselTitle = styled.h1`
    font-size: 1.5rem;
    font-family: var(--secondary-font);
`;

export const LeftAlignedSlider = styled(Slider)`
    .slick-list {
        display: grid;
        justify-content: flex-start;
        align-items: center;
    }
`;
