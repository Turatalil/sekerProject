import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import PriceFilter from "../UI/PriceFilter"
import ColorFilter from "../UI/ColorFilter"
import ManufacturerFilter from "../UI/ManufacturerFilter"
import PhoneCard from '../UI/masiv/PhoneCard'
import styled from 'styled-components'
import Novinki from '../swagger/Novinki'
import PromoSlider from '../swagger/PromoSlider'
const Admin = () => {
    return (
        <div>
            <Header />
            <PromoSlider />
            <Novinki />
            <MainStyle>
                <div>
                    <PriceFilter />
                    <ColorFilter />
                    <ManufacturerFilter />
                </div>
                <div>
                    <PhoneCard />
                </div>
            </MainStyle>
            <Footer />
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
