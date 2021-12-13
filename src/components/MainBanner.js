import React, { useState } from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import SwiperCore, {  Autoplay, Pagination, EffectFade } from "swiper";

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


const MainBanner = () => {
  const [swiper , setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  SwiperCore.use([Autoplay, Pagination, EffectFade]);
   
  const swiperParams = {
    onSwiper: setSwiper,
    loop: true,
    onSlideChange: (e) => setMainImageIndex(e.activeIndex),
  }

  return (
    <Swiper
      {...swiperParams}
      ref={setSwiper}
      slidsPerView={1}
      modules={[EffectFade]}
      effect="fade"
      pagination={
        true,{
          "type": "progressbar"
        }
      }
      autoplay={{
        "delay": 4000,
        "disableOnInteraction": false
      }}
    >
      {data.map((dt) => (
        <>
          <SwiperSlide 
          key={dt.id}
        >
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
        
        </>
      ))}
      
    </Swiper>
  );
}

export default MainBanner;


