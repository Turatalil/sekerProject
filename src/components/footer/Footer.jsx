import styled from 'styled-components';
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaArrowUp } from 'react-icons/fa';
import Visa from "../../assets/image/Vector (2).png"
import Vis from "../../assets/image/Group 314.png"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <FooterContainer>
        <Div>
        <Section>
          <Title>Покупателям</Title>
          <List>
            <ListItem>О нас</ListItem>
            <ListItem>Оплата</ListItem>
            <ListItem>Доставка</ListItem>
            <ListItem>Магазины</ListItem>
          </List>
        </Section>

        <Section>
          <Title>Режим работы</Title>
          <List>
            <ListItem>Ежедневно с 9:00 до 21:00</ListItem>
            <ListItem>Отдел продаж</ListItem>
            <ListItem>Будни с 9:00 до 21:00</ListItem>
            <ListItem>Доставка и сборка</ListItem>
          </List>
        </Section>

        <Section>
          <Title>Связаться с нами</Title>
          <List>
            <ListItem>+996 708 112 610</ListItem>
            <ListItem>+996 773 838 618</ListItem>
            <ListItem>comfort.kg@gmail.com</ListItem>
          </List>
          <Title>Мы в соц. сетях</Title>
          <SocialIcons>
            <FaWhatsapp />
            <FaInstagram />
            <FaTelegramPlane />
          </SocialIcons>
        </Section>

        <Section>
          <Title>Способ оплаты</Title>
          <PaymentIcons>
          <img src={Visa} alt="" />
          <img src={Vis} alt="" />
          </PaymentIcons>
          <p>Наличным в любом пункте самовывоза или картой</p>
          <p>© Comfort. 2022</p>
        </Section>

        </Div>
      </FooterContainer>

      <ScrollTopButton onClick={scrollToTop}>
        <FaArrowUp />
      </ScrollTopButton>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #998cff;
  color: white;
  padding:30px;
  border-radius: 10px;
  margin-top: 150px;
`;
  
const Section = styled.div`
  min-width: 200px;
  flex: 1;
  margin: 10px;
`;

const Title = styled.h4`
  font-weight: bold;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  font-size: 20px;
`;

  const PaymentIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  img {
    width: 45px;
    height: auto;
  }
`;

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  left: 100px;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  &:hover {
    background-color: #e73370;
  }
`;

const Div =styled.div`
  width: 1340px;
  height: 257px;
  left: 150px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`