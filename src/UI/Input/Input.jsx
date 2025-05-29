import styled from 'styled-components';

const Input = (props) => {
    return (
        <InputStyle
    onChange={props.onChange}
    placeholder={props.placeholder}
    $backgroundColor={props.backgroundColor}
    $marginBottom={props.marginBottom}
    $paddingLeft={props.paddingLeft}
    $borderRadius={props.borderRadius}
    $fontFamily={props.fontFamily}
    $fontWeight={props.fontWeight}
    $marginTop={props.marginTop}
    $fontColor={props.fontColor}
    $fontSize={props.fontSize}
    $padding={props.padding}
    $borderWidth={props.borderWidth}
    $lineHeight={props.lineHeight}
    $border={props.border}
    $margin={props.margin}
    $width={props.width}
    $height={props.height}
    $cursor={props.cursor}
    $display={props.display}
    $justifyContent={props.justifyContent}
    $alignItems={props.alignItems}
    type={props.type}
/>

    )         
}

export default Input;

const InputStyle = styled.input`
    width: ${(props) => props.$width || "368.6px"};
    border: ${(props) => props.$border || "none"};
    font-size: ${(props) => props.$fontSize || "18px"};
    color: ${(props) => props.$fontColor || "#9E9C9C"};
    padding: ${(props) => props.$padding || "0px"};
    border-radius: ${(props) => props.$borderRadius || "10px"};
    background-color: ${(props) => props.$backgroundColor || "#FFF"};
    margin: ${(props) => props.$margin || "auto"};
    font-family: ${(props) => props.$fontFamily || "Montserrat"};
    font-weight: ${(props) => props.$fontWeight || "500"};
    line-height: ${(props) => props.$lineHeight || "100%"};
    margin-top: ${(props) => props.$marginTop || "0px"};
    border-width: ${(props) => props.$borderWidth || "0px"};
    margin-bottom: ${(props) => props.$marginBottom || "0px"};
    cursor: ${(props) => props.$cursor};
    display: ${(props) => props.$display || "flex"};
    justify-content: ${(props) => props.$justifyContent};
    align-items: ${(props) => props.$alignItems};
    height: ${(props) => props.$height || "55px"};
    padding-left: ${(props) => props.$paddingLeft || "20px"};
`;
