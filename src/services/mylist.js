import api from './api';
export const endpointsMyList = {
    async getAllMyList() {
        const res = await api.get('/mylist');

        return res.data;
    },
    async addComicMylist(slug) {
        const res = await api.post('/mylist', {
            slug: slug,
        });
        return res.data;
    },
    async deleteComicMylist(slug) {
        const res = await api.post('/mylist/delete', { slug });
        return res.data;
    },
};
