import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from './User'
import Admin from './Admin'
import PageNotFound from '../pages/PageNotFound'

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/admin"  element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}

export default MainRoute
