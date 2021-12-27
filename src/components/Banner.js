import React from 'react'
import styled from 'styled-components';

import bannerMb from '../img/sub/partnersVisualMb.png';

const BannerContainer = styled.section`
  position: relative;
  padding-top: 56.25%;
  background-repeat: no-repeat;
  background-size: cover;

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

      > h2 {
        color: #1A1A1A;
        font-size: 2rem;
        font-family: 'GoyangDeogyang';
        > strong {
        color: #B8292D;
        }
      }

      @media (max-width: 700px) {
      padding: 0 0 165% 16.8%;
        > h2 {
          font-size: 1.75rem;
        }
        > p {
          font-size: 0.8125rem;
        }
      
        
    }
      
       
      > p {
        white-space: pre;
        line-height: 1.3rem;
        padding: 13.3% 0 19.6% 0;
      }
    }
  }
  

`;

const Banner = (props) => {
  return (
    <BannerContainer style={{backgroundImage: `url(${props.visual})`}}>
      <div>
        <div className='text-wrap'>
          <h2>
            <strong>P</strong>ar
            <strong>T</strong>ner
          </h2>
          <p>{props.description}</p>
        </div>
        <img src={props.illust} alt="partners" />
      </div>
      
    </BannerContainer>
  )
}

export default Banner;
