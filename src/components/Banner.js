import React from 'react'
import styled from 'styled-components';

const BannerContainer = styled.section`
  position: relative;
  padding-top: 56.25%;
  background-repeat: no-repeat;
  background-size: cover;
  > div {
    position: absolute;
    bottom: -18px;
    
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
