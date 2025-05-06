import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from './User'
import Admin from './Admin'

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/admin"  element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
        </Routes>
    )
}

export default MainRoute
