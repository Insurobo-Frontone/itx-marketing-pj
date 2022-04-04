import React from 'react';
import styled from 'styled-components';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import corporation from '../img/sub/corporationBanner.png';
import corporService from '../img/sub/corporServiceBanner.png';
import corporExpert from '../img/sub/coporExpertBanner.png';
// import EventSection from '../components/Business/EventSection';
// import applyBusiness from '../img/sub/applyBusiness.png';
import { useLocation } from 'react-router-dom';


const Corporation = () => {
  const location = useLocation();
  return (
    <Layout>
      {location.pathname === '/corporation' ? (
        <CommonBanner
          img={corporation}
          title='기업컨설팅'
          subtxt='ITX 기업컨설팅 소개'
        />
      ) : 
      <>
      {location.pathname === '/corporation/service' ? (
        <CommonBanner
          consulting
          img={corporService}
          title='컨설팅서비스'
          subtxt='ITX 기업컨설팅 서비스'
        />
      ) : (
        <CommonBanner
          consulting
          img={corporExpert}
          title='전문가그룹'
          subtxt='ITX 전문가그룹'
        />)
      }</>}

{/* 
      {location.pathname === '/corporation' && (
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
       
            
        </>
      )}
      {location.pathname === '/corporation/service' && (
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
      )} */}
    </Layout>
  );
};

export default Corporation;

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