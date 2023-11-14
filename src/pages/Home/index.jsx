import Slider from '../../components/slider/Slider';

import { HomeContainer } from './styles';

import { useComicsData } from '../../hooks/comics-data';
import { useMyList } from '../../hooks/mylist-data';
import { useComicsContext } from '../../context/comics';
import { useMenuWorksSub } from '../../hooks/menu';
import { ListComics } from '../../components/listComic';
import { SearchComics } from '../../components/searchComics';
import { ComicsByCategory } from '../../components/comicsByCategory';
import Footer from '../../components/footer';
import { ComicLoading } from '../../components/loadings/comicsLoading';
const Home = () => {
    const { getAllComics, getAllSearch, comicLoading } = useComicsData();
    const { isSearching, search } = useComicsContext();
    const { getAllMyList } = useMyList();
    const { showCategorySearch } = useMenuWorksSub();

    const mylist = getAllMyList()?.comics || [];
    const names_of_mylist = mylist.map((value) => {
        return value.name;
    });

    const { data, isFetched, isFetchingNextPage, hasNextPage, fetchNextPage } =
        getAllComics();

    const comics = data?.filter((value) => {
        if (names_of_mylist.includes(value.name)) {
            return false;
        }
        return true;
    });

    const searchcomics = getAllSearch();

    return (
        <>
            <HomeContainer>
                <Slider />

                {isSearching ? ( // session by name
                    <SearchComics
                        searchcomics={searchcomics}
                        names_of_mylist={names_of_mylist}
                        search={search}
                    />
                ) : showCategorySearch.active ? ( // session list by work and gennes
                    <ComicsByCategory names_of_mylist={names_of_mylist} />
                ) : (
                    // principal list
                    <>
                        {comicLoading == true ? (
                            <ComicLoading />
                        ) : (
                            <ListComics comics={comics} mylist={mylist} />
                        )}
                    </>
                )}
            </HomeContainer>
            <Footer />
        </>
    );
};

export default Home;
