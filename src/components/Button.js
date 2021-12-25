import React from 'react'
import styled from 'styled-components';


const PrimaryButton = styled.button`
  background-color: #B8292D;
  font-size: 0.9rem;
  color: #FFFFFF;
  border-radius: 95px;
  box-shadow: -1px 6px 12px rgba(114, 0, 3, 0.25);
  opacity: 0.95;
  width: 200px;
  height: 60px;
`;

const Button = (props) => {
  return (
    <PrimaryButton>
      {props.primary}
    </PrimaryButton>
  )
}

export default Button
