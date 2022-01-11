import React from 'react'

import infoInquiry from '../../img/sub/infoInquiry.svg';
import infoEmail from '../../img/sub/infoEmail.svg';
import infoKeeper from '../../img/sub/infoKeeper.svg';
import styled from 'styled-components';

const Wrap = styled.ul`
  display: flex;
  justify-content: center;
  padding: 8% 0;
  > li {
    display: flex;
    font-family: 'GoyangDeogyang';
    align-items: center;
    justify-content: center;
    line-height: 2rem;
    width: 33.33333333333333%;
    > div {
      margin-right: 3%;
    }
  }
  
  @media(max-width: 700px) {
   flex-direction: column;
   padding: 10%;
   > li {
      width: 100%;
      line-height: 1.875rem;
      justify-content: flex-start;
      font-size: 0.8125rem;
    > div {
      width: 30px;
      height: 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2%;
    }
   }
  }
`;

const Info = (props) => {
  return (
    <Wrap>
      <li>
        <div><img src={infoInquiry} alt='문의처'/></div>
        <p>문의처 : 02 - 222 - 2222</p>
      </li>
      <li>
        <div><img src={infoEmail} alt='이메일'/></div>
        <p>{props.email}</p>
      </li>
      <li>
        <div><img src={infoKeeper} alt='담당자'/></div>
        <p>{props.keeper}</p>
      </li>
    </Wrap>
  )
}

export default Info
