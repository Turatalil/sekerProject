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
      border-left: 2px solid #ff69b4; /* Галочка розовый түстө */
      border-bottom: 2px solid #ff69b4;
      transform: rotate(-45deg);
      left: 3px;
      top: 3px;
      opacity: 0;
      transition: opacity 0.3s;
    }
  }

  &:checked + span {
    border-color: #ff5a5f;

    &:before {
      opacity: 1; /* Тандалганда галочка көрүнөт */
    }
  }
`;

const ColorDot = styled.span`
  width: 8px;
  height: 8px;
  position: fixed;
  margin-left: 100px;
  position: absolute;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#ff5a5f'};
  border: ${(props) => (props.color === '#ffffff' ? '1px solid #e0e0e0' : 'none')}; /* Ак түскө гана border */
`;

const ColorFilter = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleChange = (color) => {
    setSelectedColor(selectedColor === color ? null : color);
  };

  const colors = {
    красный: '#ff5a5f',
    черный: '#000000',
    белый: '#ffffff',
    синий: '#0000ff',
    голубой: '#00bfff',
    розовый: '#ff69b4',
  };

  return (
    <FilterContainer>
      <FilterTitle>Цвет</FilterTitle>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="красный"
            checked={selectedColor === 'красный'}
            onChange={() => handleChange('красный')}
          />
          <span />
          Красный
        </CheckboxWrapper>
        <ColorDot color={colors.красный} />
      </CheckboxItem>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="черный"
            checked={selectedColor === 'черный'}
            onChange={() => handleChange('черный')}
          />
          <span />
          Черный
        </CheckboxWrapper>
        <ColorDot color={colors.черный} />
      </CheckboxItem>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="белый"
            checked={selectedColor === 'белый'}
            onChange={() => handleChange('белый')}
          />
          <span />
          Белый
        </CheckboxWrapper>
        <ColorDot color={colors.белый} />
      </CheckboxItem>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="синий"
            checked={selectedColor === 'синий'}
            onChange={() => handleChange('синий')}
          />
          <span />
          Синий
        </CheckboxWrapper>
        <ColorDot color={colors.синий} />
      </CheckboxItem>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="голубой"
            checked={selectedColor === 'голубой'}
            onChange={() => handleChange('голубой')}
          />
          <span />
          Голубой
        </CheckboxWrapper>
        <ColorDot color={colors.голубой} />
      </CheckboxItem>
      <CheckboxItem>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="розовый"
            checked={selectedColor === 'розовый'}
            onChange={() => handleChange('розовый')}
          />
          <span />
          Розовый
        </CheckboxWrapper>
        <ColorDot color={colors.розовый} />
      </CheckboxItem>
    </FilterContainer>
  );
};

export default ColorFilter;