import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";       
import styled from "styled-components";
import "swiper/swiper.min.css";

import visual from "../img/main/recruitVisual.png";
import plusbtn from "../img/main/plusBtnBlack.svg";
import plusbtnreverse from "../img/main/plusBtnWhite.svg";


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
 // const swiperRef = useRef(null);

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
            // ref={swiperRef}
            loop={true}
            slideToClickedSlide={true}
            spaceBetween={6}
            slidesPerView={4.27}
            speed={1000}
            breakpoints={{
            700: {
              spaceBetween: 55,
              // slidesPerView: 5
              }
            }}
      > 
        {Card.map((dt) => (
          <SwiperSlide 
            key={dt.id}
            id={dt.id}
          >
            <p>{dt.title}<Link to='#'></Link></p>
            <div></div>
          </SwiperSlide>
        ))} 
        </StyleSwiper> 
        </SlideContainer>
      </SectionContainer>
  );
};

export default Recruit;

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 15.7% 0 10%;
  overflow: hidden;
 
  @media (max-width: 700px) {
    padding: 39.6% 0 57% 0;
  }
`;

const SectionTitle = styled.div`
  margin-left: 5.333333333333333%;
  > h2 {
    font-size: 3rem;
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
  > h2 {
      font-size: 1.25rem;
      border-bottom: 2px solid #1A1A1A;
    }
  > p {
      font-size: 0.8125rem;
      line-height: 14.47px;
    }
  }
  
`;

const VisualBox = styled.div`
  width: 100%;
  margin-left: 29.5%;
  padding-top: 79.2%;
  background-image: url(${visual});
  background-repeat: no-repeat;
  background-position: 18% 1%;
  background-size: cover;

  @media (max-width: 700px){
    padding-top: 125%;
    margin-left: 0;
    background-size: 230%;
    background-position: 30% -40%;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  margin-left: 12.13541666666667%;
  width: 100%;
  /* width: 116.3541666666667%; */
  align-items: center;
  position: absolute;
  bottom: 5%;
  background-color: #F8F8F8;
  padding: 6.1% 0 6.1% 1.66%;
  border-radius: 366.5px 0 0 366.5px;
  align-items: center;

  @media (max-width: 700px) {
    margin-left: 5.333333333333333%;
    width: 151.68%;
    /* padding: 9.5% 0% 9.7% 3%; */
    bottom: 0%;
  }
`;
const StyleSwiper = styled(Swiper)`
    /* height: 100%; */
   .swiper-slide{
    border-radius: 46px;
    background-color: #FFFFFF;
    padding: 3.1% 2.12% 15.66% 2.12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background .3s;
    
    @media (max-width: 700px) {
      /* padding: 26px 18px 109px; */
      border-radius: 15px;
    }
    > p {
      font-size: 1.5rem;
      font-family: "GoyangDeogyang";
      @media (max-width: 700px) {
        font-size: 0.8125rem;
      }
    }
    > div {
      width: 45px;
      height: 45px;
      background-image: url(${plusbtn});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      @media (max-width: 700px) {
        width: 15px;
        height: 15px;
      }
    }
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active{
    background-color: #B8292D;
    color: #FFFFFF;
    padding: 3.9999% 2.5% 20.2% 1.9%;
    > div {
      background-image: url(${plusbtnreverse});
    }
    @media (max-width: 700px) {
      /* padding: 26px 18px 168px; */
    }
  }
`;



