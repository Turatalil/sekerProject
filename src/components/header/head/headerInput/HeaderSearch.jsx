import styled from 'styled-components'
import ImageVector from "../../../../assets/icon/Vector.png"
import ImageHeader from "../../../../assets/icon/Rectangle 3.png"
import Input from '../../../../UI/Input/Input'

const HeaderSearch = () => {
    return (
        <SearchWrapper>
            <Input
                width="467.9999694824219px"
                height="40px"
                marginTop="9px"
                marginLeft="292.5px"
                borderRadius="10px"
                placeholder="Что вы ищете?"
                border="none"
                $backgroundColor="#F4F4F4"
                fontFamily="Montserrat"
                fontWeight="400"
                fontSize="16px"
                $lineHeight="100%"
                letterSpacing="0%"
                fontColor="#000000"
            />
            <IconWrapper src={ImageHeader} alt="" />
            <SearchIcon src={ImageVector} alt="Search" />
        </SearchWrapper>
    )
}

export default HeaderSearch


const SearchWrapper = styled.div`
    position: relative;
    margin-top: 20px;
    display: inline-block;
`

const IconWrapper = styled.img`
    position: absolute;
    top: 9px;
    height: 2.5em;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchIcon = styled.img`
    position: relative;
    top: -1.8em;
    left: 28em;
    color: black;
`
