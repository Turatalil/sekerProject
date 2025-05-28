import Input from '../../UI/Input/Input';
import ImageGoogle from "../../assets/icon/image 114.png";
import Button from '../../UI/Button/Button';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { modalEnter } from '../../store/slices/LoginIsAccountSlice';
import { useNavigate } from 'react-router-dom';

const ModalEnter = ({ setShowModal }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.login)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const isFormValid = email.trim().length > 4 && password.trim().length > 4;
    const closeModalHandler = () => {
        setShowModal(false);
    };
    const logInIsAccount = () => {
        if (!(email.trim()) || !(password.trim())) {
            return;
        }
        const loginIsAccount = {
            username: email,
            password: password,
        };
        setIsLoading(true);
        dispatch(modalEnter({ loginIsAccount }))
            .unwrap()
            .then((data) => {
                setIsLoading(false);
                setShowModal(false);
                navigate("/user");
            })
            .catch((err) => {
                setIsLoading(false);
                console.error("Login error:", err);
            });
    };

    return (
        <div>
            {createPortal(
                <>
                    <div>
                        <ContainerEnter>
                            <DivStyle>
                                <SpanStyle>Мой профиль</SpanStyle>
                                <Input
                                    onChange={(e) => setEmail(e.target.value)}
                                    paddingLeft="20px"
                                    type="text"
                                    placeholder="User name"
                                    border="none"
                                    backgroundColor="#FFFFFF"
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    fontSize="20px"
                                    lineHeight="100%"
                                    width="368.6px"
                                    height="55.45px"
                                    borderRadius="10px"
                                />
                                <Input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Пароль"
                                    border="none"
                                    backgroundColor="#FFFFFF"
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    fontSize="20px"
                                    lineHeight="100%"
                                    width="368.6px"
                                    height="55.45px"
                                    borderRadius="10px"
                                />
                                <Button
                                    fontColor="#000000"
                                    url={ImageGoogle}
                                    border="none"
                                    margin="auto"
                                    display="flex"
                                    gap="5px"
                                    justifyContent="center"
                                    alignItems="center"
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    fontSize="23px"
                                    lineHeight="100%"
                                    cursor="pointer"
                                    buttonName="Войти через Google"
                                    width="369px"
                                    height="48px"
                                    borderRadius="10px"
                                    backgroundColor="#FFFFFF"
                                />
                                <Button
                                    onClick={logInIsAccount}
                                    cursor="pointer"
                                    color="#FFFFFF"
                                    fontFamily="Montserrat"
                                    fontWeight="600"
                                    fontSize="28px"
                                    lineHeight="100%"
                                    buttonName={isLoading ? <LoaderSpiner /> : "Войти"}
                                    width="368.6px"
                                    height="52.39px"
                                    border="none"
                                    borderRadius="10px"
                                    disabled={!isFormValid}
                                    backgroundColor="#FC3A74"
                                />
                                <SpanErrorStyle>{error ? error : ""}</SpanErrorStyle>
                            </DivStyle>
                        </ContainerEnter>
                    </div>
                    <BackdropStyle onClick={closeModalHandler}></BackdropStyle>
                </>,
                document.body
            )}
        </div>
    );
};
export default ModalEnter

const DivStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 420px;
`
const SpanErrorStyle = styled.span`
    color: red;
    font-size: 14px;
    font-weight: 500;
`

const LoaderSpiner = styled.span`
    width: 40px;
    height: 40px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    `


const BackdropStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #00000080;
    
    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }}
`;

const ContainerEnter = styled.div`
    border: none;
    position: fixed;
    z-index: 2;
    width: 568px;
    top: 20%;
    left: 30%;
    height: 433px;
    border-radius: 30px;
    background-color: #D9D9D9;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

const SpanStyle = styled.span`
    font-family: Montserrat;
    font-weight: 600;
    font-size: 32px;
    color: #FC3A74;
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 16px;
    margin-bottom: 10px;
`;
