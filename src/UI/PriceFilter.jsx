import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%); 
  padding: 20px;
  border-radius: 12px;
  width: 300px;
  margin: 50px auto;
  text-align: center;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FilterTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PriceLabel = styled.p`
  margin: 8px 0 15px 0;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const RangeSlider = styled.div`
  position: relative;
  margin: 10px 0;
  height: 4px;
`;

const Track = styled.div`
  position: absolute;
  height: 4px;
  background: #e0e0e0;
  width: 100%;
  z-index: 1;
`;

const Range = styled.div`
  position: absolute;
  height: 4px;
  background: #ff5a5f;
  z-index: 2;
`;

const RangeInput = styled.input`
  width: 100%;
  position: absolute;
  top: -2px;
  left: 0;
  pointer-events: none;
  appearance: none;
  background: none;
  height: 4px;
  z-index: 3;

  &::-webkit-slider-runnable-track {
    height: 4px;
    background: transparent;
  }

  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 12px;
    height: 12px;
    background-color: #ff5a5f;
    border-radius: 50%;
    appearance: none;
    margin-top: -4px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    pointer-events: all;
    width: 12px;
    height: 12px;
    background-color: #ff5a5f;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }

  &::-moz-range-track {
    height: 4px;
    background: transparent;
  }
`;

const RangeValues = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #333;
  margin-top: 8px;
  font-weight: 500;
`;

const PriceFilter = () => {
  const MAX_VALUE = 200000;

  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(150000);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1000);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1000);
    setMaxPrice(value);
  };

  const minPercent = (minPrice / MAX_VALUE) * 100;
  const maxPercent = (maxPrice / MAX_VALUE) * 100;

  return (
    <FilterContainer>
      <FilterTitle>ФИЛЬТРЫ</FilterTitle>
      <PriceLabel>Цена </PriceLabel>
      <RangeSlider>
        <Track />
        <Range
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />
        <RangeInput
          type="range"
          min="0"
          max={MAX_VALUE}
          value={minPrice}
          onChange={handleMinChange}
        />
        <RangeInput
          type="range"
          min="0"
          max={MAX_VALUE}
          value={maxPrice}
          onChange={handleMaxChange}
        />
      </RangeSlider>
      <RangeValues>
        <span>{minPrice.toLocaleString()}</span>
        <span>{maxPrice.toLocaleString()}</span>
      </RangeValues>
    </FilterContainer>
  );
};

export default PriceFilter;
