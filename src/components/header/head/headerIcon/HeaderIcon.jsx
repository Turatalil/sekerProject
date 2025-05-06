import React from 'react'
import ImageHeader from "../../../../assets/icon/Rectangle 2.png"
import ImageLineOne from "../../../../assets/icon/Line 1.png"
import ImageLineTwo from "../../../../assets/icon/Line 2.png"
import ImageLineThree from "../../../../assets/icon/Line 3.png"
import styled from 'styled-components'

const HeaderIcon = () => {
    return (
        <div>
            <Wrapper>
                <BackgroundImage src={ImageHeader} alt="Background" />
                <LineOne src={ImageLineOne} alt="Line 1" />
                <LineTwo src={ImageLineTwo} alt="Line 2" />
                <LineThree src={ImageLineThree} alt="Line 3" />
            </Wrapper>
        </div>
    )
}

export default HeaderIcon

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
`

const BackgroundImage = styled.img`
    display: block;
    width: auto;
    height: auto;
    width: 43.105262756347656;
height: 42;
top: 8px;
border-radius: 10px;

    `

const LineOne = styled.img`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    width: 12.315789222717285;
    height: 2.3px;
left: 16px;
border-width: 2px;
    `

const LineTwo = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
left: 18.53px;
height: 2px;
border-width: 2px;
`

const LineThree = styled.img`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* width: auto; */
    width: 27.71px;
    margin: auto;
    height: 2.6px;
`
