import styled from "styled-components"

const DannieTowara = () => {
    return (
        <Div>
            <SpanStyle>Данные товара</SpanStyle>
        </Div>
    )
}

export default DannieTowara

const SpanStyle = styled.span`
    font-family: Montserrat;
font-weight: 600;
font-size: 25px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
width: 205;
margin-top: 55px;
`

const Div = styled.div`
    width: 1020px;
    margin: auto;
    margin-top: 55px;
`