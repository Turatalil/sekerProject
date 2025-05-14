import React from 'react';
import styled from 'styled-components';

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
      border-left: 2px solid #ff69b4;
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
      opacity: 1;
    }
  }
`;

const CustomCheckbox = ({ label, checked, onChange, id }) => (
  <CheckboxItem htmlFor={id}>
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <span />
      {label}
    </CheckboxWrapper>
  </CheckboxItem>
);

export default CustomCheckbox;
