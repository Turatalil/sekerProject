import React from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 16px;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: ${props => (props.active ? '3px solid #6a5acd' : '1px solid #ccc')};
  transition: border 0.3s;
`;

const ProductImageSwitcher = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <>
      <MainImage src={selectedImage} alt="Selected Product" />
      <Thumbnails>
        {images.map((img, idx) => (
          <Thumbnail
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            onClick={() => setSelectedImage(img)}
            active={selectedImage === img}
          />
        ))}
      </Thumbnails>
    </>
  );
};

export default ProductImageSwitcher;
