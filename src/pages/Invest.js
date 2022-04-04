import React from 'react';
import styled from 'styled-components';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import bannerImg from '../img/sub/investbanner.png';
import EventSection from '../components/Business/EventSection';
import invest from '../img/sub/invest.png';
import HashTag from '../components/Business/Invest/HashTag';

const Invest = () => {
  return (
    <Layout>
      <CommonBanner
        img={bannerImg}
        strong='3분 '
        title='제테크'
      />
      <EventSection 
        thin='+ '
        strong='3분 '
        title='제테크'
        img={invest}
        invest
      >
        <div>
          <h2>3분만에 확인할 수 있는 제테크 노하우</h2>
          <p>보장분석, 상속/증여, 재무설계, 부동산, 세무, 예적금, 투자 등<br />
          다양한 재테크 분야별 노하우를 만나 볼 수 있습니다.
          </p>
        </div>
        <HashWrap>
          <HashTag name='프롬이 보험이야기'/>
          <HashTag name='보험플러스'/>
          <HashTag name='재테크'/>
          <HashTag name='보장분석'/>
          <HashTag name='법인컨설팅'/>
          <HashTag name='재무설계'/>
          <HashTag name='성공사례'/>
          <HashTag name='기타'/>
        </HashWrap>
      </EventSection>
    </Layout>      
  );
};

export default Invest;

const HashWrap = styled.div`

  width: 80%;

  > div {
    margin-top: 5%;
  }
`;

