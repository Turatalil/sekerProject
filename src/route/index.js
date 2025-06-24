import { Route, Routes } from 'react-router-dom';
import User from './User';
import Admin from './Admin';
import PageNotFound from '../pages/PageNotFound';
import PrivateRoute from '../pages/PrivateRoute';
import PhoneAdd from '../pages/PhoneAdd';
import ProductDetail from '../pages/ProductDetails';
const MainRoute = () => {
    return (
        <Routes>
            <Route path="/user" element={<User />} />
            <Route
                path="/admin"
                element={
                    <PrivateRoute>
                        <Admin />
                    </PrivateRoute>
                }
            />
                <Route path="add-phone" element={<PhoneAdd/>}/>
            <Route path="*" element={<PageNotFound />} />
            <Route path='product/:id' element={<ProductDetail/>} />
        </Routes>
    );
};

export default MainRoute;
