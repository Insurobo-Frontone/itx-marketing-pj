import React from 'react'
import styled from 'styled-components';

import bannerMb from '../../img/sub/partnersVisualMb.png';
import banner from '../../img/sub/partnersVisual.png';
import Illust from '../../img/sub/partnersIllust.png';


const BannerContainer = styled.section`
  position: relative;
  padding-top: 56.25%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${banner});
  @media (max-width: 700px) {
  padding-top: 154.8%;
  background-position: right center;
  background-size: 110%;
  background-position: 0% 60%;
  background-image: url(${bannerMb}) !important;
}
  > div {
    position: absolute;
    bottom: 0;
    @media (max-width: 700px) {
      width: 33.06666666666667%;
    }
    .text-wrap {
      padding-left: 39%;
      width: 190%;

      > h2 {
        color: #1A1A1A;
        font-size: 2rem;
        font-family: 'GoyangDeogyang';
        > strong {
        color: #B8292D;
        }
      }
      > p {
        line-height: 1.3rem;
        padding: 13.3% 0 19.6% 0;
      }

      @media (max-width: 700px) {
        padding: 0 0 175% 16.8%;
        > h2 {
          font-size: 1.75rem;
        }
        > p {
          font-size: 0.8125rem;
          padding: 4% 0 0 0;

          > br {
            display: none;
          }
        }
      }
    }
  }
`;

const PartnerBanner = () => {
  return (
    <BannerContainer>
      <div>
        <div className='text-wrap'>
          <h2>
            <strong>P</strong>ar
            <strong>T</strong>ners
          </h2>
          <p>핀테크를 함께 이끌어갈 다양한 분야의<br /> 소중한 파트너를 기다립니다.</p> 
        </div>
        <img src={Illust} alt="icon1"/>
      </div>
    </BannerContainer>
  )
}

export default PartnerBanner;
