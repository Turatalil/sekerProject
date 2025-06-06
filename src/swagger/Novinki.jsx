import styled from 'styled-components'
import Button from '../UI/Button/Button'
import { useNavigate } from 'react-router-dom'

const Novinki = () => {
    const navigate = useNavigate()
    const clickHandlerAddPhone = ()=>{
        navigate("/add-phone")
    }
    return (
        <Div>
            <SpanStyle>Новинки</SpanStyle>
            <Button onClick={clickHandlerAddPhone} />
        </Div>
    )
}

export default Novinki

const SpanStyle = styled.span`
width: 1170px;
height: 59px;
font-family: Montserrat;
font-weight: 600;
font-size: 48px;
line-height: 100%;
color: #FC3A74;
`

const Div = styled.div`
    width: 1170px;
    margin: auto;
    margin-top: 97px;
    display: flex;
    margin-bottom: 40px;
`