import React from 'react'
import styled from 'styled-components'

const HeaderFont = () => {
    return (
        <>
            <GlobalContainer>
                <H1Style>Seker</H1Style>
                <H2Style>твой лучший гаджет</H2Style>
            </GlobalContainer>
        </>
    )
}

export default HeaderFont

const GlobalContainer = styled.div`
    width: 9em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const H1Style = styled.span`
    width: 103;
height: 40;
top: -3px;
left: 117px;
font-family: Montserrat;
font-weight: 600;
font-size: 33px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
`

const H2Style = styled.span`
    width: 161.13157653808594;
height: 17;
font-family: Montserrat;
font-weight: 600;
font-size: 14px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
margin-top: 2px;
`