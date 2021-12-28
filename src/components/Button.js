import React, {useState} from 'react'
import styled,{ keyframes } from 'styled-components';
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
  justify-content: center;
  align-items: center;
  padding: 0 2%;

&.hover-btn {
  background-color: #C22229;
  justify-content: space-around;
  opacity: 0.7;
  transition-duration: .4s;
}
&.hover-btn .link-icon {
  width: 35px;
  height: 8.55px;
}

.link-icon {
    /* transform: translateX(-10px);
    transition: transform .2s ease; */
}
/* &.hover-btn:active{
  padding-left: 25px;
} */
/* &.hover-btn:active .link-icon{
  transform: translateX(40px);
} */
  @media (max-width: 700px) {
    font-size: 0.625rem;
    width: 85px;
    height: 25px;
    font-size: 0.625rem;
    box-shadow: none;
    opacity: 1;
  }
`;

const Button = (props) => {
  const [isHovering, setIsHovering] = useState(0);

  return (
    <PrimaryButton
      className={isHovering? 'hover-btn' : null}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      {props.primary}
      {isHovering? <ArrowBtn stroke="#FFFFFF" className='link-icon'/>: ''}
    </PrimaryButton>
  )
}

export default Button;
