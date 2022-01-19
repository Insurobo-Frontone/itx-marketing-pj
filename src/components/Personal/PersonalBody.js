import React from "react";
import TopBox from "./TopBox";
import TitleBox from "../TitleBox";
import styled from "styled-components";
import planner from "../../img/sub/planner.png";

const PersonalBody = () => {
  return (
    <>
      <NavContainer>
        <BannerContain>
          <TopBox
            content="아이티엑스 마케팅은"
            subContent="차별화된 다양한 비지니스 플랫폼을 제공합니다."
            link1="개인영업(FP)"
            link2="법인영업"
            link3="보험플러스"
            link4="DB Market"
            id1="#part1"
            id2="#part2"
            id3="#part3"
            id4="part4"
          />
          <TitleBox title="Business" left="0" list4="Platform" />
        </BannerContain>
      </NavContainer>
      <Planner>
         <h2>
          <span style={{fontFamily: "GoyangIlsan"}}>+ 개인영업</span>  <strong>F</strong>inanical <strong>P</strong>lanner
         </h2>
        <PlannerContent>      
          <img src={planner} alt="" />   
          <PlannerTitle>     
            <h2 style={{ paddingBottom: '10px'}}>아이티엑스마케팅의 보험전문</h2>  
            <h2>컨설턴트 FP</h2>

            <p style={{ paddingTop: '70px' , paddingBottom: '15px'}}>
              고객 개인의 라이프사이클과 재무상태를 고려하여 원하는 시간! 원하는 장소!!로</p>
            <p>전문 FP가 직접 방문해서 1:1 맞춤형 컨설팅을 무료로 제공해 드립니다.</p>
          </PlannerTitle>
        </PlannerContent>

      </Planner>

    </>
  );
};

export default PersonalBody;

const BannerContain = styled.div`
  position: relative;
`;

const NavContainer = styled.div`
  padding-top: 140px;
  padding-bottom: 140px;
`;

const Planner = styled.div`
 padding-left: 11.25%;
 & >  h2  {
    border-bottom: 3px solid #1a1a1a;
    font-size: 2.5rem;
    font-family: "GoyangDeogyang";
    padding-bottom: 17px;
    > strong {
      color: #b8292d;
    }
  }
  > img {
    padding-top: 62px;
  }
`;

const PlannerContent = styled.div`
  display: flex;
  padding-top: 92px;
  padding-bottom: 50px;
`;

const PlannerTitle = styled.div`
    padding-top: 146px;
    padding-left: 60px;
    
    & > h2 {
      font-family: 'GoyangDeogyang';
    }

    & > p {
      color: #444444;
      font-size: 1rem;
    }
`;
