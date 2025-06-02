import AddPhone from "../components/addPhone/AddPhone"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import DannieTowara from "../swagger/DannieTowara"
import PhotoUpLoader from "../UI/PhotoUpLoader/PhotoUpLoader"
const PhoneAdd = () => {
    return (
        <div>
            <Header />
            <DannieTowara/>
            <PhotoUpLoader/>
            <AddPhone/>
            <Footer/>
        </div>
    )
}

export default PhoneAdd