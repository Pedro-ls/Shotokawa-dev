import { useState } from 'react';
import { useQuery } from 'react-query';
import { endpointsComics } from '../services/comics';

export function useComic() {
    function getOne(slugFromComic) {
        const queryComicOne = useQuery(['comic', slugFromComic], () =>
            endpointsComics.getOneComicBySlug(slugFromComic)
        );
        return queryComicOne;
    }
    return {
        getOne,
    };
}

export function useReaction(comic) {
    const [action, setAction] = useState();
    const [reaction, setReaction] = useState();
    const query = useQuery({
        queryKey: ['reacts', comic, action, reaction],
        queryFn: () => endpointsComics.reacts(comic, action, reaction),
    });
    function like_fn() {
        setAction('add');
        setReaction('like');
        query.refetch();
    }
    function dislike_fn() {
        setAction('add');
        setReaction('dislike');
        query.refetch();
    }
    function remove_like_fn() {
        setAction('delete');
        setReaction('like');
        query.refetch();
    }
    function remove_dislike_fn() {
        setAction('delete');
        setReaction('dislike');
        query.refetch();
    }

    function change_like() {
        setAction('change');
        setReaction('like');
        query.refetch();
    }
    function change_dislike() {
        setAction('change');
        setReaction('dislike');
        query.refetch();
    }

    return {
        like_fn,
        dislike_fn,
        change_like,
        change_dislike,
        remove_dislike_fn,
        remove_like_fn,
        setReaction,
        reaction,
        likes: query,
    };
}

export function useFavorite(comic) {
    const [action, setAction] = useState('read');

    const query = useQuery({
        queryKey: ['favorites', comic, action],
        queryFn: () => endpointsComics.favorites(comic, action),
    });

    function toggle() {
        setAction('apply');
        query.refetch();
    }

    return {
        toggle,
        favorites: query,
    };
}

export function useNotices(comic) {
    const query = useQuery({
        queryKey: ['notices', comic],
        queryFn: () => endpointsComics.notices(comic),
    });

    return {
        notices: query,
    };
}
