import React from 'react'
import styled from 'styled-components';

import banner from '../../img/sub/recruitVisual.png';

const BannerContainer = styled.section`
  position: relative;
  padding-top: 52.09%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${banner});
  
  @media (max-width: 700px) {
  /* padding-top: 154.8%;
  background-position: right center;
  background-size: 110%;
  background-position: 0% 60%; */
}
> .text-wrap {
    position: absolute;
    top: 50%;
    left: 7.708333333333333%;
    transform: translateY(-20%);
    color: #FFFFFF;
    z-index: 3;
    display: flex;
    flex-direction: column;
    
      > h2 { 
        font-size: 2rem;
        font-family: 'GoyangDeogyang';
        > strong {
        color: #B8292D;
        }
      }
      > p {
        padding-top: 10%;
        line-height: 1.4rem;
      }
    }
`;
const Overay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.3);
`;

const PartnerBanner = () => {
  return (
    <BannerContainer>
      <div className='text-wrap'>
        <h2>
          ITX Marketing<strong> R</strong>E
          <strong>C</strong>RUIT
        </h2>
        <p>ITX 마케팅의 미래를 이끄는 것은 도전적인 여러분들입니다!<br />
          창의적인 생각을 하고 도전적인 인재를 기다립니다.</p> 
      </div>
      <Overay />
    </BannerContainer>
  )
}

export default PartnerBanner;