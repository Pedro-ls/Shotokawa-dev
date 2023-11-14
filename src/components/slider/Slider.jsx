import React, { useState, useEffect } from 'react';
import MainImage from './MainImage';
import PreviewList from './PreviewList';

import image1 from '../../assets/slider/Demon-slayer.png';
import image2 from '../../assets/slider/boku.jpg';
import image3 from '../../assets/slider/thumb3.png';
import image4 from '../../assets/slider/mirai.jpg';

import titulo1 from '../../assets/slider/titulo-demon_Slayer.png';
import titulo2 from '../../assets/slider/titulo-boku_no_hero.png';
import titulo3 from '../../assets/slider/titulo do banner.png';
import titulo4 from '../../assets/slider/titulo-mirai_nikki.png';

import './slider.css';
import { useQuery } from 'react-query';
import { endpointsComics } from '../../services/comics';
import { urlImageServer } from '../imagesource';
import { useClientAuth } from '../../context/client';
import { SliderLoading } from '../loadings/comicsLoading';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const { auth } = useClientAuth();
    const [isTimer, setIsTimer] = useState(true);

    const { data, isLoading } = useQuery({
        queryKey: 'recents',
        queryFn: endpointsComics.get_recents,
    });
    const images = data?.map(({ image_back }) => {
        return urlImageServer(image_back, auth?.token);
    });
    console.log(data);
    const imageInfo = data?.map((recent, index) => {
        return {
            image: urlImageServer(recent.image_title, auth?.token),
            description: recent?.description,
            authors: recent?.authors?.map((value) => {
                return { name: value?.name };
            }),
            image_front: urlImageServer(recent?.image_front, auth?.token),
            category: recent?.category,
            editor: recent?.editor,
            old_min: recent?.old_min,
            sub_category: recent?.sub_category,
            slug: recent?.slug,
            button1: 'Ler agora',
            button2: 'Mais Informações',
        };
    });

    useEffect(() => {
        if (isTimer) {
            const timer = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 7000);

            return () => clearInterval(timer);
        }
    }, [isTimer, images]);

    const handlePreviewClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="slider">
            {!isLoading ? (
                <>
                    <MainImage
                        setIsTimer={setIsTimer}
                        image={images[activeIndex]}
                        info={imageInfo[activeIndex]}
                    />
                    <PreviewList
                        images={images}
                        activeIndex={activeIndex}
                        onPreviewClick={handlePreviewClick}
                    />
                </>
            ) : (
                <SliderLoading />
            )}
        </div>
    );
};

export default Slider;
