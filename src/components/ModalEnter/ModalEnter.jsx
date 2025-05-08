import React, { useState } from 'react'
import Input from '../../UI/Input/Input'
import ImageGoogle from "../../assets/icon/image 114.png"
import Button from '../../UI/Button/Button'
import styled from 'styled-components'
import { createPortal } from 'react-dom'
const ModalEnter = ({ setShowModal }) => {

    const closeModalHandler = () => {
        setShowModal(false)
        document.body.style.overflow = "scroll"
        document.body.style.paddingRight = "0"
    }

    return (
        <div>
            {createPortal(
                <>
                    <ContainerEnter>
                        <SpanStyle>Мой профиль</SpanStyle>
                        <Input type="text" placeholder="E-mail" border="none" backgroundColor="#FFFFFF" fontFamily="Montserrat" fontWeight="500" fontSize="20px" lineHeight="100%" width="368.60968017578125px" height="55.454551696777344px" borderRadius="10px" />
                        <Input type="password" placeholder="Пароль" border="none" backgroundColor="#FFFFFF" fontFamily="Montserrat" fontWeight="500" fontSize="20px" lineHeight="100%" width="368.60968017578125px" height="55.454551696777344px" borderRadius="10px" />
                        <Button url={ImageGoogle} display="flex" gap="5px" justifyContent="center" alignItems="center" fontFamily="Montserrat" fontWeight="500" fontSize="23px" lineHeight="100%" cursor="pointer" border="none" buttonName="Войти через Google" width="369px" height="48px" borderRadius="10px" backgroundColor="#FFFFFF" />
                        <Button cursor="pointer" color="#FFFFFF" buttonName="Войти" fontFamily="Montserrat" fontWeight="600" fontSize="28px" lineHeight="100%" width="368.60968017578125px" height="52.395729064941406px" border="none" borderRadius="10px" backgroundColor="#FC3A74" />
                    </ContainerEnter>
                    <BackdropStyle onClick={closeModalHandler}></BackdropStyle>
                </>,
                document.body
            )}
        </div >

    )
}

export default ModalEnter;


const BackdropStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
    background-color: #00000080;
    `


const ContainerEnter = styled.div`
    border: none;
    position: fixed;
    z-index: 2;
    width: 568px;
    top: 20%;
    left: 30%;
height: 423px;
border-radius: 30px;
background-color: #D9D9D9;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
`

const SpanStyle = styled.span`
    width: 243px;
height: 32px;
top: 94px;
left: 599px;
font-family: Montserrat;
font-weight: 600;
font-size: 32px;
line-height: 100%;
letter-spacing: 0%;
color: #FC3A74;
`