import axios from 'axios';
import { useTokenLocalStorage } from '../hooks/localstorage';
import constants from '../constants';

const api = axios.create({
    baseURL: `${constants.SERVER_URL}/v1/api`,
});

api.interceptors.request.use((request) => {
    try {
        const [token, _] = useTokenLocalStorage();

        if (Boolean(token)) {
            request.headers.Authorization = `Bearer ${token}`;
        }
    } catch (error) {
        console.error('Erro na requisição');
    } finally {
        return request;
    }
});

api.interceptors.response.use((response) => {
    try {
        if (response.status == 200) {
            console.log('Resposta bem sucedida');
        } else if (response.status == 400) {
            console.log('Resposta mal sucedida');
        } else if (response.status == 500) {
            console.log('Erro no servidor');
        } else {
            console.log('erro aleatorio, notificar a plataforma');
        }
    } catch (error) {
        console.error('Erro na requisição');
    } finally {
        return response;
    }
});

export default api;
