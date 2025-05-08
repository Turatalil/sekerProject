import React, { useState } from 'react'
import ImageHeaderVector1Png from "../../../../assets/icon/Vector (1).png"
import styled from 'styled-components'
import ModalEnter from "../../../ModalEnter/ModalEnter"
const HeaderEnter = () => {
    const [showModal, setShowModal] = useState(false)
    const showModalHandler = ()=> {
        setShowModal(true) 
        document.body.style.overflow = "hidden"
        document.body.style.paddingRight = "15px"
    }
    return (
        <GlobalContainer>
            <img onClick={showModalHandler} src={ImageHeaderVector1Png} alt="" />
            <SpanStyle onClick={showModalHandler}>Войти</SpanStyle>
            {showModal && <ModalEnter showModal={showModal} setShowModal={setShowModal}/>}
        </GlobalContainer>
    )
}

export default HeaderEnter

const GlobalContainer = styled.div`
    width: 91.34210968017578px;
height: 25.49884033203125px;
`

const SpanStyle = styled.span`
cursor: pointer;
    width: 54.394737243652344;
height: 20;
font-family: Montserrat;
font-weight: 500;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
position: relative;
left: 1em;
top: -3px;
`