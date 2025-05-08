import React from 'react'
import styled from 'styled-components';

const Input = (props) => {
    console.log(props);
    return (
        <div>
            <InputStyle
                placeholder={props.placeholder}
                backgroundColor={props.backgroundColor}
                marginBottom={props.marginBottom}
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
    width: ${(props) => props.width};
    border: ${(props) => props.border};
    font-size: ${(props) => props.fontSize} ;
    color: ${(props) => props.fontColor};
    padding: ${(props) => props.padding};
    border-radius: ${(props) => props.borderRadius};
    background-color: ${(props) => props.backgroundColor};
    margin: ${(props) => props.margin};
    font-family:  ${(props) => props.fontFamily};
    font-weight: ${(props) => props.fontWeight};
    line-height: ${(props) => props.lineHeight};
    margin-top: ${(props) => props.marginTop} ; 
    border-width: ${(props) => props.borderWidth};
    margin-bottom: ${(props) => props.marginBottom} ;
    cursor: ${(props) => props.cursor} ;
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    height: ${(props) => props.height};
`