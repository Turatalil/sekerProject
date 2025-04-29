import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from '../pages/Header'

const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/Header" element={<Header/>}/>
            </Routes>
            <Outlet/>
        </div>
    )
}

export default MainRoute