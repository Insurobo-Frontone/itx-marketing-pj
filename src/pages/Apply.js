import React from 'react';
import styled from 'styled-components';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import bannerImg from '../img/sub/businessApplyBanner.png';
import applyCorporate from '../img/sub/apply_corporate.png';
import applyInherit from '../img/sub/apply_inherit.png';
import EventSection from '../components/Business/EventSection';
import applyBusiness from '../img/sub/applyBusiness.png';
import { useLocation } from 'react-router-dom';
import ApplyTab from '../components/Business/Apply/ApplyTab';
import ApplyForm from '../components/Business/Apply/ApplyForm';
import BorderTitleSection from '../components/Corporation/BorderTitleSection';

const Apply = () => {
  const location = useLocation();
  return (
    <Layout>
      {location.pathname === '/business/apply' ? (
        <CommonBanner
          consulting
          img={bannerImg}
          strong='B'
          title='usiness 상담문의'
          subtxt='비지니스 플랫폼'
        />
      ) : 
      <>
      {location.pathname === '/corporation/apply' ? (
        <CommonBanner
          consulting
          img={bannerImg}
          title='상담신청'
          subtxt='기업컨설팅 상담신청'
        />
      ) : (
        <CommonBanner
          consulting
          img={bannerImg}
          title='상담신청'
          subtxt='상속증여연구소 상담신청'
        />)
      }</>}


      {location.pathname === '/business/apply' && (
      <>
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
          <BottomWrap>
            <ApplyTab />
            {location.search === '' && (
              <ApplyForm
                corporate
                name='business-corporate'
              />
            )}
            {location.search === '?2' && (
              <ApplyForm name='business-personal'/>
            )}
            {location.search === '?3' && (
              <ApplyForm name='business-expert-join'/>
            )}
          </BottomWrap>
        </>
      )}
      {location.pathname === '/corporation/apply' && (
      <>
        <BorderTitleSection
          img={applyCorporate}
          thin={'+'}
          title={'법인컨설팅 신청'}
          subTitle={'중소기업의 더 밝은 내일을 위해 노력하겠습니다.'}
          disc={'소통하는 기업 아이티엑스마케팅은\n기업의 작은 소리도 크게 듣겠습니다.'}
        />
          <BottomWrap>
            <ApplyForm name='corporate' corporate />
          </BottomWrap>
        </>
      )}
      {location.pathname === '/inherit/apply' && (
      <>
        <BorderTitleSection
          img={applyInherit}
          thin={'+'}
          title={'건강한상속증여 상담신청'}
          subTitle={'고객님의 더 밝은 내일을 위해 노력하겠습니다.'}
          disc={'건강한상속증여 연구소는\n고객의 작은 소리도 크게 듣겠습니다.'}
        />
          <BottomWrap>
            <ApplyForm name='inherity' inherit />
          </BottomWrap>
        </>
      )}
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

const BottomWrap = styled.div`
  padding: 7.8125%;
`;