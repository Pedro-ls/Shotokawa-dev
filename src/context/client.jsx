import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    useClientLocalStorage,
    useLocalStorage,
    useTokenLocalStorage,
} from '../hooks/localstorage';
import { endpoinsClient } from '../services/client';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import { useToast } from 'react-toastify';

const clientContext = createContext({});

export const ClientAuthContext = ({ children }) => {
    const [state_token, setStateToken] = useState();
    const [state_client, setStateClient] = useState();
    const located = useLocation();

    const [isClientAuthentication, setIsClientAuthentication] = useState(false);
    const [ls_token, setLsToken /* ls = localstrorage */] =
        useTokenLocalStorage();
    const [ls_client, setLsClient /* ls = localstrorage */] =
        useClientLocalStorage();
    const [loadPage, setLoadPage] = useState(false);
    const { clearLocalStorage } = useLocalStorage();
    const toast = useToast({
        data: 'teste',
    });

    const navigate = useNavigate();

    const routes_pub = ['/', '/login', '/register', '/buy'];
    const [prm] = useSearchParams();

    useEffect(() => {
        if (Boolean(ls_token)) {
            const date = new Date();
            const data = jwt_decode(ls_token);

            if (new Date(data.exp).getTime() * 1000 < date.getTime()) {
                clearLocalStorage();
                navigate('/login');
            }
            setStateToken(ls_token);
            setIsClientAuthentication(true);
            setStateClient(ls_client);
        }
        setLoadPage(true);
    }, []);

    useEffect(() => {
        if (loadPage) {
            console.log('teste');
            if (isClientAuthentication == false) {
                if (routes_pub.find((value) => located.pathname == value)) {
                    return navigate(located.pathname);
                } else {
                    return navigate(
                        `/login?next=${
                            located.pathname
                        }${located.search.replace('&', '(AND)')}`
                    );
                }
            } else {
                if (routes_pub.find((value) => located.pathname == value)) {
                    return navigate(located.pathname);
                }

                if (prm.get('next')) {
                    const next_route = String(
                        prm.get('next').toString()
                    ).replace('(AND)', '&');
                    return navigate(next_route);
                } else {
                    if (located.pathname != '/home') {
                        const searchParams = located?.search.toString();
                        const search = searchParams.replace('(AND)', '&');

                        const next_route = `${located.pathname}${search}`;

                        return navigate(next_route);
                    } else {
                        return navigate('/home');
                    }
                }
            }
        }
    }, [loadPage]);

    const login = async ({ email, password }) => {
        const data = await endpoinsClient.login(email, password);

        if (!!!data?.token)
            return { message: 'Não foi possivel acessar token' };
        if (!!!data?.user)
            return { message: 'Não foi possivel acessar o usuário' };

        // Set token
        setLsToken(data?.token);
        setStateToken(data?.token);
        // Set UserClient
        setLsClient(data?.user);
        setStateClient(data?.user);

        // LogIn Client System
        setIsClientAuthentication(true);

        console.log('chegou');

        if (prm.get('next')) {
            return navigate(prm.get('next').replace('(AND)', '&'));
        } else {
            return navigate('/home');
        }
    };

    const logout = () => {};

    return (
        <clientContext.Provider
            value={{
                login,
                logout,
                isClientAuthentication,
                loadPage,
                auth: {
                    client: state_client,
                    token: state_token,
                    loadPage,
                },
            }}
        >
            {children}
        </clientContext.Provider>
    );
};

export function useClientAuth() {
    return useContext(clientContext);
}
