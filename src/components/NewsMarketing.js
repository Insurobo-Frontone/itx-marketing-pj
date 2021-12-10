import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import SwiperCore, { Autoplay, Navigation } from 'swiper';

import sinhan from "../img/main/sinhanSimbol.png";
import morebtn from "../img/main/newsMoreBtn.svg";
import nextbtn from "../img/main/nextBtn.svg";
import styled from "styled-components";
const NewsData = [
  {
    id: 0,
    date: '2021-09-17',
    title: '아이티엑스마케팅 ‘건강한 상속·증여연구소’출범',
    content: '보험전문대리점(GA)인 아이티엑스 마케팅(대표이사 전병무)은 상속과 증여에 대한 전문적인 자산관리 서비스를 제공하기 위해 ‘건강한 상속 · 증여 연구소’를····'
  },
  {
    id: 1,
    date: '2021-07-23',
    title: '더 에이치 희망 플러스, ITX마케팅,(주)케이닥, 국제의료봉사···',
    content: '국제의료봉사 간체 “더 에이치 희망 플러스” (이사장 에이티세미콘 김형준 대표) 22일 ITX마케팅, (주)케이닥과 업무협약(MOU)을 체결하였다고····'
  },
  {
    id: 2,
    date: '2021-07-15',
    title: 'GA업체 ‘아이티엑스마케팅’, 오프라인 보험플랫폼···',
    content: '독립법인보험대리점(GA)인 아이티엑스마케팅과 이달부터 보험전문 방문형점포 ‘보험플러스’를 운영한다고 7일 밝혔다. 보험플러스는 보험····'
  },
  {
    id: 3,
    date: '2021-07-15',
    title: '인슈로보·아이티엑스마케팅, 인슈어테크 플랫폼과 오프라인···',
    content: 'AI기반의 차세대 지능형 인슈어테크 기업 (주)인슈로보(대표 서민)는 독립보험대리점(GA), (주)아이티엑스마케팅(대표 전병무)과 보험사업의 온·오프라인····'
  },
]

const AwardData = [
  {
    id: 0,
    date: '2013',
    content: '우수보험대리점 (주최: 신한생명)'
  },
  {
    id: 1,
    date: '2014',
    content: '우수보험대리점 (주최: 신한생명)'
  },
  {
    id: 2,
    date: '2017',
    content: '우수보험대리점 (주최: 신한생명)'
  },
]
const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
     
  }
  > .news-wrap {
    display: flex;
    padding: 19.40% 7.942708333333333% 22.5% 7.8125%;
    overflow: hidden;
    @media (max-width: 700px) {
      padding: 55px 0 96px 20px;
      flex-direction: column;
    }
  }
