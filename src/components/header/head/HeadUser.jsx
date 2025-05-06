import React from 'react'
import HeaderIcon from './headerIcon/HeaderIcon'
import HeaderFont from './headerFont/HeaderFont'
import HeaderSearch from './headerInput/HeaderSearch'
import HeadEnterUser from './headEnterUser/HeadEnterUser'
import HeaderMarks from './headerMarks/HeaderMarks'
import HeaderBasket from './heaederBasket/HeaderBasket'
import styled from 'styled-components'

const HeadUser = () => {
    return (
        <GlobalContainer>
            <HeaderIcon />
            <HeaderFont />
            <HeaderSearch />
            <HeadEnterUser />
            <HeaderMarks />
            <HeaderBasket />
        </GlobalContainer>
    )
}

export default HeadUser

const GlobalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1170px;
height: 56px;
margin: auto;
margin-top: 22px;
`