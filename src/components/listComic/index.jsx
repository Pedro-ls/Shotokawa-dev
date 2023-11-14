import { useEffect } from 'react';
import { useMyList } from '../../hooks/mylist-data';
import { CarouselsContainer } from '../../pages/Home/styles';
import Card from '../carousel/card';
import Carousel from '../carousel/slider';

export const ListComics = ({ mylist, comics }) => {
    const { addMyList, removeMyList } = useMyList();

    return (
        <CarouselsContainer>
            <Carousel title="Minha lista">
                {mylist?.map((manga, index) => (
                    <Card
                        key={index}
                        title={manga.name}
                        genre={manga.category}
                        subgenre={'falta'}
                        image={'http://localhost:8000' + manga.image}
                        rating={manga.old_min}
                        slug={manga.slug}
                        typeCard="remove"
                        actionMyList={() => {
                            removeMyList(manga.slug);
                        }}
                    />
                ))}
            </Carousel>
            <Carousel title="Continuar lendo">
                {comics?.map((manga, index) => (
                    <Card
                        key={index}
                        title={manga.name}
                        genre={manga.category}
                        subgenre={manga.sub_category}
                        image={'http://localhost:8000' + manga.image_front_book}
                        rating={manga.old_min}
                        slug={manga.slug}
                        typeCard="add"
                        actionMyList={() => {
                            addMyList(manga.slug);
                        }}
                    />
                ))}
            </Carousel>
        </CarouselsContainer>
    );
};
