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
        </SectionTitle>
        <p>ITX 마케팅과 함께할 다양한 분야의 전문가를 기다립니다.</p> 
        <VisualBox />
        <StyleSwiper
        loop={true}
        spaceBetween={0}
        slidesPerView={4.5}
        breakpoints={{
          "700": {
            "slidesPerView": 2.5,
            "spaceBetween": 0,
            "pagination": false
          },
          "1261": {
            "slidesPerView": 4.5,
            "spaceBetween": 0
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
      </SectionContainer>
  );
};

export default Recruit;

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 13.9% 0 0 7.8125%;

  > p {
    position: absolute;
    font-size: 1.25rem;
    color: #444444;
    padding-top: 1.1%

  }
`;

const SectionTitle = styled.div`
  border-bottom: 3px solid #1A1A1A;
  /* padding-top: 15.6%;
  padding-left: 7.8%;
  padding-bottom: 25px; */

  > h2 {
    font-size: 3rem;
    font-family: 'GoyangDeogyang';
    color: #1A1A1A;
    padding-bottom: 1.1%;
    > span {
      font-family: 'GoyangIlsan';
      display: inline-block;
      font-weight: 300;
    }
  }
`;




const VisualBox = styled.div`
  background-image: url(${visual});
  background-repeat: no-repeat;
  background-position: 24% 1%;
  margin-left: 32.1%;
  padding-top: 70%;
`;

const StyleSwiper = styled(Swiper)`
  position: absolute;
  bottom: 0;
  padding: 117px 0 116px 36px;
  background-color: aqua;
  border-radius: 366.5px;
   .swiper-slide{
    border: 46px;
    background: #cccccc;
    margin-right: 55px;
  }
`;


// const BoxContainer = styled.div`
//   position: relative;
//   top: 45.5rem;
//   left: 8.45rem;
//   background-color: #f8f8f8;
//   height: 733px;
//   border-top-left-radius: 18.325rem;
//   border-bottom-left-radius: 18.325rem;
// `;
