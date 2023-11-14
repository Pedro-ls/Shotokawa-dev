import { useQuery } from 'react-query';
import { endpointsComics } from '../services/comics';
import { useMenuWorksSub } from './menu';
import constants from '../constants';
function equalComicWork(value) {
    var key = '';

    const keys = Object.keys(constants.CHOICES_TYPES_OBJECT);
    const values = Object.values(constants.CHOICES_TYPES_OBJECT);

    const index = values.indexOf(value);

    key = keys[index];

    return key;
}

export function useComicsByCategory() {
    const { showCategorySearch } = useMenuWorksSub();

    const query = useQuery(
        [
            'comics-category',
            showCategorySearch.param.work,
            showCategorySearch.param.genre,
        ],
        () =>
            endpointsComics.getComicByCategory(
                equalComicWork(showCategorySearch.param.work),
                showCategorySearch.param.genre
            )
    );

    return {
        comics: query,
    };
}
