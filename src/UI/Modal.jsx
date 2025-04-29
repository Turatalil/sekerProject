import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const Modal = (props) => {
    return (
        <div>
            <ModalStyle>
                <H1Style>{props.Name}</H1Style>
                <GlobalContainer>
                    <button onClick={props.onConfirm} >{props.yesName}</button>
                    <button onClick={props.onClose}>{props.noName}</button>
                </GlobalContainer>
            </ModalStyle>
            <Style></Style>
        </div>
    )
}

export default Modal

const Style = styled.div`
    background-color: #00000093;
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0; 
    z-index: 19;
`

const ModalStyle = styled.div`
    padding: 20px;
    background-color: #fff7f7;
    color: black;
    position: fixed;
    z-index: 20;
    top: 200px;
    left: 535px;
    width: 408px;
    border-radius: 30px;
    border: 3px solid red;
`

const H1Style = styled.h1`
    text-align: center;
    color: #FF9900;
    font-size: 30px;
    font-weight: 800;

`

const GlobalContainer = styled.div`
    display: flex;
    height: 50px;
    width: 300px;
    margin: auto;
    justify-content: space-around;
    button{
font-family: Montserrat;
font-weight: 600;
font-size: 12px;
line-height: 14.63px;
letter-spacing: 0%;
text-align: center;
width: 83px;    
height: 35px;
top: 1454px;
left: 678px;
border-radius: 10px;
background-color: #FF9900;
color: #FFFFFF;
border: none;
    }
`