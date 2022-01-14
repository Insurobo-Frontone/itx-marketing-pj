import React from 'react'
import styled, { css } from 'styled-components';


const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  background-color: var(--button-bg-color, #B8292D);
 
  &:hover {
    background-color: var(--button-hover-bg-color, #C22229);
  }
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  color: #FFFFFF;
  border-radius: 95px;
  box-shadow: -1px 6px 12px rgba(114, 0, 3, 0.25);
  opacity: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: bacground .3s ease-in-out;
  

  @media (max-width: 700px) {
    font-size: 0.625rem;
    width: 85px;
    height: 25px;
    font-size: 0.625rem;
    box-shadow: none;
    .arrow-icon {
      display: none;
    }
    
  }
`;

const SIZES = {
  md: css`
    width: 200px;
    height: 60px;
  `,
  lg: css`
    width: 250px;
    height: 60px;
  `,
}
const VARIANTS = {
  hovering: css`
    --hover-bg-color: #C22229;
  `
}
const Button = ({children, size, variant}) => {

  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
    >
      {children}
    </StyledButton>
  )
}

export default Button;
