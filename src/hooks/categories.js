import { useQuery } from 'react-query';
import { endpointsComics } from '../services/comics';

export function useCategories() {
    const query = useQuery(['categories'], endpointsComics.getCategories);
    return {
        categories: query,
    };
}
