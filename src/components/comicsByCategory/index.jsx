import { XCircle } from '@phosphor-icons/react';
import { useMenuWorksSub } from '../../hooks/menu';
import { useComicsByCategory } from '../../hooks/comic-category';
import Card from '../carousel/card';
import { useMyList } from '../../hooks/mylist-data';

export const ComicsByCategory = ({ names_of_mylist }) => {
    const { showCategorySearch, setShowCategorySearch } = useMenuWorksSub();
    const { addMyList, removeMyList } = useMyList();
    const { comics } = useComicsByCategory();

    return (
        <>
            <div
                style={{
                    background: '#231F20',
                    paddingBottom: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    flex: 1,
                }}
            >
                <div>
                    <h3
                        style={{
                            padding: '4px',
                            wordBreak: 'break-word',
                            wordWrap: 'wrap',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'Consolas',
                                fontSize: '14px',
                                background: '#342f30',
                                color: '#fff',
                                padding: '2px 5px',
                                margin: '2px',
                                display: 'inline-flex',
                                borderRadius: '5px',
                            }}
                        >
                            <div
                                style={{
                                    padding: '2px 3px',
                                }}
                            >
                                {showCategorySearch?.param?.work}-
                                {showCategorySearch?.param?.genre}
                            </div>
                            <XCircle
                                color="red"
                                style={{
                                    cursor: 'pointer',
                                    margin: '4px 1px',
                                }}
                                onClick={() => {
                                    setShowCategorySearch({
                                        ...showCategorySearch,
                                        param: {
                                            work: '',
                                            genre: '',
                                        },
                                        active: false,
                                    });
                                }}
                            />
                        </span>
                    </h3>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        padding: '2px',
                    }}
                >
                    {comics?.data?.map((manga, index) =>
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
