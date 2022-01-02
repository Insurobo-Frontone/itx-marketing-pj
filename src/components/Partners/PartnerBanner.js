import React from 'react'
import styled from 'styled-components';
import bannerMb from '../../img/sub/partnersVisualMb.png';
import banner from '../../img/sub/partnersVisual.png';
import Illust from '../../img/sub/partnersIllust.png';

const BannerContainer = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${banner});
  > div {
    > img {
      height: 352px;
    }
    > .text-wrap {
      padding: 25.13% 0 5.3% 7.8%;
      > h2 {
        color: #1A1A1A;
        font-size: 2rem;
        font-family: 'GoyangDeogyang';
        padding-bottom: 2.5%;
        > strong {
        color: #B8292D;
        }
      }
      > p {
        line-height: 1.3rem;
      }
    }
  }
@media (max-width: 700px) {
  background-position: right center;
  background-size: 110%;
  background-position: 0% 60%;
  background-image: url(${bannerMb}) !important;
  > div {
    width: 100%;
    > img {
      height: 119px;
    }
    > .text-wrap{
        padding: 40% 0 59% 7.8%;
        width: 100%;
        > h2 {
          font-size: 1.75rem;
          /* padding-bottom: 3%; */
        }
        > p {
          font-size: 0.8125rem;
          padding: 0;
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
