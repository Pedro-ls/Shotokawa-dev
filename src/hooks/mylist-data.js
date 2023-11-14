import { useMutation, useQuery } from 'react-query';
import { endpointsMyList } from '../services/mylist';

export function useMyList() {
    const query = useQuery('mylist', endpointsMyList.getAllMyList);
    const mutationAdd = useMutation(endpointsMyList.addComicMylist, {
        onSuccess: (data, variables, context) => {
            // Boom baby!
            query.refetch();
        },
    });
    const mutationDelete = useMutation(endpointsMyList.deleteComicMylist, {
        onSuccess: (data, variables, context) => {
            // Boom baby!
            query.refetch();
        },
    });
    function addMyList(slug) {
        mutationAdd.mutate(slug);
    }
    function getAllMyList() {
        return query.data;
    }
    function removeMyList(slug) {
        mutationDelete.mutate(slug);
    }
    return { getAllMyList, addMyList, removeMyList };
}
