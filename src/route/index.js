import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Swagger from '../swagger/Swagger'

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/admin"  element={<><Header /><Swagger /></>}/>
            <Route path="user" />
        </Routes>
    )
}

export default MainRoute
