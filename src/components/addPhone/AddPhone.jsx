import Input from "../../UI/Input/Input"
import styled from 'styled-components'
import Button from '../../UI/Button/Button'
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addPhone } from "../../store/slices/AddPhone"
const AddPhone = () => {
    const dispatch = useDispatch()
    const [manufacturerProduct, setManufacturerProduct] = useState("")
    const [nameProduct, setNameProduct] = useState("")
    const [priceProduct, setPriceProduct] = useState("")
    const [characteristicProduct, setCharacteristicProduct] = useState("")
    const [isNew, setIsNew] = useState(false)
    const addNewPhoneHandler = () => {
        const newProduct = {
            characteristics: characteristicProduct,
            price: priceProduct,
            title: nameProduct,
            description: manufacturerProduct,
            new: isNew
        }
        dispatch(addPhone(newProduct))
    }
    return (
        <GlobalContainer>
            <div>
                <div>
                    <SpanSelectStyle>Производитель:</SpanSelectStyle>
                    {/* <GlobalSelectStyle name="gol" id="">
                        <OptionSelectStyle value="samsung">Samsung</OptionSelectStyle>
                        <OptionSelectStyle value="apple">Apple</OptionSelectStyle>
                        <OptionSelectStyle value="nokia">Nokia</OptionSelectStyle>
                        <OptionSelectStyle value="realme">Realme</OptionSelectStyle>
                        <OptionSelectStyle value="xiaomi">Xiaomi</OptionSelectStyle>
                    </GlobalSelectStyle> */}
                    <Input fontSize="20px" onChange={(e) => setManufacturerProduct(e.target.value)} marginTop="6px" width="401px" height="46px" borderRadius="10px" borderWidth="1px" backgroundColor="#FFFFFF" border="1px solid #C1C1C1" />
                </div>
                <InputDivTwoStyle>
                    <SpanCharacteristic>Характеристика товара:</SpanCharacteristic>
                    <Input onChange={(e) => setCharacteristicProduct(e.target.value)} fontSize="20px" marginTop="6px" width="401px" height="46px" borderRadius="10px" borderWidth="1px" backgroundColor="#FFFFFF" border="1px solid #C1C1C1" />
                </InputDivTwoStyle>
                {/* <InputContainer>
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
                </InputContainer> */}
                <InputContainer>
                    <CheckboxContainer>
                        <CheckboxLabel>
                            <CheckboxInput
                                type="checkbox"
                                checked={isNew}
                                onChange={() => setIsNew(true)}
                            />
                            <SpanStyleFontNew>Новый</SpanStyleFontNew>
                        </CheckboxLabel>

                        <CheckboxLabel>
                            <CheckboxInput
                                type="checkbox"
                                checked={!isNew}
                                onChange={() => setIsNew(false)}
                            />
                            <SpanStyleFontbl>Б/У</SpanStyleFontbl>
                        </CheckboxLabel>
                    </CheckboxContainer>
                </InputContainer>
            </div>
            <div>
                <div>
                    <SpanNameProduct>Названия товара:</SpanNameProduct>
                    <Input onChange={(e) => setNameProduct(e.target.value)} fontSize="20px" marginTop="6px" width="401px" height="46px" borderRadius="10px" borderWidth="1px" backgroundColor="#FFFFFF" border="1px solid #C1C1C1" />
                </div>
                <InputPhooStyle>
                    <SpanPriceProduct>Цена товара:</SpanPriceProduct>
                    <Input onChange={(e) => setPriceProduct(e.target.value)} fontSize="20px" marginTop="6px" width="401px" height="46px" borderRadius="10px" borderWidth="1px" backgroundColor="#FFFFFF" border="1px solid #C1C1C1" />
                </InputPhooStyle>
                <GlobalContainerStyle>
                    <SpanColorStyle>Цвет</SpanColorStyle>
                    <ContainerColorStyle>
                        <Button $borderRadius="50%" buttonName $cursor="pointer" $backgroundColor="#000000" $width="30px" $height="30px" $border="1px solid #C1C1C1" />
                        <Button $borderRadius="50%" buttonName $cursor="pointer" $backgroundColor="#FFFFFF" $width="30px" $height="30px" $border="1px solid #C1C1C1" />
                        <Button $borderRadius="50%" buttonName $cursor="pointer" $backgroundColor="#FF0000" $width="30px" $height="30px" $border="1px solid #C1C1C1" />
                        <Button $borderRadius="50%" buttonName $cursor="pointer" $backgroundColor="#22BDFF" $width="30px" $height="30px" $border="1px solid #C1C1C1" />
                        <Button $borderRadius="50%" buttonName $cursor="pointer" $backgroundColor="#FF1CBF" $width="30px" $height="30px" $border="1px solid #C1C1C1" />
                        <Button $borderRadius="50%" buttonName $cursor="pointer" $backgroundColor="#0029FF" $width="30px" $height="30px" $border="1px solid #C1C1C1" />
                    </ContainerColorStyle>
                </GlobalContainerStyle>
                <Button onClick={addNewPhoneHandler} fontWeight="600" border="none" cursor="pointer" $marginRight="180px" color="#FFFFFF" fontSize="20px" lineHeight="100%" backgroundColor="#FC3A74" buttonName="Сохранить" width="256px" height="48px" borderRadius="10px" fontFamily="Montserrat" />
            </div>
        </GlobalContainer>
    )
}


export default AddPhone

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

const ImageStyle = styled.img`
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
    margin-bottom: 72px;

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
    justify-content: space-between;
    margin: auto;
    width: 1020px;
    margin-top: 63px;
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