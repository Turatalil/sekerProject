import React, { useState } from 'react';
import styled from 'styled-components';
import img from "../assets/image/Vector (3).png"

const images = [
  
  
];

const Card = styled.div`
width: 1014.75px;
height: 500px;
top: 214px;
left: 135px;

  
  margin: auto;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 16px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;

const Thumbnails = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 80px;
  border-radius: 8px;
  cursor: pointer;
  border: ${props => (props.active ? '3px solid #6a5acd' : '1px solid #ccc')};
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  color: #888;
`;

const Price = styled.p`
  color: #6a5acd;
  font-size: 24px;
  font-weight: 600;
`;

const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ColorDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.color};
  border: ${props => (props.selected ? '3px solid #6a5acd' : '1px solid #ccc')};
  cursor: pointer;
`;

const QuantityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const QtyButton = styled.button`
  background: #6a5acd;
  color: white;
  border: none;
  padding: 4px 10px;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
`;

const QtyDisplay = styled.span`
  font-size: 16px;
  min-width: 20px;
  text-align: center;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
`;

const CartButton = styled.button`
  flex: 1;
  background: #6a5acd;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const BuyButton = styled.button`
  flex: 1;
  background: white;
  color: #6a5acd;
  border: 2px solid #6a5acd;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const colors = [
    { name: 'black', code: '#000' },
    { name: 'gray', code: '#888' },
    { name: 'blue', code: '#00f' },
  ];

  return (
    <Card>

      <ImageSection>
       
      </ImageSection>

      <Info>
        <Title>Apple iPhone 15 Pro</Title>
        <Subtitle>256Gb</Subtitle>
        <Price>116 000 сом</Price>

        <div>
          <p>Цвет:</p>
          <ColorRow>
            {colors.map((c) => (
              <ColorDot
                key={c.name}
                color={c.code}
                selected={selectedColor === c.name}
                onClick={() => setSelectedColor(c.name)}
              />
            ))}
          </ColorRow>
        </div>

        <div>
          <p>Количество:</p>
          <QuantityRow>
            <QtyButton ><Img src={img} alt="" /></QtyButton>
            <QtyDisplay>{quantity}</QtyDisplay>
            <QtyButton onClick={() => setQuantity(quantity + 1)}>+</QtyButton>
          </QuantityRow>
        </div>

        <ButtonRow>
          <CartButton>В корзину</CartButton>
          <BuyButton>Купить сейчас</BuyButton>
        </ButtonRow>
      </Info>
    </Card>
  );
};

export default ProductCard;
const Img =styled.img`
  width: 15px;
height: 15px;


`
