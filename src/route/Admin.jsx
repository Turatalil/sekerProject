import React from 'react'
import Header from '../components/header/Header'
import Swagger from "../swagger/Swagger"
import Footer from '../components/footer/Footer'
import PriceFilter from "../UI/PriceFilter"
import ColorFilter from "../UI/ColorFilter"
import ManufacturerFilter from "../UI/ManufacturerFilter"
import PhoneCard from '../UI/masiv/PhoneCard'
import styled from 'styled-components'
import Novinki from '../swagger/Novinki'
const Admin = () => {
    return (
        <div>
            <Header />
            <Swagger />
            <Novinki/>
            <MainStyle>
                <div>
                    <PriceFilter/>
                    <ColorFilter/>
                    <ManufacturerFilter/>   
                </div>
                <div>
                    
                    <PhoneCard/>
                  
                </div>
            </MainStyle>
            <Footer/>
        
        </div>
    )
}

export default Admin;

const MainStyle = styled.div`
    display: flex;
    width: 1170px;
  
    margin: auto;
    gap: 0px;
   
`
