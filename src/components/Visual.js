import React from 'react'
import styled from 'styled-components';

import introVisual from '../img/sub/summaryVisual.svg';
import introVisualMb from '../img/sub/summaryVisualMb.svg';

const VisualContainer = styled.section`
  width: 100%;
  padding: 11.25% 7.8125% 5.3%;
  background-color: #F8F8F8;
  @media (max-width: 700px) {
    padding: 50% 0 0 6.3%; 
  }
`;
const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const TextWrap = styled.div`

  
  > h1 {
    font-size: 2rem;
    color: #1A1A1A;
    line-height: 2.375rem;
    font-family: 'GoyangDeogyang';
    padding-bottom: 6.8%;
   
    br {
    display: none;
    }
  }
  > p {
    font-size: 1rem;
    line-height: 1.366666666666667rem;
  }

  @media (max-width: 700px) {
   
    > h1 {
      font-size: 1.75rem;
      padding-bottom: 12.8%;

      br {
        display: block;
      }
    }
    > p {
      font-size: 0.8125rem;
    }
  }
 
`;
const ImgWrap = styled.div`
  padding: 50%;
  background-image: url(${introVisual});
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 700px) {
    background-image: url(${introVisualMb});
    padding: 79% 90%;
  } 
  
  @media (max-width: 700px) {
   
    flex-grow: 1;
    
  }`;



const Visual = () => {
  return (
    <VisualContainer>
      <ContentWrap>
        <TextWrap>
          <h1>
            <p>보험을 넘어<br /> 금융으로의 도약!</p> 
            <span>ITX 마케팅</span>
          </h1>
          <p>
            “열린시장”을 통해 FP에게 다양한 영업채널을 제공하고<br />
            소비자가 쉽고&nbsp;빠르게 금융상품을 구매할 수 있는 채널을<br />
            구축하고&nbsp;있습니다.
          </p>
        </TextWrap>
        <ImgWrap />
      </ContentWrap>
    </VisualContainer>
  )
}

export default Visual
