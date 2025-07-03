import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/slices/ProductSlice';
import { FaStar } from 'react-icons/fa';
import cor from '../../assets/image/Vector (4).png';
import LikeButton from '../LikeButton';
import strelka from "../../assets/icon/Vector 12.png";
import { Link } from 'react-router-dom';

const PhoneCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items)
  const status = useSelector((state) => state.product.status)
  const next = useSelector((state) => state.product.next)
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleLoadMore = () => {
    if (visibleCount < products.length) {
      setVisibleCount((prev) => prev + 6);
    } else if (next && status !== 'loading') {
      dispatch(fetchProducts(next));
      setVisibleCount((prev) => prev + 6);
    }
  };

  return (
    <>
      <Grid>
        {products.slice(0, visibleCount).map((product) => (
          <Card key={product.id}>
            <LikeButton /> {/* Лайк теперь не в ссылке */}

            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img
                src={product.images[0]?.image || 'https://via.placeholder.com/200'}
                alt={product.title}
                style={{ width: '100%', height: '200px', objectFit: 'contain' }}
              />
              <div style={{ padding: '16px' }}>
                <h3>{product.title}</h3>
              </div>
            </Link>

            <div style={{ padding: '0 16px' }}>
              <p>{product.characteristics}</p>
              <p style={{ fontWeight: 'bold' }}>{product.price} сом</p>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <FaStar color="#f43f5e" />
                <span>{product.stars}</span>
                <span>{product.feedbacks} отзывов</span>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
              <img src={cor} alt="basket" />
            </div>
          </Card>
        ))}
      </Grid>

      {(visibleCount < products.length || next) && (
        <LoadMoreButton onClick={handleLoadMore} disabled={status === 'loading'}>
          Показать ещё
          {status === 'loading' ? <Spinner /> : <Smg src={strelka} alt="стрелка" />}
        </LoadMoreButton>
      )}
    </>
  );
};

export default PhoneCard;

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

const LoadMoreButton = styled.button`
    width: 224px;
    height: 42px;
    display: block;
    margin: 20px auto;
    padding: 10px 24px;
    font-size: 16px;
    color: #ec4899;
    border: 2px solid #ec4899;
    background: transparent;
    border-radius: 40px;
    cursor: pointer;
    transition: all 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

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







// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from '../../store/slices/ProductSlice';
// import { FaStar } from 'react-icons/fa';
// import cor from '../../assets/image/Vector (4).png';
// import LikeButton from '../LikeButton';
// import strelka from "../../assets/icon/Vector 12.png";
// import { Link } from 'react-router-dom';

// const PhoneCard = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.product.items)
//   const status = useSelector((state) => state.product.status)
//   const next = useSelector((state) => state.product.next)
//   const [visibleCount, setVisibleCount] = useState(6);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchProducts());
//     }
//   }, [dispatch, status]);

//   const handleLoadMore = () => {
//     if (visibleCount < products.length) {
//       setVisibleCount((prev) => prev + 6);
//     } else if (next && status !== 'loading') {
//       dispatch(fetchProducts(next));
//       setVisibleCount((prev) => prev + 6);
//     }
//   };

//   return (
//     <>
//       <Grid>
//         {products.slice(0, visibleCount).map((product) => (
//   <Link
//     to={`/product/${product.id}`} 
//     key={product.id} 
//     style={{ textDecoration: 'none', color: 'inherit' }}
//   >
//     <Card>
//       <LikeButton />
//       <img
//         src={product.images[0]?.image || 'https://via.placeholder.com/200'}
//         alt={product.title}
//         style={{ width: '100%', height: '200px', objectFit: 'contain' }}
//       />
//       <div style={{ padding: '16px' }}>
//         <h3>{product.title}</h3>
//         <p>{product.characteristics}</p>
//         <p style={{ fontWeight: 'bold' }}>{product.price} сом</p>
//         <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
//           <FaStar color="#f43f5e" />
//           <span>{product.stars}</span>
//           <span>{product.feedbacks} отзывов</span>
//         </div>
//       </div>
//       <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
//         <img src={cor} alt="basket" />
//       </div>
//     </Card>
//   </Link>
// ))}

//       </Grid>
//       {(visibleCount < products.length || next) && (
//         <LoadMoreButton onClick={handleLoadMore} disabled={status === 'loading'}>
//           Показать ещё
//           {status === 'loading' ? <Spinner /> : <Smg src={strelka} alt="стрелка" />}
//         </LoadMoreButton>
//       )}
//     </>
//   );
// };

// export default PhoneCard;

// const Grid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     gap: 14px;
//     padding: 24px;
//     margin: 0 auto;
//     max-width: 1000px;
//   `;

// const Card = styled.div`
//     width: 260px;
//     height: 384px;
//     position: relative;
//     background: white;
//     border-radius: 16px;
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//     overflow: hidden;
//   `;

// const LoadMoreButton = styled.button`
//     width: 224px;
//     height: 42px;
//     display: block;
//     margin: 20px auto;
//     padding: 10px 24px;
//     font-size: 16px;
//     color: #ec4899;
//     border: 2px solid #ec4899;
//     background: transparent;
//     border-radius: 40px;
//     cursor: pointer;
//     transition: all 0.3s ease;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 8px;

//     &:disabled {
//       opacity: 0.6;
//       cursor: not-allowed;
//     }
//   `;

// const Smg = styled.img`
//     width: 11px;
//     height: 11px;
//   `;

// const Spinner = styled.div`
//     border: 3px solid rgba(0, 0, 0, 0.1);
//     border-left-color: #ec4899;
//     border-radius: 50%;
//     width: 18px;
//     height: 18px;
//     animation: spin 1s linear infinite;

//     @keyframes spin {
//       to {
//         transform: rotate(360deg);
//       }
//     }
//   `;