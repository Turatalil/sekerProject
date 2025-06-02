import styled from 'styled-components';

const Button = (props) => {
    return (
        <div onClick={props.onClick}>
            <ButtonStyle
                disabled={props.disabled}
                $backgroundColor={props.$backgroundColor}
                $borderRadius={props.$borderRadius}
                $fontFamily={props.$fontFamily}
                $fontWeight={props.$fontWeight}
                $fontColor={props.$fontColor}
                $fontSize={props.$fontSize}
                $gap={props.$gap}
                $padding={props.$padding}
                $border={props.$border}
                $margin={props.$margin}
                $color={props.$color}
                $height={props.$height}
                $width={props.$width}
                $cursor={props.$cursor}
                $display={props.$display}
                $marginBottom={props.$marginBottom}
                $justifyContent={props.$justifyContent}
                $marginTop={props.$marginTop}
                $marginRight={props.$marginRight}
                $alignItems={props.$alignItems}
            >
                <img src={props.url} alt="" />{props.buttonName ? props.buttonName : "Добавить"}
            </ButtonStyle>
        </div>
    );
};

export default Button;

const ButtonStyle = styled.button`
    opacity: ${(props) => props.disabled ? "0.5" : props.$opacity || "1"};
    cursor: ${(props) => props.disabled ? "not-allowed" : props.$cursor || "pointer"};
    color: ${(props) => props.$color};
    width: ${(props) => props.$width || "206.0001678466797px"};
    height: ${(props) => props.$height || "47.00014114379883px"};
    border: ${(props) => props.$border || "none"};
    gap: ${(props) => props.$gap};
    font-size: ${(props) => props.$fontSize || "20px"};
    color: ${(props) => props.$fontColor || "#FFFFFF"};
    padding: ${(props) => props.$padding || "2px"};
    border-radius: ${(props) => props.$borderRadius || "10px"};
    background-color: ${(props) => props.$backgroundColor || "#FC3A74"};
    margin: ${(props) => props.$margin || "auto"};
    font-family: ${(props) => props.$fontFamily || "Montserrat"};
    font-weight: ${(props) => props.$fontWeight || "600"};
    margin-top: ${(props) => props.$marginTop || "0px"};
    margin-bottom: ${(props) => props.$marginBottom || "0px"};
    display: ${(props) => props.$display || "flex"};
    justify-content: ${(props) => props.$justifyContent || "center"};
    align-items: ${(props) => props.$alignItems || "center"};
    margin-right: ${(props) => props.$marginRight};

    :disabled {
        pointer-events: none;
    }
`;
