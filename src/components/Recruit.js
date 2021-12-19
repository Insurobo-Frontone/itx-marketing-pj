import React, { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";       
import styled from "styled-components";
import "swiper/swiper.min.css";
// import "swiper/css/effect-creative.css";

import visual from "../img/main/recruitVisual.png";
import { AddSharp } from '@mui/icons-material';
const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20.56% 0 12.7%;
  overflow: hidden;
  @media (max-width: 700px) {
    padding: 3vh 0 10vh 0;
  }
`;

const SectionTitle = styled.div`
  margin-left: 5.333333333333333%;
  > h2 {
    font-size: 3.13vw;
    font-family: 'GoyangDeogyang';
    color: #1A1A1A;
    padding-bottom: 1.4%;
    border-bottom: 3px solid #1A1A1A;
    > span {
      font-family: 'GoyangIlsan';
      display: inline-block;
      font-weight: 300;
    }
  }
 > p {
    position: absolute;
    font-size: 1.25rem;
    color: #444444;
    padding-top: 1.1%
  }
  @media (max-width: 700px) {
    padding-bottom: 5.7%;
  > h2 {
      font-size: 1.25rem;
      border-bottom: 2px solid #1A1A1A;
    }
  > p {
      font-size: 0.8125rem;
      line-height: 14.47px;
      position: static;
    }
  }
`;

const VisualBox = styled.div`
  width: 100%;
  margin-left: 29.5%;
  padding-top: 79.2%;
  background-image: url(${visual});
  background-repeat: no-repeat;
  background-position: 33.5% 1%;
  background-size: 133%;

  @media (max-width: 700px){
    padding-top: 123%;
    margin-left: 0;
    background-size: 250%;
    background-position: 30% 0;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  margin-left: 12.13541666666667%;
  width: 118vw;
  height: 45vh;
  align-items: center;
  position: absolute;
  bottom: 2.86%;
  background-color: #F8F8F8;
  padding: 6.15% 0 6.1% 1.66%;
  border-radius: 366.5px 0 0 366.5px;
  align-items: center;

  @media (max-width: 700px) {
    margin-left: 5.714285714285714%;
    /* padding: 10% 0% 10.4% 3.1%; */
    bottom: 9.6%;
  }
`;
const StyleSwiper = styled(Swiper)`
   

   .swiper-slide{
    border-radius: 11.5%;
    background-color: #FFFFFF;
    padding: 6.36vh 2.2vw 26.9vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    cursor: pointer;
    transition: background .3s;
    @media (max-width: 700px) {
      padding: 6.9% 5.1% 27.8%;
      border-radius: 10%;
    }
    > p {
      font-size: 1.5rem;
      font-family: "GoyangDeogyang";
      @media (max-width: 700px) {
        font-size: 0.8125rem;
      }
    }
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active{
    background-color: #B8292D;
    color: #FFFFFF;
    padding: 3.9999% 2.5% 20.2% 1.9%;
    @media (max-width: 700px) {
      padding: 7.6% 5.5% 43.6%;
    }
  }
`;

const Card = [
  {
    id: 0,
    title: '개인영업(FP)'
  },
  {
    id: 1,
    title: '법인컨설턴트'
  },
  {
    id: 2,
    title: '전문가그룹'
  },
  {
    id: 3,
    title: '정규직'
  }
]

const Recruit = () => {

  // SwiperCore.use([EffectCreative]);

  return (
      <SectionContainer>
        <SectionTitle>
          <h2>
            <strong style={{color:"#C22229"}}>R</strong>
            e<strong>C</strong>
            r<strong>UIT</strong> 
            <span>&nbsp;ITX Marketing</span>
          </h2>
          <p>ITX 마케팅과 함께할 다양한 분야의 전문가를 기다립니다.</p> 
        </SectionTitle> 
        <VisualBox />
        <SlideContainer>
          <StyleSwiper
            loop={true}
            slideToClickedSlide={true}
            // slidesPerView={2.35}
            // spaceBetween={6}
            // slidesPerView={'auto'}
            speed={1000}
            breakpoints={{
            375: {
              slidesPerView: 2.35,
              slideBetween: 6,
              },
            700: {
              slideBetween: 55,
              }
            }}
          > 
        {Card.map((dt) => (
          <SwiperSlide 
          key={dt.id}
          // onClick={toSlide}
          >
          <p>{dt.title}<Link to='#'></Link></p>
          <AddSharp/>
          </SwiperSlide>
        ))} 
        </StyleSwiper> 
        </SlideContainer>
      </SectionContainer>
  );
};

export default Recruit;





