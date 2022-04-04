import React from 'react'
import styled, { css } from 'styled-components';
import closeBtn from '../../img/common/closeBtnBlack.svg';
import closeBtnWhite from '../../img/common/closeBtnWhite.svg';
const Modal = ({children, recruit, onClick, apply}) => {
 

  return (
    <>
      <ModalContainer>
        <ModalContent recruit={recruit} apply={apply}>
          <ButtonWrap>
            <Button onClick={onClick} recruit={recruit} apply={apply}>X</Button>
          </ButtonWrap>
          {children}
        </ModalContent>
      </ModalContainer>
    </>
  );
}

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0,0,0,.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 9.375%;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  z-index: 1000;
  
  ${props => props.recruit && css`
    width:45%;
    height: 100vh;
    padding: 2.4% 2.4% 2%;
    
  `}

  ${props => props.apply && css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: transparent;
  `}

  @media (max-width: 700px) {
    overflow-y: scroll;
    ${props => props.recruit && css`
      width: 100%;
      height: 100%;
      padding: 5.7%;
    `}
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  
  
`;

const Button = styled.button`
  color: transparent;
  
  ${props => props.recruit && css`
    width: 24px;
    height: 24px;
    background-image: url(${closeBtn});
  `}
  ${props => props.apply && css`
    width: 60px;
    height: 60px;
    background-image: url(${closeBtnWhite});
    position: absolute;
    top: 26%;
    right: 3%;
    
  `}
`;