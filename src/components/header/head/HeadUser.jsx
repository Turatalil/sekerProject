import HeaderIcon from './headerIcon/HeaderIcon'
import HeaderFont from './headerFont/HeaderFont'
import HeaderSearch from './headerInput/HeaderSearch'
import HeaderMarks from './headerMarks/HeaderMarks'
import HeaderBasket from './heaederBasket/HeaderBasket'
import styled from 'styled-components'
import HeaderEnter from './headerEnter/HeaderEnter'

const HeadUser = () => {
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