`;

const DirectNews =  styled.div`
  width: 100%;
  width: 33.85416666666667%;
  padding-right: 138px;
  align-self: center;
  position: relative;
  > h2 {
    font-size: 3rem;
    font-family: 'GoyangDeogyang';
    color: #1A1A1A;
    padding-bottom: 28px;
    > tt {
      font-family: 'GoyangIlsan';
      font-weight: 400;
    }
  }
  @media (max-width: 700px) {
    align-self: flex-start;
    > h2 {
      font-size: 1.25rem;
      padding-bottom: 0;
      > br {
        display: none;
      }
    }
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  line-height: 72px;
  width: 100%;
  @media (max-width: 700px) {
     line-height: 31px;
     position: absolute;
     top: 1355%;
     z-index: 20;
  }
  > p {
    font-size: 1.25rem;
    white-space: nowrap;
    @media (max-width: 700px) {
      font-size: 0.625rem;
    } 
  }
  >span {
    display: inline-block;
    width: 38px;
    height: 38px;
    background-image: url(${morebtn});
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 4.9%;
    @media (max-width: 700px) {
      width: 20px;
      height: 20px;
    } 
  }
`;
const NewsContainer = styled.div`
  padding-left: 87px;
  align-self: flex-start;
  overflow: hidden;

  @media (max-width: 700px) {
    padding-left:0;
    width: 100%;
  } 
`;
const StyleSwiper = styled(Swiper)`
  overflow: hidden;
  padding: 64px 0 34px 2px;
  
@media (max-width: 700px) {
  .swiper-slide-duplicate,
  .swiper-slide {
    transition: all .3s;
    transform: scale(1);
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(0.9);
  }
}
  
  .swiper-button-prev {
      display: none;
    }
  .swiper-button-next {
    position: absolute;
    width: 107.5px;
    height: 19px;
    right: 0;
    z-index: 99;
    margin-top: 0;
    @media (max-width: 700px) {
      display: none;
    }
  }
    .swiper-button-next:after,
    .swiper-container-rtl .swiper-button-next:after{
    content: "" !important;
    background-image: url(${nextbtn});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%; 
  }
  .swiper-slide {
    padding-top: 22px;
    padding-right: 238px;
    /* width: 80%; */
    overflow: hidden;
    padding-bottom: 18px;

    @media (max-width: 700px) {
    padding: 20px 10px 29px 8px;
    margin-right: 21px;
    width: 203px;
    height: 204px;
    border-radius: 9px;
    box-shadow: 6px 7px 14px rgba(0, 0, 0, 0.15);
    /* overflow: hidden; */
  }
    h3, h2 {
        font-size: 2rem;
        font-family: 'GoyangDeogyang';
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        @media (max-width: 700px) {
          font-size: 0.625rem;
        }
    }
    > div {
      padding-top: 62px;
      height: 289px;
      > p {
      font-size: 1.25rem;
      font-weight: 400;
      font-family: GoyangIlsan;
      padding-top: 10px;
      line-height: 35px;
      @media (max-width: 700px) {
          font-size: 0.625rem;
          line-height: 15px;
        }
      }
    }
  }
`;

const AwardHistory = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    padding: 21px 0;
  }
`;
const AwradList = styled.ul`
 display: flex;
 @media (max-width: 700px) {
    flex-direction: column;
  }
>li {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 27px 0 28px 0;
  border-right: 2px solid #C4C4C4;
  @media (max-width: 700px) {
    border-right: 0;
    padding: 12px 0 13px 0;
    align-items: center;
  }
  :last-child {
    border-right: 0;
  }
    > .sponsor-logo {
      background-image: url(${sinhan});
      width: 25px;
      height: 25px;
      margin-right: 15px;
    }
    > .sponsor-txt {
      font-size: 0.8rem;
      @media (max-width: 700px) {
        display: flex;
        align-items: center;
        font-size: 0.8125rem;
      }
      >p:last-child {
        padding-top: 11px;
        @media (max-width: 700px) {
          padding-top: 0;
          text-indent: 5px;
        }
      }
    }
  }
`;
const NewsMarketing = () => {
  const [swiper , setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  SwiperCore.use([Autoplay, Navigation]);

  const swiperParams = {
    onSwiper: setSwiper,
    loop: true,
    onSlideChange: (e) => setMainImageIndex(e.activeIndex),
  }
  return (
    <SectionContainer>
      <div className="news-wrap">
        <DirectNews>
          <h2>
            <strong style={{color:"#C22229"}}>N</strong>
              e<strong>W</strong>s&nbsp;<br />
            <tt>ITX&nbsp;Marketing</tt>
          </h2>
          <StyledLink to="#">
            <p>자세히보기</p>
            <span></span>
          </StyledLink>
          
        </DirectNews>
        <NewsContainer>
          <StyleSwiper
              {...swiperParams}
              ref={setSwiper}
              // centeredSlides={true}
              debugger={true}
              // slidesPerView={'auto'}
              loopedSlides={4}
              slidesBetween={0}
              navigation={true}
              speed={1000}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                700: {
                  slidesPerView: 'auto',
                  spaceBetween: 0,
                },
                1261: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                }
              }}
            > 
            {NewsData.map((newDt) => (
              <SwiperSlide
                key={newDt.id}
              >
                <h3>{newDt.date}</h3>
                <div>
                  <h2>{newDt.title}</h2>
                  <p>{newDt.content}</p>
                </div>
              </SwiperSlide>
            ))} 
            </StyleSwiper> 
        </NewsContainer>    
      </div>
      <AwardHistory>
        <AwradList>
          {AwardData.map((awradDt) => (
          <li key={awradDt.id}>
            <div className="sponsor-logo"></div>
            <div className="sponsor-txt">
              <p>{awradDt.date}</p>
              <p>{awradDt.content}</p>
            </div>
          </li>
          ))} 
        </AwradList>
      </AwardHistory>
    </SectionContainer>
  );
};

export default NewsMarketing;


