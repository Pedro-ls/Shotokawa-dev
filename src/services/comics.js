import api from './api';
export const endpointsComics = {
    async getPrincipalList(id) {
        const res = await api.get(`/comics?page=${id}`);
        return res?.data;
    },
    async getOneComicBySlug(slug = '') {
        const res = await api.get(`/comics/${slug}/info`);
        return res?.data;
    },

    async getListByName(ObjectQueryKey) {
        const name = ObjectQueryKey.queryKey[1];
        const res = await api.get(`/comics/${name}`);
        return res?.data;
    },
    async getCategories() {
        const res = await api.get(`/comics/categories`);
        return res?.data;
    },
    async getComicByCategory(work, genre) {
        if (work && genre) {
            const res = await api.get(
                `/comics/works/${work}/categories/${genre}`
            );
            return res?.data;
        } else return [];
    },
    async get_episodes(name) {
        if (name) {
            const res = await api.get(`/comics/${name}/episodes`);
            return res?.data;
        }
        return [];
    },
    async get_episode(comic, episode) {
        if (comic && episode) {
            const res = await api.get(`/comics/${comic}/episodes/${episode}`);
            return res?.data;
        }
        return [];
    },

    async get_recents() {
        const res = await api.get(`/comics/recents_comics`);
        return res?.data;
    },

    async reacts(comic = '', action = 'read', reaction = 'see') {
        if (comic && action && reaction) {
            const res = await api.get(
                `/comics/reacts/${comic}/${action}/${reaction}`
            );
            return res?.data;
        }
        return {};
    },
    async favorites(comic = '', action = 'read') {
        if (comic && action) {
            const res = await api.get(`/comics/${comic}/favorites/${action}`);
            return res?.data;
        }
        return {};
    },
    async notices(comic = '') {
        if (comic) {
            const res = await api.get(`/comics/${comic}/notices`);
            return res?.data;
        }
        return {};
    },
};
