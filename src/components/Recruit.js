import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from "swiper/react";       
import styled from "styled-components";
// import "swiper/swiper.min.css";
import visual from "../img/main/recruitVisual.png";
import { ReactComponent as PlusBtn } from "../img/common/plusBtn.svg";

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
const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20.56% 0 19%;
  overflow: hidden;

  @media (max-width: 700px) {
    padding: 28.5% 0 70%;
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

const CardContainer = styled.div`
  position: absolute;
  bottom: 5%;
  width: 116.3541666666667%;
  background-color: #F8F8F8;
  padding: 6.15% 0 6.1% 1.66%;
  border-radius: 366.5px 0 0 366.5px;
  margin-left: 12.13541666666667%;
  display: flex;
  flex-flow: row nowrap;

  .clearfix::after {
   content: "";
   display: block;
   clear: both;
  }
  @media (max-width: 700px) {
    padding: 10% 0% 10.4% 0%;
    margin-left: 5.714285714285714%;
    bottom: 8%;
  }
`;
const CardSlide = styled.div`
    border-radius: 46px;
    background-color: #FFFFFF;
    padding: 3.6% 2.26% 15.2%;
    width: 400px;
    height: 400px;
    margin-right: 2.93%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    float: left;
    display: flex;
    

    .plus-btn{
      stroke: #323232;
      stroke-width: 3px;
      width: 45px;
      height: 45px;
      @media (max-width: 700px) {
      stroke-width: 2px;
      width: 15px;
      height: 15px;
      }
    }
    @media (max-width: 700px) {
      padding: 6.9% 4% 28%;
      border-radius: 15px;
      width: 50%;
      overflow: hidden;
      /* display: block; */
    }
    
    > p {
      font-size: 1.5rem;
      line-height: 2.25rem;
      font-family: "GoyangDeogyang";

      @media (max-width: 700px) {
        font-size: 0.8125rem;
      }
    }
  
  .swiper-slide-active,
  .swiper-slide-duplicate-active{
    background-color: #B8292D;
    color: #FFFFFF;
    padding: 3.9999% 2.5% 20.2% 1.9%;
    @media (max-width: 700px) {
      padding: 6% 4% 40%;
    }
  }
`;

const Recruit = () => {
  // const [swiper, setSwiper] = useState(null);
  
  // const swiperParams = {
  //   onSwiper: setSwiper,
  //   loop: true,
  //   slidesPerView:2.6,
  //   slideToClickedSlide: true,
  //   slidesBetween: 10,
  //   speed: 1000,
  //   breakpoints: {
  //     700: {
  //       slidesPerView: 4.5,
  //       spaceBetween: 55,
  //     }
  //   }
  // }
  const TOTAL_SLIDES = 4;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null)
  const handleSlider = () => {
    
  }
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
        <CardContainer> 
        {Card.map((dt) => (
          <CardSlide key={dt.id} onClick={handleSlider} ref={slideRef}>
            <p>{dt.title}</p>
            <Link to='#'>
              <PlusBtn className="plus-btn" />
            </Link>
          </CardSlide>
        ))} 
        <div className="clearfix"></div>
        </CardContainer> 
      </SectionContainer>
  );
};

export default Recruit;





