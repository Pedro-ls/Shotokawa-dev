import { useState } from 'react';

import {
    CardContainer,
    ButtonsContainer,
    CircleButton,
    Description,
    Genre,
    GenreContainer,
    Title,
} from './styles';

import { BookOpenText, CaretDown, Trash, Plus } from '@phosphor-icons/react';

import Rating from '../../rating/index';
import { Link } from 'react-router-dom';
import { useClientAuth } from '../../../context/client';

const Card = ({
    title,
    genre,
    subgenre,
    image,
    rating,
    slug,
    typeCard,
    actionMyList,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const { auth } = useClientAuth();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            style={{
                width: '160px',
                height: '220px',
            }}
        >
            <CardContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundImage: `url(${image}?token=${auth?.token}&origin=http://localhost:5173)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Description
                    style={{
                        background: `rgba(0, 0, 0, 0.7)`,
                        display: isHovered ? 'inherit' : 'none',
                    }}
                >
                    <Rating rating={rating} />
                    <GenreContainer>
                        <Genre>{genre}</Genre>

                        <Genre variant="subgenre">{subgenre}</Genre>
                    </GenreContainer>
                    <Title>{title}</Title>
                    <ButtonsContainer>
                        <Link to={'/perfilQuadrinho/' + slug}>
                            <CircleButton variant="read">
                                <BookOpenText size={16} />
                            </CircleButton>
                        </Link>

                        {typeCard == 'add' && (
                            <CircleButton variant="plus" onClick={actionMyList}>
                                <Plus color="#000" size={16} />
                            </CircleButton>
                        )}

                        {typeCard == 'remove' && (
                            <CircleButton
                                variant="trash"
                                onClick={actionMyList}
                            >
                                <Trash size={16} />
                            </CircleButton>
                        )}

                        <CircleButton
                            variant="back"
                            style={{
                                gridColumn: 'span 2',
                                justifySelf: 'center',
                            }}
                        >
                            <CaretDown size={18} />
                        </CircleButton>
                    </ButtonsContainer>
                </Description>
            </CardContainer>
        </div>
    );
};

export default Card;
