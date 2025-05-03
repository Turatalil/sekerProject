import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
    return (
        <div onClick={props.onClick}>
            <ButtonStyle
                backgroundColor={props.backgroundColor}
                marginBottom={props.marginBottom}
                borderRadius={props.borderRadius}
                fontFamily={props.fontFamily}
                fontWeight={props.fontWeight}
                marginTop={props.marginTop}
                fontColor={props.fontColor}
                fontSize={props.fontSize}
                padding={props.padding}
                border={props.border}
                margin={props.margin}
                width={props.width}
                cursor={props.cursor}
                display={props.display}
                justifyContent={props.justifyContent}
                alignItems={props.alignItems}
            >{props.buttonName}
            </ButtonStyle>
        </div>
    )
}

export default Button;

const ButtonStyle = styled.button`
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
    margin-top: ${(props) => props.marginTop} ; 
    margin-bottom: ${(props) => props.marginBottom} ;
    cursor: ${(props) => props.cursor} ;
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
`
