// import { Route, Routes } from 'react-router-dom';
// import User from './User';
// import Admin from './Admin';
// import PageNotFound from '../pages/PageNotFound';
// import PrivateRoute from '../pages/PrivateRoute';
// import PhoneAdd from '../pages/PhoneAdd';
// import ProductDetail from '../pages/ProductDetails';
// import ProductDetailAdmin from '../pages/ProductDetilsAdmin';

// const MainRoute = () => {
//     return (
//         <Routes>
//             <Route path="/user" element={<User />} />
//             <Route
//                 path="/admin"
//                 element={
//                     <PrivateRoute>
//                         <Admin />
//                     </PrivateRoute>
//                 }
//             />
//             <Route
//                 path="/admin/product/:id"
//                 element={
//                     <PrivateRoute>
//                         <ProductDetailAdmin />
//                     </PrivateRoute>
//                 }
//             />
//             <Route path="add-phone" element={<PhoneAdd />} />
//             <Route path="product/:id" element={<ProductDetail />} />
//             <Route path="*" element={<PageNotFound />} />
//         </Routes>
//     );
// };

// export default MainRoute;
import { Route, Routes, Navigate } from 'react-router-dom';
import User from './User';
import Admin from './Admin';
import PageNotFound from '../pages/PageNotFound';
import PrivateRoute from '../pages/PrivateRoute';
import PhoneAdd from '../pages/PhoneAdd';
import ProductDetail from '../pages/ProductDetails'
import ProductDetailAdmin from '../pages/ProductDetilAdmin'

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/user" />} />

            <Route path="/user" element={<User />} />
            <Route
                path="/admin"
                element={
                    <PrivateRoute>
                        <Admin />
                    </PrivateRoute>
                }
            />
            <Route
                path="/admin/product/:id"
                element={
                    <PrivateRoute>
                        <ProductDetailAdmin/>
                    </PrivateRoute>
                }
            />
            <Route path="add-phone" element={<PhoneAdd />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default MainRoute;
