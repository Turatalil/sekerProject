import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import cor from "../assets/image/Vector (4).png"
import LikeButton from '../UI/LikeButton';
import { clearSelectedProduct, fetchProductById } from '../store/slices/ProductSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const selectedProductStatus = useSelector((state) => state.product.selectedProductStatus);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(clearSelectedProduct());
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      dispatch({ type: 'products/fetchProductById/fulfilled', payload: foundProduct });
    } else {
      dispatch(fetchProductById(id));
    }
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [id, products, dispatch]);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (selectedProductStatus === 'loading') return <div>Загрузка...</div>;
  if (selectedProductStatus === 'failed') return <div>Не удалось загрузить товар. Попробуйте позже.</div>;
  if (!selectedProduct) return <div>Продукт не найден</div>;

  return (
    <DetailContainer>
      <Image
        src={selectedProduct.images[0]?.image || 'https://via.placeholder.com/200'}
        alt={selectedProduct.title}
      />
      <DetailContent>
        <LikeButtonWrapper>
          <LikeButton />
        </LikeButtonWrapper>
        <Title>{selectedProduct.title}</Title>
        <Memory>{selectedProduct.characteristics || '256Gb'}</Memory>
        <Price>{selectedProduct.price} сом</Price>
        <Rating>
          <FaStar color="#f43f5e" />
          <span>{selectedProduct.stars || '5.0'}</span>
          <span>({selectedProduct.feedbacks || '0'} отзывов)</span>
        </Rating>
        <ColorSelector>
          <span>Цвет:</span>
          {['#000000', '#808080', '#1E90FF'].map((color) => (
            <ColorOption key={color} color={color} />
          ))}
        </ColorSelector>
        <QuantitySelector>
          <span>Количество:</span>
          <QuantityButton onClick={() => handleQuantityChange(-1)}>-</QuantityButton>
          <QuantityDisplay>{quantity}</QuantityDisplay>
          <QuantityButton onClick={() => handleQuantityChange(1)}>+</QuantityButton>
        </QuantitySelector>
        <BuyButton>
          <img src={cor} alt="basket" />
          В корзину
        </BuyButton>
      </DetailContent>
    </DetailContainer>
  );
};

export default ProductDetail;

const DetailContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

const DetailContent = styled.div`
  flex: 1;
  position: relative;
`;

const LikeButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0 0 8px;
  color: #333;
`;

const Memory = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0 0 8px;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 16px;
  color: #333;
`;

const Rating = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const ColorSelector = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
`;

const ColorOption = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #ccc;
`;

const QuantitySelector = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const QuantityDisplay = styled.span`
  font-size: 16px;
  width: 30px;
  text-align: center;
`;

const BuyButton = styled.button`
  width: 224px;
  height: 42px;
  padding: 10px 24px;
  font-size: 16px;
  color: #ec4899;
  border: 2px solid #ec4899;
  background: transparent;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #ec4899;
    color: white;
  }
`;