import React from 'react'
import styled from 'styled-components';
import banner from '../../img/sub/platformbanner.png';
import Overay from '../Overay';

const PersonalBanner = () => {
  return (
    <BannerContainer>
      <div className='text-wrap'>
        <h2>
         <strong>B</strong>usiness
        </h2>
        <p>비지니스 플랫폼</p> 
      </div>
      <Overay />
    </BannerContainer>
  )
}

export default PersonalBanner;

const BannerContainer = styled.section`
 position: relative;
  padding-top: 52.09%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${banner});
  
  @media (max-width: 700px) {
  padding-top: 154.8%;
  background-position: right center;
  background-size: 290%;
  background-position: 10% 5%;
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
