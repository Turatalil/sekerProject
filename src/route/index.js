import { Route, Routes } from 'react-router-dom'
import User from './User'
import Admin from './Admin'
import PageNotFound from '../pages/PageNotFound'
import ProductDetail from '../pages/ProductDetails'

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/admin"  element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path='*' element={<PageNotFound/>}/>
            <Route path='product/:id' element={<ProductDetail/>} />
        </Routes>
    )
}

export default MainRoute;
