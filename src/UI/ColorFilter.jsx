import { useState } from 'react';
import styled from 'styled-components';
import ColorCheckbox from './galocha/ColorCheckbox';

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
      {Object.entries(colors).map(([label, hex]) => (
        <ColorCheckbox
          key={label}
          id={label}
          label={label.charAt(0).toUpperCase() + label.slice(1)}
          color={hex}
          checked={selectedColor === label}
          onChange={() => handleChange(label)}
        />
      ))}
    </FilterContainer>
  );
};

export default ColorFilter;
  
const FilterContainer = styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 16px;
    width: 265px;
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
