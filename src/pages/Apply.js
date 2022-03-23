import React from 'react';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import bannerImg from '../img/sub/businessApplyBanner.png';
import EventSection from '../components/Business/EventSection';
import applyBusiness from '../img/sub/applyBusiness.png';
import styled from '@emotion/styled';

const Apply = () => {
  return (
    <Layout>
      <CommonBanner
        img={bannerImg}
        strong='B'
        title='usiness 상담문의'
        subtxt='비지니스 플랫폼'
      />
      <EventSection 
        thin='+ '
        title='상담문의'
        img={applyBusiness}
        apply
      >
        <PartitionBox>
          <div>
            <h2>전문가의 조언이 필요한 분</h2>
            <p>법인컨설팅<br />개인컨설팅이 필요하시면<br />검증된 전문가가 직접<br />궁금증을 해결해드립니다.</p>
          </div>
          <div>
            <h2>전문가로 활동하고 싶으신 분</h2>
            <p>다양한 영업채널<br />투명한 급여체계에서<br />일하길 원하는 분이면 누구나<br />환영합니다.
            </p>
          </div>
        </PartitionBox>
      </EventSection>
    </Layout>
  );
};

export default Apply;

const PartitionBox = styled.div`
  display: flex;
   > div {
     padding: 10% 0;
     width: 50%;
     display: flex;
     flex-direction: column;
     padding-left: 6%;
   }
   > div:first-child {
      border-right: 1px solid #444444;
    }

   
`;