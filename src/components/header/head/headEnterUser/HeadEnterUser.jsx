import React from 'react'
import ImageHeaderVector1Png from "../../../../assets/icon/Vector (1).png"
import styled from 'styled-components'
const HeadEnterUser = () => {
    return (
        <GlobalContainer>
            <img src={ImageHeaderVector1Png} alt="" />
            <SpanStyle>Выйти</SpanStyle>
        </GlobalContainer>
    )
}

export default HeadEnterUser

const GlobalContainer = styled.div`
    width: 91.34210968017578px;
height: 25.49884033203125px;
`

const SpanStyle = styled.span`
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