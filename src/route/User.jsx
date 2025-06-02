import HeadUser from '../components/header/head/HeadUser'
import Footer from '../components/footer/Footer'
import PromoSlider from '../swagger/PromoSlider'
import styled from 'styled-components'
import PriceFilter from '../UI/PriceFilter'
import ColorFilter from '../UI/ColorFilter'
import ManufacturerFilter from '../UI/ManufacturerFilter'
import PhoneCard from '../UI/masiv/PhoneCard'
import Nov from '../swagger/Nov'
const User = () => {
    return (
        <div>
            <HeadUser/>
            <PromoSlider/>
            <Nov/>
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

export default User

const MainStyle = styled.div`
    display: flex;
    width: 1170px;
    margin: auto;
    gap: 0px;
`
