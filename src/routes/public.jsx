import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Presentation from '../pages/Presentation';
import BuyPage from '../pages/Buy';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Presentation />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/buy" element={<BuyPage />} />
        </Routes>
    );
};
