import api from './api';

export const endpoinsClient = {
    async login(email, password) {
        const result = await api.post('/accounts/login', {
            email,
            password,
        });

        return result.data;
    },
    async register({ name, email, password, confirm_password }) {
        if (name && email && password && confirm_password) {
            const result = await api.post('/accounts/register', {
                name,
                email,
                password,
                confirm_password,
            });
            return result.data;
        }
        return null;
    },
};
