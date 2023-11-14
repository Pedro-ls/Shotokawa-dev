import React, { useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';

import { endpointsComics } from '../services/comics';
import { useComicsContext } from '../context/comics';

export function useComicsData() {
    const [page, setPage] = useState(1);
    const { search } = useComicsContext();

    const query = useInfiniteQuery(
        'comics',
        ({ pageParam = 1 }) => {
            return endpointsComics.getPrincipalList(pageParam);
        },
        {
            getNextPageParam: (last_page, pages) => {
                const count = pages.map((page) => page.count);
                const max_pages = count[0];
                if (pages.length < max_pages) {
                    return pages.length + 1;
                }
                return undefined;
            },
        }
    );

    const querySearch = useQuery(
        ['comics-search', search],
        endpointsComics.getListByName
    );

    function getAllComics() {
        const data = query?.data?.pages.map((group) =>
            group?.items?.map((value) => value)
        );
        var dataPaginated = [];
        data?.forEach((value) =>
            value.forEach((object) => {
                dataPaginated.push({ ...object });
            })
        );
        return {
            ...query,
            data: dataPaginated,
        };
    }

    function getAllSearch() {
        return querySearch.data;
    }

    return {
        getAllComics,
        getAllSearch,
        comicLoading: query.isLoading,
    };
}
