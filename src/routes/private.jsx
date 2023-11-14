import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';
import Home from '../pages/Home';
import Leitura from '../pages/Leitura';
import PerfilQuadrinho from '../pages/PerfilQuadrinho';
import { useClientAuth } from '../context/client';
import { useCallback } from 'react';
import { urlImageServer } from '../components/imagesource';
import { HomeLoading } from '../components/loadings/comicsLoading';

export const PrivateRoutes = () => {
    let { auth, loadPage } = useClientAuth();

    const MiddlewarePrivateRoute = useCallback(({ children }) => {
        if (!loadPage) return <HomeLoading />;

        if (auth?.client?.payment == false)
            return <Navigate replace={true} to={'/buy'} />;

        return children;
    });

    return (
        <MiddlewarePrivateRoute>
            {auth?.client && (
                <Navbar
                    accountName={auth?.client?.name ?? 'Usuario Indefinido'}
                    accountProfile={
                        urlImageServer(auth?.client?.photo, auth?.token) ??
                        'https://i.pinimg.com/550x/a7/ca/c8/a7cac881fd48a174ff466fd2c3d11ab1.jpg'
                    }
                />
            )}

            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/leitura" element={<Leitura />} />
                <Route
                    exact
                    path="/perfilQuadrinho/:comic"
                    element={<PerfilQuadrinho />}
                />
            </Routes>
        </MiddlewarePrivateRoute>
    );
};
