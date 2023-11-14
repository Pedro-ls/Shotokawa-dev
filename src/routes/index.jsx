import { PrivateRoutes } from './private';
import { PublicRoutes } from './public';

const routes = () => {
    return (
        <>
            <PublicRoutes />
            <PrivateRoutes />
        </>
    );
};

export default routes;
