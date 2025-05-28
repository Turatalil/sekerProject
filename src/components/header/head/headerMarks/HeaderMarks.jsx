import ImageHeaderVector2Png from "../../../../assets/icon/Vector (2).png"
import styled from 'styled-components'
const HeaderMarks = () => {
  return (
    <GlobalContainer>
        <img src={ImageHeaderVector2Png} alt="" />
        <SpanStyle>Закладки</SpanStyle>
    </GlobalContainer>
  )
}

export default HeaderMarks


const GlobalContainer = styled.div`
  width: 110.07894134521484px;
  height: 21.622711181640625px;
  display: flex;
  justify-content: space-between;
`

const SpanStyle = styled.span`
  width: 83.13157653808594;
  height: 20;
  top: 18px;
  left: 947.29px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #000000;
  margin-top: 6px;
`