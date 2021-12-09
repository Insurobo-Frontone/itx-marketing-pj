import React from "react";             
import styled from "styled-components";
import visual from "../img/main/recruitVisual.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'
;
import "../style/Swiper.css";
import "swiper/swiper.min.css";
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
        spaceBetween={6}
        slidesPerView={4}
        breakpoints={{
          "1261": {
            "spaceBetween": 55
          }
        }}
      > 
        {Card.map((dt) => (
          <SwiperSlide 
            key={dt.id}
          >
            <p>{dt.title}</p>
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
  padding: 5.26% 0% 9.7% 1.4%;
  width: 116.35%;
  background-color: #F8F8F8;
  border-radius: 366.5px 0 0 366.5px;
  margin-left: 233px;
  height: 33.9%;
  position: absolute;
  bottom: 2.9657%;
  @media (max-width: 700px) {
    margin-left: 20px;
    width: 151.68%;
    padding: 5.26% 0% 9.7% 3%;
    bottom: 0;
  }
`;
const StyleSwiper = styled(Swiper)`
  /* box-sizing: border-box; */
   .swiper-slide{
    border-radius: 46px;
    background-color: #FFFFFF;
    padding: 68px 42px 287px 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 30;
    @media (max-width: 700px) {
      padding: 26px 18px 109px;
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
      position: relative;
      width: 45px;
      height: 45px;
      ::after {
        position: absolute;
        top: calc(50% - 3px);
        content: "";
        width: 100%;
        height: 3px;
        background-color: #1a1a1a;
      }
      ::before {
        position: absolute;
        left: calc(50% - 3px);
        content: "";
        width: 3px;
        height: 100%;
        background-color: #1a1a1a;
      }
      @media (max-width: 700px) {
        width: 15px;
        height: 15px;
        ::after {
          top: calc(50% - 2px);
          height: 2px;
        }
        ::before {
          left: calc(50% - 2px);
          width: 2px;
        }
      }
    }
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active{
    background-color: #B8292D;
    color: #FFFFFF;
    padding: 75px 47px 380px 35px;
    > div {
      ::after {
        background-color: #FFFFFF;
      }
      ::before {
        background-color: #FFFFFF;
      }
    }
    @media (max-width: 700px) {
      padding: 26px 18px 168px;
    }
  }
`;



