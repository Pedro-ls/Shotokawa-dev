import React, { useState } from 'react';
import icon1 from '../../assets/slider/read-icon.png';
import icon2 from '../../assets/slider/Vector.png';
import { Link } from 'react-router-dom';
import { InfoPreview, ModalDescriptionComic } from '../modals';

const MainImage = ({ image, info, setIsTimer }) => {
    const [isOpenModalDescriptionComic, setIsOpenModalDescriptionComic] =
        useState(false);

    const [isOpenModalInfoPreview, setIsOpenModalInfoPreview] = useState(false);
    return (
        <div className="main-image">
            <img className="image" src={image} alt="Main" />
            <div className="image-details">
                <img src={info.image} alt="Título" />
                <p
                    style={{
                        textShadow: '1px 1px 10px black',
                    }}
                >
                    <div>
                        <span
                            style={{
                                textShadow: '-2px 2px 10px lightgray',
                            }}
                        >
                            {String(info.description).slice(0, 300)}
                            {String(info.description).length > 300 && (
                                <span
                                    style={{
                                        color: 'blue',
                                        border: 'none',
                                        background: 'transparent',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        setIsTimer(false);
                                        setIsOpenModalDescriptionComic(true);
                                    }}
                                >
                                    mais...
                                </span>
                            )}
                            <ModalDescriptionComic
                                open={isOpenModalDescriptionComic}
                                setCloseModal={() => {
                                    setIsOpenModalDescriptionComic(false);
                                    setIsTimer(true);
                                }}
                                title={info.name}
                                description={info.description}
                            />
                        </span>
                    </div>
                </p>

                <div className="buttonContainer">
                    <Link
                        to={`/perfilQuadrinho/${info.slug}`}
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <button className="button1">
                            <img src={icon1} alt="icon1" />
                            {info.button1}
                        </button>
                    </Link>

                    <InfoPreview
                        open={isOpenModalInfoPreview}
                        setCloseModal={() => {
                            setIsOpenModalInfoPreview(false);
                            setIsTimer(true);
                        }}
                        description={info.description}
                        authors={info?.authors}
                        category={info?.category}
                        sub_category={info?.sub_category}
                        front_image={info.image_front}
                        editor={info.editor}
                        old_min={info.old_min}
                    />
                    <button
                        className="button2"
                        onClick={() => {
                            setIsTimer(false);
                            setIsOpenModalInfoPreview(true);
                        }}
                    >
                        <img src={icon2} alt="icon2" />
                        {info.button2}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainImage;
