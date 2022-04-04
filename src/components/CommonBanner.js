import React from 'react'
import styled, { css } from 'styled-components';
import Overay from './Overay';

const CommonBanner = ({
  consulting, strong, title, subtxt, img
}) => {
  return (
    <BannerContainer consulting={consulting} style={{backgroundImage: `url(${img})`}}>
      <div className='text-wrap'>
        <h2>
         <strong>{strong}</strong>{title}
        </h2>
        <p>{subtxt}</p> 
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
  background-position: center left;
  
  ${props => props.consulting && css`
    background-position: 0 0;
    background-size: 125%;
  `}

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
