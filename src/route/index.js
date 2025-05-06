import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Swagger from '../swagger/Swagger'
import UserPage from '../pages/UserPage'


const MainRoute = () => {
    return (
        <Routes>
            <Route path="/admin"  element={<><Header /><Swagger /></>}/>
            <Route path="/user" element={<UserPage/>}/>
        </Routes>
    )
}

export default MainRoute
