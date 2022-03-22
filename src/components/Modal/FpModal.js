import React from 'react'
import ReactDOM from "react-dom";

import styled from 'styled-components';
import selectBoxIcon from '../../img/common/selectBoxIcon.svg';

const ModalBody = styled.div`
 background-color: rgba(0, 0, 0, 0.65);
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 998;
`;
const Modal = styled.div`
  background-color: #FFFFFF;
  position: fixed;
  width: 36.45833333333333%;
  max-height: 1000vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 4vh 3vw;
  @media(max-width: 700px){
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .close-btn {
      align-self: flex-end;
    }
    > h2 {
      align-self: center;
      font-size: 1.5rem;
      color: #1A1A1A;
      padding: 2vh 0;
      @media(max-width: 700px){
        font-size: 1.25rem;
        
      }
    }
  }

  select {
    border: 1px solid #BEBEBE;
    border-radius: 8px;
    width: 100%;
    height: 4.8vh;
    color: #BEBEBE;
    padding: 0 20px;
    font-size: 0.8rem;
    background: url(${selectBoxIcon}) no-repeat 97% 50%;
    appearance: none;
    @media(max-width: 700px){
      height: 50px;
      font-size: 1rem;
      border-radius: 5px;
    }
  }
`;
const FpModal = ({ children }) => {

return ReactDOM.createPortal(
  <ModalBody>
    <Modal>
      {children}
    </Modal>
  </ModalBody>,
  document.getElementById("modal")
  );
}

export default FpModal;
