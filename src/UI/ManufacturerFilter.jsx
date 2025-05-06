import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 16px;
  width: 300px;
  margin: 50px auto;
  text-align: left;
  font-family: Arial, sans-serif;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const FilterTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px; /* Жазуу менен нүктөнүн аралыгы 10px */
`;

const CheckboxInput = styled.input`
  display: none;

  & + span {
    width: 16px;
    height: 16px;
    border: 2px solid #ff5a5f;
    border-radius: 4px;
    display: inline-block;
    margin-right: 8px;
    position: relative;
    transition: border-color 0.3s;

    &:before {
      content: '';
      position: absolute;
      width: 8px;
      height: 4px;
      border-left: 2px solid #ff69b4; /* Розовый галочка */
      border-bottom: 2px solid #ff69b4;
      transform: rotate(-45deg);
      left: 3px;
      top: 3px;
      opacity: 0;
      transition: opacity 0.3s;
    }
  }

  &:checked + span {
    &:before {
      opacity: 1; /* Тандалганда галочка көрүнөт */
    }
  }
`;

const ColorDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#ff5a5f'};
  border: ${(props) => (props.color === '#ffffff' ? '1px solid #e0e0e0' : 'none')}; /* Ак түскө border */
`;

const ManufacturerFilter = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleChange = (brand) => {
    setSelectedBrand(selectedBrand === brand ? null : brand);
  };


  return (
    <FilterContainer>
      <FilterTitle>Производитель</FilterTitle>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="apple"
            checked={selectedBrand === 'Apple'}
            onChange={() => handleChange('Apple')}
          />
          <span />
          Apple
        </CheckboxWrapper>
      </CheckboxItem>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="nokia"
            checked={selectedBrand === 'Nokia'}
            onChange={() => handleChange('Nokia')}
          />
          <span />
          Nokia
        </CheckboxWrapper>
      </CheckboxItem>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="realme"
            checked={selectedBrand === 'Realme'}
            onChange={() => handleChange('Realme')}
          />
          <span />
          Realme
        </CheckboxWrapper>
      </CheckboxItem>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="samsung"
            checked={selectedBrand === 'Samsung'}
            onChange={() => handleChange('Samsung')}
          />
          <span />
          Samsung
        </CheckboxWrapper>
      </CheckboxItem>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="xiaomi"
            checked={selectedBrand === 'Xiaomi'}
            onChange={() => handleChange('Xiaomi')}
          />
          <span />
          Xiaomi
        </CheckboxWrapper>
      </CheckboxItem>
    </FilterContainer>
  );
};

export default ManufacturerFilter;