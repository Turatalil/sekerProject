import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaShoppingBasket, FaStar } from 'react-icons/fa';
import cor from "../../assets/image/Vector (4).png"
import LikeButton from '../LikeButton';
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 14px;
  padding: 24px;
  margin-left:-20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;


const Card = styled.div`
width: 260px;
height: 384px;


  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  color: #f472b6;
  font-size: 20px;
`;

const BasketIcon = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 18px;
  color: black;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const Storage = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin: 4px 0;
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 12px 0 8px;
  color: black;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #6b7280;
`;

const Star = styled(FaStar)`
  color: #f43f5e;
`;

const PhoneCard = () => {
  const phones = [
    {
      id: 1,
      name: "Apple iPhone 15 Pro Max",
      storage: "256GB",
      price: "136 000 сом",
      rating: 4.1,
      reviews: "13 отзывов",
      image: "https://gadgets.fzfdevelopers.co.zw/wp-content/uploads/2024/11/W57NO_SQ1_0000000003_NATURAL_SLf.jpeg"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      storage: "512GB",
      price: "125 000 сом",
      rating: 4.5,
      reviews: "25 отзывов",
      image: "https://gadgets.fzfdevelopers.co.zw/wp-content/uploads/2024/11/W57NO_SQ1_0000000003_NATURAL_SLf.jpeg"
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      storage: "128GB",
      price: "95 000 сом",
      rating: 4.3,
      reviews: "18 отзывов",
      image: "https://gadgets.fzfdevelopers.co.zw/wp-content/uploads/2024/11/W57NO_SQ1_0000000003_NATURAL_SLf.jpeg"
    },
    {
      id: 4,
      name: "Xiaomi 14 Pro",
      storage: "256GB",
      price: "80 000 сом",
      rating: 4.2,
      reviews: "20 отзывов",
      image: "https://gadgets.fzfdevelopers.co.zw/wp-content/uploads/2024/11/W57NO_SQ1_0000000003_NATURAL_SLf.jpeg"
    },
    {
      id: 5,
      name: "OnePlus 12",
      storage: "256GB",
      price: "85 000 сом",
      rating: 4.4,
      reviews: "15 отзывов",
      image: "https://gadgets.fzfdevelopers.co.zw/wp-content/uploads/2024/11/W57NO_SQ1_0000000003_NATURAL_SLf.jpeg"
    },
    {
      id: 6,
      name: "Oppo Find X6 Pro",
      storage: "512GB",
      price: "90 000 сом",
      rating: 4.0,
      reviews: "12 отзывов",
      image: "https://gadgets.fzfdevelopers.co.zw/wp-content/uploads/2024/11/W57NO_SQ1_0000000003_NATURAL_SLf.jpeg"
    },
    {
      id: 7,
      name: "Vivo X90 Pro",
      storage: "256GB",
      price: "82 000 сом",
      rating: 4.1,
      reviews: "10 отзывов",
      image: "https://gadgets.fzfdevelopers.co.zw/wp-content/uploads/2024/11/W57NO_SQ1_0000000003_NATURAL_SLf.jpeg"
    },
    {
      id: 8,
      name: "Huawei Mate 60 Pro",
      storage: "256GB",
      price: "100 000 сом",
      rating: 4.3,
      reviews: "22 отзывов",
      image: "https://gadgets.fzfdevelopers.co.zw/wp-content/uploads/2024/11/W57NO_SQ1_0000000003_NATURAL_SLf.jpeg"
    },
    {
      id: 9,
      name: "Samsung Galaxy Z Fold 5",
      storage: "512GB",
      price: "150 000 сом",
      rating: 4.6,
      reviews: "8 отзывов",
      image: "https://gadgets.fzfdevelopers.co.zw/wp-content/uploads/2024/11/W57NO_SQ1_0000000003_NATURAL_SLf.jpeg"
    },
    {
      id: 10,
      name: "Asus ROG Phone 7",
      storage: "512GB",
      price: "120 000 сом",
      rating: 4.5,
      reviews: "7 отзывов",
      image: "https://gadgets.fzfdevelopers.co.zw/wp-content/uploads/2024/11/W57NO_SQ1_0000000003_NATURAL_SLf.jpeg"
    }
  ];
  

  return (
    <Grid>
      {phones.map((phone) => (
        <Card key={phone.id}>
          <HeartIcon>
            <LikeButton/>
          </HeartIcon>
          <Image src={phone.image} alt={phone.name} />
          <Content>
            <Title>{phone.name}</Title>
            <Storage>{phone.storage}</Storage>
            <Price>{phone.price}</Price>
            <RatingWrapper>
              <Star />
              <span>{phone.rating}</span>
              <span>{phone.reviews}</span>
            </RatingWrapper>
          </Content>
          <BasketIcon>
          <img src={cor} alt="" />
          </BasketIcon>
        </Card>
      ))}
    </Grid>
  );
};

export default PhoneCard;
