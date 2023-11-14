import { useState, useEffect } from 'react';

import { MenuWrapper, TitlesContainer } from './styles';

import { GenreWrapper, GenreItem } from '../genres/styles';

import { CaretRight } from '@phosphor-icons/react';

import * as works from '../../../database/works.json';
import * as genres from '../../../database/genres.json';
import { useMenuWorksSub } from '../../../hooks/menu';
import { useComicsContext } from '../../../context/comics';
import { useCategories } from '../../../hooks/categories';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(Array(works.works.length).fill(false));
    const [dropdownY, setDropdownY] = useState(null);

    const [isClicked, setIsClicked] = useState(
        Array(works.works.length).fill(false)
    );

    const { work, setWork, setShowCategorySearch, showCategorySearch } =
        useMenuWorksSub();

    const openMenu = (index, openedWork, event) => {
        const rect = event.target.getBoundingClientRect();
        setWork(openedWork);

        setDropdownY(rect.top - 100);

        const newIsOpen = Array(works.works.length).fill(false);
        newIsOpen[index] = true;

        setIsOpen(newIsOpen);

        const newIsClicked = Array(works.works.length).fill(false);
        newIsClicked[index] = true;
        setIsClicked(newIsClicked);
    };

    useEffect(() => {
        const closeDropdown = () => {
            setIsOpen(Array(works.works.length).fill(false));
            setIsClicked(Array(works.works.length).fill(false));
        };

        document.body.addEventListener('click', closeDropdown);

        return () => {
            document.body.removeEventListener('click', closeDropdown);
        };
    }, []);

    const { categories } = useCategories();
    return (
        <>
            <MenuWrapper>
                {works.works.map((work, index) => (
                    <div
                        key={index}
                        style={{
                            width: '100%',
                        }}
                    >
                        <TitlesContainer
                            onClick={(event) => {
                                event.stopPropagation();
                                openMenu(index, work, event);
                            }}
                            className={isClicked[index] ? 'clicked' : ''}
                        >
                            <span>{work}</span>
                            <div>
                                <CaretRight size={20} />
                            </div>
                        </TitlesContainer>

                        {isOpen[index] && (
                            <GenreWrapper
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '15px',
                                    position: 'fixed',
                                    padding: '20px',
                                    left: `13%`,
                                    top: `${dropdownY}px`,
                                    zIndex: 1000,
                                    maxHeight: '300px',
                                    overflowY: 'auto',
                                }}
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                            >
                                {categories.data.map((genre, index) => (
                                    <GenreItem
                                        key={index}
                                        onClick={() => {
                                            setShowCategorySearch({
                                                ...showCategorySearch,
                                                active: true,
                                                param: {
                                                    work,
                                                    genre: genre.type,
                                                },
                                            });
                                        }}
                                    >
                                        <span>{genre.type}</span>
                                    </GenreItem>
                                ))}
                            </GenreWrapper>
                        )}
                    </div>
                ))}
            </MenuWrapper>
        </>
    );
};

export default Menu;
