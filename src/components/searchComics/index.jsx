import { useMyList } from '../../hooks/mylist-data';
import Card from '../carousel/card';

export const SearchComics = ({ searchcomics, names_of_mylist, search }) => {
    const { addMyList, removeMyList } = useMyList();
    return (
        <>
            <div
                style={{
                    background: '#231F20',
                    paddingBottom: '50px',
                    height: '100%',
                    width: '100%',
                }}
            >
                <h3
                    style={{
                        padding: '4px',
                        wordBreak: 'break-word',
                        wordWrap: 'wrap',
                    }}
                >
                    Pesquisado foi: {search}
                </h3>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        padding: '2px',
                    }}
                >
                    {searchcomics?.map((manga, index) =>
                        names_of_mylist.includes(manga.name) ? (
                            <Card
                                key={index}
                                title={manga.name}
                                genre={'teste'}
                                subgenre={'teste'}
                                image={
                                    'http://localhost:8000' +
                                    manga.image_front_book
                                }
                                rating={manga.old_min}
                                slug={manga.slug}
                                typeCard="remove"
                                actionMyList={() => {
                                    removeMyList(manga.slug);
                                }}
                            />
                        ) : (
                            <Card
                                key={index}
                                title={manga.name}
                                genre={'teste'}
                                subgenre={'teste'}
                                image={
                                    'http://localhost:8000' +
                                    manga.image_front_book
                                }
                                rating={manga.old_min}
                                slug={manga.slug}
                                typeCard="add"
                                actionMyList={() => {
                                    addMyList(manga.slug);
                                }}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    );
};
