import React, { useEffect, useRef } from 'react';

import { CarouselContainer, CarouselTitle, LeftAlignedSlider } from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ children, title }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 250,
        slidesToShow: 7.79,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5.925,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4.925,
                },
            },
            {
                breakpoint: 875,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };

    return (
        <CarouselContainer>
            <CarouselTitle>{title}</CarouselTitle>

            <LeftAlignedSlider
                slickNext={(context) => {
                    console.log(context);
                }}
                {...settings}
            >
                {children}
            </LeftAlignedSlider>
        </CarouselContainer>
    );
};

export default Carousel;
