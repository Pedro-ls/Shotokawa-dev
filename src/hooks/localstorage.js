// Client Functions LocalStorage Token
const setTokenLocalstorage = (token) => {
    localStorage.setItem('shotokawa:api@token', token);
};

const getTokenLocalstorage = () => {
    return localStorage.getItem('shotokawa:api@token');
};
// Client Functions LocalStorage Client
const setClientLocalstorage = (client) => {
    localStorage.setItem('shotokawa:api@u', JSON.stringify(client));
};

const getClientLocalstorage = () => {
    try {
        const client = JSON.parse(localStorage.getItem('shotokawa:api@u'));
        return client;
    } catch (error) {
        throw Exception('Não foi possivel passear cliente');
    }
};

const clearLocalStorage = () => {
    try {
        localStorage.removeItem('shotokawa:api@u');
        localStorage.removeItem('shotokawa:api@token');
        return true;
    } catch (error) {
        throw Exception('Não foi possivel agar do localstorage');
    }
};

// Hooks
export const useClientLocalStorage = () => {
    return [getClientLocalstorage(), setClientLocalstorage];
};
export const useTokenLocalStorage = () => {
    return [getTokenLocalstorage(), setTokenLocalstorage];
};

export function useLocalStorage() {
    return {
        clearLocalStorage,
    };
}
