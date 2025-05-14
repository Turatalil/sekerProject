import React, { useState } from 'react'
import Input from "../../UI/Input/Input"
import styled from 'styled-components'
import Button from '../../UI/Button/Button'
import ImageSelect from "../../assets/icon/image 115.png"
const AddPhone = () => {
    return (
        <GlobalContainer>
            <div>
                <div>
                    <SpanSelectStyle name ="gol">Производитель<ImageStyle src={ImageSelect} alt="" /></SpanSelectStyle>
                <GlobalSelectStyle name="gol" id="">
                    
                        <OptionSelectStyle value="apple">Apple</OptionSelectStyle>
                        <OptionSelectStyle value="nokia">Nokia</OptionSelectStyle>
                        <OptionSelectStyle value="realme">Realme</OptionSelectStyle>
                        <OptionSelectStyle value="samsung">Samsung</OptionSelectStyle>
                        <OptionSelectStyle value="xiaomi">Xiaomi</OptionSelectStyle>
                    </GlobalSelectStyle>
                    <Input fontSize="20px" marginTop="6px" width="401px" height="46px" borderRadius="10px" borderWidth="1px" backgroundColor="#FFFFFF" border="1px solid #C1C1C1" />
                </div>
                <InputDivTwoStyle>
                    <SpanCharacteristic>Характеристика товара:</SpanCharacteristic>
                    <Input fontSize="20px" marginTop="6px" width="401px" height="46px" borderRadius="10px" borderWidth="1px" backgroundColor="#FFFFFF" border="1px solid #C1C1C1" />
                </InputDivTwoStyle>
                <InputContainer>
                    <CheckboxContainer>
                        <CheckboxLabel>
                            <CheckboxInput defaultChecked />
                            <SpanStyleFontNew>Новый</SpanStyleFontNew>
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <CheckboxInput />
                            <SpanStyleFontbl>Б/У</SpanStyleFontbl>
                        </CheckboxLabel>
                    </CheckboxContainer>
                </InputContainer>
            </div>
            <div>
                <div>
                    <SpanNameProduct>Названия товара:</SpanNameProduct>
                    <Input fontSize="20px" marginTop="6px" width="401px" height="46px" borderRadius="10px" borderWidth="1px" backgroundColor="#FFFFFF" border="1px solid #C1C1C1" />
                </div>
                <InputPhooStyle>
                    <SpanPriceProduct>Цена товара:</SpanPriceProduct>
                    <Input fontSize="20px" marginTop="6px" width="401px" height="46px" borderRadius="10px" borderWidth="1px" backgroundColor="#FFFFFF" border="1px solid #C1C1C1" />
                </InputPhooStyle>
                <GlobalContainerStyle>
                    <SpanColorStyle>Цвет</SpanColorStyle>
                <ContainerColorStyle>
                    <Button borderRadius="50%" cursor="pointer" backgroundColor="#000000" width="30px" height="30px" border="1px solid #C1C1C1"          />
                    <Button borderRadius="50%" cursor="pointer" backgroundColor="#FFFFFF" width="30px" height="30px" border="1px solid #C1C1C1"          />
                    <Button borderRadius="50%" cursor="pointer" backgroundColor="#FF0000" width="30px" height="30px" border="1px solid #C1C1C1"          />
                    <Button borderRadius="50%" cursor="pointer" backgroundColor="#22BDFF" width="30px" height="30px" border="1px solid #C1C1C1"          />
                    <Button borderRadius="50%" cursor="pointer" backgroundColor="#FF1CBF" width="30px" height="30px" border="1px solid #C1C1C1"          />
                    <Button borderRadius="50%" cursor="pointer" backgroundColor="#0029FF" width="30px" height="30px" border="1px solid #C1C1C1"          />
                </ContainerColorStyle>
                </GlobalContainerStyle>
            <Button fontWeight="600" border="none" cursor="pointer" marginTop="72px" color="#FFFFFF" fontSize="20px" lineHeight="100%" backgroundColor="#FC3A74" buttonName="Сохранить" width="256px" height="48px" borderRadius="10px" fontFamily="Montserrat"            />
            </div>
        </GlobalContainer>
    )
}


export default AddPhone

const OptionStyle = styled.option`
    width: 200px;
`

const SpanSelectStyle = styled.span`
    width: 164px;
height: 24px;
cursor: pointer;
font-family: Montserrat;
font-weight: 400;
font-size: 20px;
line-height: 100%;
color: #000000;
`

const ImageStyle  = styled.img`
    position: relative;
    top: 4px;
    left: 5px;
    cursor: pointer;
`
const SpanStyleFontNew = styled.span`
    width: 73px;
height: 24px;
font-family: Montserrat;
font-weight: 600;
font-size: 20px;
line-height: 100%;
color: #000000;
`

const SpanStyleFontbl = styled.span`
    width: 37px;
height: 24px;
font-family: Montserrat;
font-weight: 600;
font-size: 20px;
line-height: 100%;
color: #000000;
`

const GlobalContainerStyle = styled.div`
margin-top: 58px;

`

const SpanColorStyle = styled.span`
    width: 52px;
height: 24px;
font-family: Montserrat;
font-weight: 600;
font-size: 20px;
line-height: 100%;
color: #000000;

`
const ContainerColorStyle = styled.div`
    display: flex;
    gap: 18px;
    margin-top: 20px;
`

const GlobalContainer = styled.div`
    display: flex;
    gap: 208px;
    margin: auto;
    width: 1020px;
`

const InputPhooStyle = styled.div`
    margin-top: 43px;
`
const SpanPriceProduct = styled.span`
    width: 135px;
height: 24px;
font-family: Montserrat;
font-weight: 400;
font-size: 20px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
`
const SpanNameProduct = styled.span`
    width: 183px;
height: 24px;
font-family: Montserrat;
font-weight: 400;
font-size: 20px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
`

const GlobalSelectStyle = styled.select`
    border: none;
    width: 140px;
    font-size: 20px;
`

const OptionManufacturer = styled.option`
    /* width: 164px; */
height: 24px;
font-family: Montserrat;
font-weight: 400;
font-size: 30px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
`

const OptionSelectStyle = styled.option`
    width: 916px;
    height: 172px;
font-family: Montserrat;
font-weight: 400;
font-size: 20px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
color: #000000;
`
const InputDivTwoStyle = styled.div`
    margin-top: 43px;
`
const SpanCharacteristic = styled.span`
    width: 248px;
height: 24px;
font-family: Montserrat;
font-weight: 400;
font-size: 20px;
line-height: 100%;
letter-spacing: 0%;
color: #000000;
`



const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100px;
  margin-top: 62px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  cursor: pointer;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  appearance: none;
  border: 1px solid #FC3A74;
  background-color: white;
  cursor: pointer;
  position: relative;
  outline: none;
  border-radius: 4px;

  &:checked {
    background-color: #FC3A74;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 6px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;