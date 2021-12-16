import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import Title from './Title';

import { AddSharp } from '@mui/icons-material';
import linkbtn from '../../img/sub/pressLinkBtn.svg';

const News = [
  {
    id: 0,
    date: '2021-09-17',
    title: '[조이뉴스24] 아이티엑스마케팅 ‘건강한 상속·증여연구소’출범. 자산 관리 서비스의 차별화에 나선다!',
    content: '보험전문대리점(GA)인 아이티엑스마케팅(대표이사 전병무)은 상속과 증여에 대한 전문적인 자산관리 서비스를 제공하기 위해 ‘건강한 상속·증여 연구소’를 출범한다고 13일에 밝혔다.',
    subCont: '세부, 법무, 노무, 부동산 등 각 분의 전문가들로 구성되며, 고객의 자산관리 전반에 걸쳐 밀착컨설팅을 제공할 예정이다.···'
  },
  {
    id: 1,
    date: '2021-07-23',
    title: '[조이뉴스24] 더 에이치 희망 플러스, ITX마케팅, ㈜케이닥, 국제의료봉사협력을 위한 업무협약(MOU) 체결',
    content: '국제의료봉사단체 ‘더 에이치 희망 플러스’ (이사장 에이티세콘 김형준 대표) 22일 ITX마케팅, ㈜케이닥과 업무협약(MOU)을 체결하였다고 밝혔다.',
    subCont: 'ITX마케팅 전병무 대표이사는 GA(General Agency)업을 추진하고 있으며, 국제의료본사단체···'
  },
  {
    id: 1,
    date: '2021-07-15',
    title: '[뉴데일리경제] GA업체 ‘아이티엑스마케팅’, 오프라인 보험플랫폼 ‘보험플러스’ 오픈',
    content: '독립법인보험대리점(GA)인 아이티엑스마케팅과 이달부터 보험전문 방문형점포 ‘보험플러스’를 운영한다고 7일 밝혔다.',
    subCont: '보험플러스는 보험 컨설팅·보험금 청구 등의 서비스를 이용할 수 있으며 관련 전문가가 항시 대기 중이다.···'
  },
  {
    id: 1,
    date: '2021-07-15',
    title: '[조이뉴스24] 인슈로보·아이티엑스마케팅, 인슈어테크 플랫폼과 오프라인 결합형 업무협약(MOU) 체결',
    content: 'AI기반의 차세대 지능형 인슈어테크 기업 (주)인슈로보(대표 서민)는 독립보험대리점(GA) (주)아이티엑스마케팅(대표 전병무)과 보험사업의 온오프라인 시너지 창출을 위한 전략적 업무 협약(MOU)을 체결했다고 밝혔다.',
    subCont: '이번 협약을 통해 양사는 상호 보험사업 성장동력을 확보하기 위한 전략적 협업을 본격적으로 진행해 나갈 방침이다.···'
  },
  {
    id: 1,
    date: '2021-07-05',
    title: '흥국생명 계약담당자 변경안내',
    content: '영업양도양수계약의 체결로 인해 흥국생명의 아래의 계약을 관리하게 되었습니다,',
    subCont: '고객님의 계약내용에는 변경사항이 없으며, 개인정보관리 및 계약 유지관리에 만전을 기하겠습니다.···'
  },
]

const ManageIdeaContainer = styled.section`
  width: 100%;
  padding: 11.25% 7.8125% 5.3%;
 
`;

const StyleSwiper = styled(Swiper)`
   padding: 20% 3%;
   margin: 3.5%;
   
   overflow: hidden;
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1.5);
  }
  .swiper-slide {
    transform: scale(1);
    transition: transform 3s ease;
    box-shadow: 0px 5px 48px rgba(0, 0, 0, 0.2);
    border-radius: 45px;
    padding: 5% 3% 7%;
    height: 640px;
    overflow: hidden;
    font-family: 'GoyangDeogyang';

    > p {
      font-size: 0.9rem;
      color: #620406;
      border-bottom: 1px solid #620406;
      display: inline-block;
    }
    > h3 {
      font-size: 1.5625rem;
      display: flex;
      align-items: flex-start;
      padding-top: 10%;
      color: #323232;
    }
  }
`;
const TextContent = styled.div`
  font-size: 0.8rem;
 
  > p {
    padding-bottom: 20px;
  }
`;

const StyleA = styled(Link)`
  background-image: url(${linkbtn});
  background-repeat: no-repeat;
  width: 78.6px;
  height: 12.05px;
`;

const MoreBtn = styled.button`

`;

const PressRoom = () => {
  const [swiper , setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  SwiperCore.use([Autoplay]);

  const swiperParams = {
    onSwiper: setSwiper,
    loop: true,
    onSlideChange: (e) => setMainImageIndex(e.activeIndex),
  }

  return (
    <ManageIdeaContainer>
      <Title en={'Press Room'} ko={'프레스 룸'} />
     
        <StyleSwiper
          {...swiperParams}
          ref={setSwiper}
          autoplay={true}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={22}
          breakpoints={{
          700: {
            slidesPerView: 3,
            spaceBetween: 100,
            centeredSlides: false
          }
        }}
        >
        {News.map((nd) => (
          <SwiperSlide key={nd.id}>
            <p>{nd.date}</p>
            <h3>{nd.title}</h3>
            <TextContent>
              <p>{nd.content}</p>
              <p>{nd.subCont}</p>
            </TextContent>
            <StyleA to="#"></StyleA>
          </SwiperSlide>
          ))}
          </StyleSwiper>
   
      <MoreBtn>
        <AddSharp/>
        <span>더 보기</span>
      </MoreBtn>
    </ManageIdeaContainer>
  )
}

export default PressRoom;