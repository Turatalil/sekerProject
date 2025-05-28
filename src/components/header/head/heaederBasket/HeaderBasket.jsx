import ImageHeaderVectop3Png from "../../../../assets/icon/Vector (3).png"
import styled from 'styled-components'
const HeaderBasket = () => {
  return (
    <GlobalContainer>
        <img src={ImageHeaderVectop3Png} alt="" />
        <SpanStyle>Корзина</SpanStyle>
    </GlobalContainer>
  )
}

export default HeaderBasket

const GlobalContainer = styled.div`
  width: 99.86842346191406px;
  height: 25.529815673828125px;
  display: flex;
  justify-content: space-between;
`

const SpanStyle = styled.span`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-top: 8px;
`