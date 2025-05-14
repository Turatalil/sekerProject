import React from 'react'
import styled from 'styled-components';

const Input = (props) => {
    console.log(props);
    return (
        <div>
            <InputStyle
                placeholder={props.placeholder ? props.placeholder : "Search"}
                backgroundColor={props.backgroundColor}
                marginBottom={props.marginBottom}
                paddingLeft={props.paddingLeft}
                borderRadius={props.borderRadius}
                fontFamily={props.fontFamily}
                fontWeight={props.fontWeight}
                marginTop={props.marginTop}
                fontColor={props.fontColor}
                fontSize={props.fontSize}
                padding={props.padding}
                borderWidth={props.borderWidth}
                lineHeight={props.lineHeight}
                border={props.border}
                margin={props.margin}
                width={props.width}
                height={props.height}
                cursor={props.cursor}
                display={props.display}
                justifyContent={props.justifyContent}
                alignItems={props.alignItems}
                type={props.type} />
        </div>
    )
}

export default Input;

const InputStyle = styled.input`
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : "20px"};
    width: ${(props) => props.width ? props.width : "368.60968017578125px"};
    border: ${(props) => props.border ? props.border : "none"};
    font-size: ${(props) => props.fontSize ? props.fontSize : "18px"} ;
    color: ${(props) => props.fontColor ? props.fontColor : "#9E9C9C"};
    padding: ${(props) => props.padding ? props.padding : "0px"};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : "10px"};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "#FFFF"};
    margin: ${(props) => props.margin ? props.margin : "auto"};
    font-family:  ${(props) => props.fontFamily ? props.fontFamily : "Montserrat"};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : "500"};
    line-height: ${(props) => props.lineHeight ? props.lineHeight : "100%"};
    margin-top: ${(props) => props.marginTop ? props.marginTop : "0px"} ; 
    border-width: ${(props) => props.borderWidth ? props.borderWidth : "0px"};
    margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : "0px"} ;
    cursor: ${(props) => props.cursor} ;
    display: ${(props) => props.display ? props.display : "flex"};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    height: ${(props) => props.height ? props.height : "55.454551696777344px"};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : "20px"};
`
