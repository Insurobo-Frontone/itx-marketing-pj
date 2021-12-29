import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import  { ReactComponent as ArrowBtn } from '../img/common/ArrowShortBtn.svg';

const PrimaryButton = styled.button`
  background-color: #B8292D;
  font-size: 0.9rem;
  color: #FFFFFF;
  border-radius: 95px;
  box-shadow: -1px 6px 12px rgba(114, 0, 3, 0.25);
  opacity: 0.95;
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  transition: bacground .3s ease-in-out;

  :hover {
    opacity: .8;
    padding: 0 1%;
    background-color: #C22229;
  }
  :hover > p {
    transform: translateX(0);
  }
  :hover > .arrow-icon {
    transform: translateX(0);
    opacity: 1;
  }
  > p{
    transform: translateX(30px);
    transition: .5s;
  }
  .arrow-icon {
    width: 35px;
    height: 8.55px;
    opacity: 0;
    transform: translateX(-30px);
    transition: .5s;
  }
  @media (max-width: 700px) {
    font-size: 0.625rem;
    width: 85px;
    height: 25px;
    font-size: 0.625rem;
    box-shadow: none;
    opacity: 1;
    .arrow-icon {
    display: none;
  }
  > p{
    transform: translateX(0);
   }
  }
`;

const Button = (props) => {
  return (
    <PrimaryButton>
      <p>{props.primary}</p>
      <ArrowBtn stroke="#FFFFFF" className='arrow-icon'/>
    </PrimaryButton>
  )
}

export default Button;
