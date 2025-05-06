import React from 'react'
import Swagger from "../swagger/Swagger"
import HeadUser from '../components/header/head/HeadUser'
import Footer from '../components/footer/Footer'
const User = () => {
    return (
        <div>
            <HeadUser/>
            <Swagger/>
            <Footer/>
        </div>
    )
}

export default User