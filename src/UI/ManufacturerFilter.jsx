import { useState } from 'react';
import styled from 'styled-components';
import CustomCheckbox from "./galocha/CustomCheckbox"

const brands = ['Apple', 'Nokia', 'Realme', 'Samsung', 'Xiaomi'];

const ManufacturerFilter = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const handleChange = (brand) => {
    setSelectedBrand(selectedBrand === brand ? null : brand);
  };
  return (
    <FilterContainer>
      <FilterTitle>Производитель</FilterTitle>
      {brands.map((brand) => (
        <CustomCheckbox
          key={brand}
          id={brand.toLowerCase()}
          label={brand}
          checked={selectedBrand === brand}
          onChange={() => handleChange(brand)}
        />
      ))}
    </FilterContainer>
  );
};

export default ManufacturerFilter;

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