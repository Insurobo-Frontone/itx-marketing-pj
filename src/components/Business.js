import React from 'react'
import { Link } from 'react-router-dom';
// import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper";

import icon1 from "../img/main/insurancePlus.svg";
import icon2 from "../img/main/corporateConsulting.svg";
import icon3 from "../img/main/inheritanceResearch.svg";
import rectangle from "../img/main/bigRectangle.svg";

import styled from 'styled-components';
import "../style/Swiper.css";
const card = [
  {
    id: 0,
    title: '보험플러스',
    description: '병원, 마트 등 고객친화형 플랫폼\n보장분석 등 total 보험서비스 제공',
    icon: icon1,
  },
  {
    id: 1,
    title: '법인컨설팅',
    description: '중소기업과 개인사업자의\n안정적인 기업경영을 위한 컨설팅',
    icon: icon2,
  },
  {
    id: 2,
    title: '상속증여연구소',
    description: '상속 및 증여에 대한\n절세 방법 제시',
    icon: icon3,
  }
]
const SectionContainer = styled.div`
  width: 100%;
  padding: 12.85% 0 15.55% 0;
  background-color: #F8F8F8;
  position: relative;
  @media(max-width: 700px) {
    padding: 74px 0 90px 0;
  }
`;
const TitleBox = styled.div`
  text-align: center;
  > h3 {
    font-size: 3rem;
    line-height: 3.4rem;
    font-family: 'GoyangDeogyang';
    color: #323232;
    @media (max-width: 700px) {
    font-size: 1.25rem;
    line-height: 22.56px;
    }
  }
  > p {
    padding-top: 25px;
    font-size: 1.25rem;
    white-space: nowrap;
    @media (max-width: 700px) {
    font-size: 0.8125rem;
    line-height: 14.47px;
    padding-top: 10px;
    }    
  }
`;
const StyleSwiper = styled(Swiper)`
  width: 100%;
  flex-direction: row nowrap;
  padding: 12.1% 7.5% 11% 7.5%;
  display: flex;
  justify-content: space-between;
  & .swiper-pagination-bullet{
    display: none;
  }
 
  @media (max-width: 700px) {
    padding: 88px 7.5% 59px 7.5%;
    .swiper-slide-duplicate,
    .swiper-slide{
      transition: all .3s;
      transform: scale(0.8);
    }
    .swiper-slide-active,
    .swiper-slide-duplicate-active{
      box-shadow: 0px 22px 29px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      border-radius: 21px;
      transform: scale(1);

    }
    .swiper-pagination-bullet {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin: 0 5px !important;
      background-color: #C4C4C4 !important;
      opacity: 1 !important;
      cursor: pointer;
    }
    .swiper-pagination-bullet-active {
      background-color: #C22229 !important;
    }
  }
`;

const CardBox = styled.ul`
  border-radius: 30px;
  padding: 10% 11% 8.3% 14.2%;
  transition: all 0.3s;
  max-width: 500px;
  background-color: #FFFFFF;
  :hover {
    box-shadow: -30px 49px 82px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 1261px) {
    font-size: 1.125rem;
    padding: 31px 23px 31px 30px;
  }
  > .card-icon {
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 1261px) {
      width: 70px;
      height: 70px;
    }
  }
  > .card-title {
    font-family: 'GoyangDeogyang';
    padding: 151px 0 38px 0;
    font-size: 1.5rem;
    color: #323232;
    @media (max-width: 1261px) {
    font-size: 1.125rem;
    padding: 93px 0 18px 0;
    line-height: 20px;
    }
  }
  > .card-desc {
    font-size: 1rem;
    white-space: pre-wrap;
    padding-bottom: 106px;
    @media (max-width: 1261px) {
    font-size: 0.8125rem;
    line-height: 17px;
    padding-bottom: 148px;
    }
  }
  .more-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.8rem;
    line-height: 17.81px;
    @media (max-width: 1261px) {
    font-size: 0.625rem;
    line-height: 11.13px;
    margin-right: 13px;
    }
  }
  > .more-btn::before {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background: #C22229;
    margin-right: 19px;
    @media (max-width: 1261px) {
    margin-right: 13px;
    }
  }
`;
const Rectangle = styled.div`
  width: 15.625%;
  position: absolute;
  right: 7.8125%;
  @media (max-width: 700px) {
    width: 27%;
    right: 10.4%;
  }
  > img{
    width: 100%;
    z-index: 10;
    position: absolute;
  }
  .rectangle {
    display: flex;
    width: 41.08px;
    height: 41.08px;
    background-color: #313131;
    box-shadow: 17px 9px 18px rgba(0, 0, 0, 0.3);
    transform: rotate(76.29deg);
    margin-bottom: 133.82px;
    margin-left: calc(100% - 13.93px);

    @media (max-width: 700px) {
      width: 13.93px;
      height: 13.93px;
      margin-bottom: 32.97px;
    }
  }
   
`;

const Business = () => {

  SwiperCore.use([Pagination]);

  return (
    <SectionContainer>
      <TitleBox>
        <h3>Business 플랫폼</h3>
        <p>ITX마케팅의 다양한 비지니스를 경험해 보세요.</p>
      </TitleBox>
      <StyleSwiper
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1.2}
        spaceBetween={22}
        breakpoints={{
          700: {
            slidesPerView: 3,
            spaceBetween: 66,
            centeredSlides: false
          }
        }}
      > 
      {card.map((dt) => (
        <SwiperSlide 
          key={dt.id}
        >
          <CardBox>
            <li
              className="card-icon"
              style={{backgroundImage:`url(${dt.icon})`}}></li>
            <li className="card-title">{dt.title}</li>
            <li className="card-desc">{dt.description}</li>
            <li className="more-btn"><Link to="#">자세히 보기</Link></li>
          </CardBox>  
        </SwiperSlide>
        ))} 
      </StyleSwiper>
      <Rectangle>
        <div className="rectangle"></div>
        <img src={rectangle} alt="Rectangle" />
      </Rectangle>
    </SectionContainer>

  )
}

export default Business;
