import { Route, Routes } from 'react-router-dom'
import User from './User'
import Admin from './Admin'
import PageNotFound from '../pages/PageNotFound'
import ProductDetail from '../pages/ProductDetails'
import ProductDetaislAdmin from '../pages/ProductDetilsAdmin'

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/admin"  element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path='*' element={<PageNotFound/>}/>
            <Route path='product/:id' element={<ProductDetail/>} />
            <Route path='productt' element={<ProductDetaislAdmin/>}/>
        </Routes>
    )
}

export default MainRoute;
