import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialProducts } from '../../store/slices/initialProductsSlice';
import { fetchMoreProducts, incrementOffset } from '../../store/slices/loadMoreProductsSlice';
import styled from 'styled-components';
import strelka from '../../assets/icon/Vector 12.png'
import { FaStar } from 'react-icons/fa';
import LikeButton from "../LikeButton"
const PhoneCard = () => {
  const dispatch = useDispatch();

  const initialProducts = useSelector((state) => state.initial.products);
  const moreProducts = useSelector((state) => state.more.products);
  const status = useSelector((state) => state.more.status);
  const offset = useSelector((state) => state.more.offset);
  const initialTotal = useSelector((state) => state.initial.totalCount);
  const moreTotal = useSelector((state) => state.more.totalCount);

  // Жалпы продукттар жана жалпы сан:
  const allProducts = [...initialProducts, ...moreProducts];
  // totalCount кайсы слайс туура болсо ошону колдонсо болот, же экөөнүн тең бирдей болушу керек.
  const totalCount = initialTotal || moreTotal;

  useEffect(() => {
    dispatch(fetchInitialProducts());
  }, [dispatch]);

  const handleLoadMore = () => {
    if (status !== 'loading') {
      dispatch(fetchMoreProducts(offset)).then(() => {
        dispatch(incrementOffset());
      });
    }
  };

  return (
    <>
      <Grid>
     
        {allProducts.map((product) => (
         
          <Card key={product.id}>
            <LikeButton/>
            <Image
              src={product.images[0]?.image || 'https://via.placeholder.com/200'}
              alt={product.title}
            />
            <Content>
              <Title>{product.title}</Title>
              <Description>{product.characteristics}</Description>
              <Price>{product.price} сом</Price>
              <Rating>
                <FaStar color="#f43f5e" />
                <span>{product.stars}</span>
                <span>{product.feedbacks} отзывов</span>
              </Rating>
            </Content>
          </Card>
        ))}
      </Grid>

      {/* Кнопка көрсөтүлсүн гана, эгер жүктөлгөн продукттар жалпы сандан аз болсо */}
      {allProducts.length < totalCount && (
        <LoadMoreButton onClick={handleLoadMore} disabled={status === 'loading'}>
          Показать ещё
          {status === 'loading' ? <Spinner /> : <Smg src={strelka} alt="стрелка" />}
        </LoadMoreButton>
      )}
    </>
  );
};

export default PhoneCard;

// ... (стили бирдей калууда)


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 14px;
  padding: 24px;
  margin: 0 auto;
  max-width: 1000px;
`;

const Card = styled.div`
  width: 260px;
  height: 384px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
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
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`;

const Price = styled.p`
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const Rating = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 14px;
`;

const LoadMoreButton = styled.button`
  width: 224px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 20px auto;
  padding: 10px 24px;
  font-size: 16px;
  color: #ec4899;
  border: 2px solid #ec4899;
  background: transparent;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Smg = styled.img`
  width: 11px;
  height: 11px;
`;

const Spinner = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #ec4899;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
