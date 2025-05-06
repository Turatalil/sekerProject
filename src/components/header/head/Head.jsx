import React from 'react'
import HeaderIcon from "../head/headerIcon/HeaderIcon"
import HeaderFont from './headerFont/HeaderFont'
import HeaderSearch from './headerInput/HeaderSearch'
import HeaderEnter from './headerEnter/HeaderEnter'
import HeaderMarks from './headerMarks/HeaderMarks'
import HeaderBasket from './heaederBasket/HeaderBasket'
import styled from 'styled-components'
const Head = () => {
    return (
        <GlobalContainer>
            <HeaderIcon />
            <HeaderFont />
            <HeaderSearch />
            <HeaderEnter />
            <HeaderMarks />
            <HeaderBasket />
        </GlobalContainer>
    )
}

export default Head;

const GlobalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1170px;
height: 56px;
margin: auto;
margin-top: 22px;
`