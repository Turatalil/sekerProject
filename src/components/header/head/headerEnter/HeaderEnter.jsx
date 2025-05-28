import { useState } from 'react'
import ImageHeaderVector1Png from "../../../../assets/icon/Vector (1).png"
import styled from 'styled-components'
import ModalEnter from "../../../ModalEnter/ModalEnter"

const HeaderEnter = () => {
    const [showModal, setShowModal] = useState(false)
    const showModalHandler = () => {
        setShowModal(true)
    }
    return (
        <GlobalContainer>
            <img onClick={showModalHandler} src={ImageHeaderVector1Png} alt="" />
            <SpanStyle onClick={showModalHandler}>Войти</SpanStyle>
            {showModal && <ModalEnter setShowModal={setShowModal} />}
        </GlobalContainer>
    )
}

export default HeaderEnter

const GlobalContainer = styled.div`
    width: 91.3px;
    height: 25.5px;
`

const SpanStyle = styled.span`
    cursor: pointer;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #000000;
    position: relative;
    left: 1em;
    top: -3px;
`
