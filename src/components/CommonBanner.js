import React from 'react'
import styled from 'styled-components';

import Overay from './Overay';

const CommonBanner = (props) => {
  return (
    <BannerContainer style={{backgroundImage: `url(${props.img})`}}>
      <div className='text-wrap'>
        <h2>
         <strong>{props.strong}</strong>{props.title}
        </h2>
        <p>{props.subtxt}</p> 
      </div>
      <Overay />
    </BannerContainer>
  )
}

export default CommonBanner;

const BannerContainer = styled.section`
 position: relative;
  padding-top: 52.09%;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (max-width: 700px) {
    padding-top: 162%;
    background-position: center top;
    background-size: cover;
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
      font-size: 2.5rem;
      > strong {
        color: #B8292D;
      }
    }
      > p {
        padding-top: 11.4%;
        line-height: 1.4rem;
        font-size: 1.25rem;
      }
      @media (max-width: 700px) {
        width: 56%;
        top: 31.5%;

        > h2 {
          font-size: 1.75rem;
          line-height: 2.15625rem;
        }
        > p {
          font-size: 0.8125rem;
          line-height: 1.25rem;
          padding-top: 8.8%;
        }
      }
    }
`;
