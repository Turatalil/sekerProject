import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { clearSelectedProduct, fetchProductById } from '../store/slices/ProductSlice';

const ProductDetailAdmin = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const status = useSelector((state) => state.product.selectedProductStatus);

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

  if (status === 'loading') return <Loading>Загрузка...</Loading>;
  if (status === 'failed') return <Error>Ошибка загрузки</Error>;
  if (!selectedProduct) return <Error>Продукт не найден</Error>;

  return (
    <Container>
      <ImageBlock>
        {selectedProduct.images?.length > 0 ? (
  <>
    <MainImage
      src={selectedProduct.images[0]?.image || 'https://via.placeholder.com/300'}
      alt={selectedProduct.title || 'product image'}
    />
    <ThumbnailContainer>
      {selectedProduct.images.slice(1, 4).map((img, index) => (
        <Thumbnail
          key={index}
          src={img.image || 'https://via.placeholder.com/100'}
          alt={`${selectedProduct.title || ''} thumbnail ${index + 1}`}
        />
      ))}
    </ThumbnailContainer>
  </>
) : (
  <NoImageText>Изображения нет</NoImageText>
)}

      </ImageBlock>

      <InfoBlock>
        <Top>
          <Title>{selectedProduct.title}</Title>
        </Top>

        <Rating>
          <FaStar color="#f43f5e" />
          <span>{selectedProduct.stars || '5.0'}</span>
          <span>({selectedProduct.feedbacks || 0} отзывов)</span>
        </Rating>

        <Characteristic>{selectedProduct.characteristics || '256GB'}</Characteristic>
        <Price>{selectedProduct.price} сом</Price>

        <ColorBlock>
          <span>Цвет:</span>
          <ColorOption color="#6B7280" />
          <ColorOption color="#111827" />
          <ColorOption color="#3B82F6" selected />
        </ColorBlock>

        <AdminButtons>
          <EditButton>Изменить</EditButton>
          <DeleteButton>Удалить</DeleteButton>
        </AdminButtons>
      </InfoBlock>
    </Container>
  );
};

export default ProductDetailAdmin;

// Стили те же
const Container = styled.div`
  max-width: 1000px;
  display: flex;
  gap: 32px;
  margin: 40px auto;
  padding: 20px;
  background: #f9fafb;
`;

const ImageBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: contain;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

const InfoBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #111827;
  margin: 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #6b7280;
  font-size: 14px;
`;

const Characteristic = styled.div`
  font-size: 16px;
  color: #6b7280;
`;

const Price = styled.div`
  font-size: 24px;
  color: #111827;
  font-weight: bold;
`;

const ColorBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ColorOption = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: ${(props) => (props.selected ? '2px solid #000' : '1px solid #d1d5db')};
`;

const AdminButtons = styled.div`
  display: flex;
  gap: 12px;
`;
const NoImageText = styled.div`
  font-size: 18px;
  color: #9ca3af;
  padding: 40px 0;
  text-align: center;
`;

const EditButton = styled.button`
  width: 60px;
  height: 50px;
  flex: 1;
  padding: 10px 16px;
  color: white;
  background-color: #9292EF;
  font-size: 16px;
  border: 1px solid #9292EF;
  border-radius: 10px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  width: 60px;
  height: 50px;
  flex: 1;
  padding: 10px 16px;
  background: white;
  color: #9292EF;
  font-size: 16px;
  border: 1px solid #9292EF;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: white;
  }
`;

const Loading = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
`;

const Error = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: red;
`;
