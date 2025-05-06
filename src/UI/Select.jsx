import React, { useState } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
`;

const StyledSelect = styled.select`
  background-color: #f472b6; 
  color: white; 
  border: 2px solid white; 
  border-radius: 8px; 
  padding: 6px 24px 6px 8px;
  width: 120px;
  font-size: 14px; 
  transition: background-color 0.2s ease; 
  appearance: none; 
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>"); /* Кастомная белая стрелка */
  background-repeat: no-repeat;
  background-position: right 8px center; 
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(244, 114, 182, 0.5); 
  }
  
  &:hover {
    background-color: #ec4899; 
  }
`;

const Select = () => {
  const [selectedPrice, setSelectedPrice] = useState('');

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const priceOptions = [
    { value: '', label: 'Цене' },
    { value: '1000', label: '1000 ₽' },
    { value: '2000', label: '2000 ₽' },
    { value: '3000', label: '3000 ₽' },
    { value: '4000', label: '4000 ₽' },
    { value: '5000', label: '5000 ₽' },
  ];

  return (
    
    <SelectWrapper>
      <StyledSelect
        id="price-select"
        value={selectedPrice}
        onChange={handlePriceChange}
      >
        {priceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;