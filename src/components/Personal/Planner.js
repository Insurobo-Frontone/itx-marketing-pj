import React from "react";
import styled from "styled-components";

import planner from "../../img/sub/planner.png";

const Planner = () => {
  return (
    <>
      <Wrap>
        <p>
          <span style={{ fontFamily: "GoyangIlsan" }}>+ 개인영업</span>{" "}
          <strong>F</strong>inanical <strong>P</strong>lanner
        </p>
        <PlannerContent>
          <img src={planner} alt="" />
          <PlannerTitle>
            <h2 style={{ paddingBottom: "10px" }}>
              아이티엑스마케팅의 보험전문
            </h2>
            <h2>컨설턴트 FP</h2>

            <p style={{ paddingTop: "70px", paddingBottom: "15px" }}>
              고객 개인의 라이프사이클과 재무상태를 고려하여 원하는 시간! 원하는
              장소!!로
            </p>
            <p>
              전문 FP가 직접 방문해서 1:1 맞춤형 컨설팅을 무료로 제공해
              드립니다.
            </p>
          </PlannerTitle>
        </PlannerContent>
      </Wrap>
    </>
  );
};

export default Planner;

const Wrap = styled.div`
  padding-left: 11.25%;
  & > p {
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
  padding-top: 6.8%;
  padding-bottom: 2.9%;
`;

const PlannerTitle = styled.div`
  padding-top: 7.6%;
  padding-left: 3.1%;

  & > h2 {
    font-family: "GoyangDeogyang";
  }

  & > p {
    color: #444444;
    font-size: 1rem;
  }
`;
