import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

import banner1 from "../img/main/mbSlide1.png"
import banner2 from "../img/main/mbSlide2.png"
import banner3 from "../img/main/mbSlide3.png"
import styled from 'styled-components';

const data = [
  {
    id: 0,
    page: '01/03',
    title: 'ITX 마케팅',
    description: '보험 마케팅의 혁신을 선도하는',
    image: banner1
  },
  {
    id: 1,
    page: '02/03',
    title: 'ITX Business',
    description: 'FP가 사업을 주도하는',
    image: banner2
  },
  {
    id: 2,
    page: '03/03',
    title: '보험플러스',
    description: '생활에 안심을 더하는 보험브랜드',
    image: banner3
  }
]


const Page = styled.div`
  position: absolute;
  top: 81.48148148148148%;
  font-size: 1rem;
  color: #FFFFFF;
  line-height: 22.56px;
  left: 9.270833333333333%;
  font-family: "GoyangDeogyang B";
  @media (max-width: 700px) {
    position: absolute;
    font-size: 0.625rem;
    line-height: 11.28px;
    top: 84.33098591549296%;
  }
`;
const Overay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.3);
`;

const StyleSwiper = styled(Swiper)`
  .swiper-slide-active .slide-img,
.swiper-slide-duplicate-active .slide-img{
  background-size: 130%;
  background-position: left 14%;
}
.slide-img{
  backface-visibility: hidden;
  transition: background 5s ease;
  background-size: 200%;
  padding: 56.25% 7.8125% 0 7.8125%;
  background-repeat: no-repeat;
}
@media (max-width: 700px) {
  .swiper-slide-active .slide-img,
  .swiper-slide-duplicate-active .slide-img{
    width: 100%;
    padding-top: 151.5%;
    overflow:hidden;
    background-position: 45% center;
    background-size: cover;
    transform: translateZ(0);
}
  .slide-img{
    transform: perspective(150px) translateZ(30px);
    transition: transform 3s ease;
  }
  
}
.text-wrap{
  color: #FFFFFF;
  z-index: 10;
  position: absolute;
  top: 37.96296296296296%;
  transform: translateX(-200px);
  transition: 3s;
}
.swiper-slide-active .slide-img > .text-wrap,
.swiper-slide-duplicate-active .slide-img > .text-wrap{
  transform: translateX(0);
}
.text-wrap > h2{
  font-size: 3rem;
  line-height: 67.68px;
  font-family: 'GoyangDeogyang';
  padding-top: 13px;
}  
.text-wrap > p {
  font-size: 1.5rem;
  line-height: 33.39px;
}
@media (max-width: 700px){
  .text-wrap{
    top: 65.3169014084507%;
  }
  .text-wrap > h2 {
    font-size: 1.75rem;
    line-height: 31.58px;
    padding-top: 7px;
  }
  .text-wrap > p {
    font-size: 0.9375rem;
    line-height: 14.47px;
  }
}

/* swiper pagination */
.swiper-pagination-progressbar {
  top: 79.81481481481481% !important;
  left: 9.270833333333333% !important;
  background-color: #fff !important;
  width: 46.875% !important;
  height: 5px !important;
  border-radius: 0  !important;
  transition-duration: 2s !important;
}

.swiper-pagination-progressbar-fill {
  background-color: #C22229 !important;
  border-radius: 0  !important;
  transition-duration: 2s !important;
}
@media (max-width: 700px){
  .swiper-pagination-progressbar{
    top: 82.92253521126761% !important;
    width: 64% !important;
    height: 2px !important;
  }
}
`;

const MainBanner = () => {
  SwiperCore.use([Autoplay, Pagination, EffectFade]);
  
  const swiperParams = {
    modules: [Pagination, EffectFade],
    loof: true,
    slidsPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      type: 'progressbar',
    }
  }


  return (
    <StyleSwiper {...swiperParams}>
      {data.map((dt) => (
          <SwiperSlide key={dt.id}>
          <div
            className="slide-img"
            style={{backgroundImage:`url(${dt.image})`}}
          >
            <Overay />
            <div
              className="text-wrap"
            >
              <p>{dt.description}</p>
              <h2>{dt.title}</h2>
            </div>
          </div>
          <Page>{dt.page}</Page>
        </SwiperSlide>
      ))}
      
    </StyleSwiper>
  );
}

export default MainBanner;


