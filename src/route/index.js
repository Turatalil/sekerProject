import { Route, Routes } from 'react-router-dom';
import User from './User';
import Admin from './Admin';
import PageNotFound from '../pages/PageNotFound';
import PrivateRoute from '../pages/PrivateRoute';
const MainRoute = () => {
    return (
        <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route
                path="/user"
                element={
                    <PrivateRoute>
                        <User />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default MainRoute;
