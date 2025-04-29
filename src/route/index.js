import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route/>
            </Routes>
            <Outlet/>
        </div>
    )
}

export default MainRoute