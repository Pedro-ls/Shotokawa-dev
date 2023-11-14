import { useQuery } from 'react-query';
import { endpointsComics } from '../services/comics';
import { useState } from 'react';

export function useEpisodes() {
    function getEpisodes(comic) {
        if (comic) {
            const query = useQuery(['episodes', comic], () =>
                endpointsComics.get_episodes(comic)
            );
            return query;
        }
        return {};
    }

    return {
        getEpisodes,
    };
}

export function useEpisode() {
    function getEpisode(comic, episode) {
        if (comic && episode) {
            let query = useQuery(['episode', comic, episode], () => {
                return endpointsComics.get_episode(comic, episode);
            });
            return query;
        }
        return {};
    }
    return {
        getEpisode,
    };
}
