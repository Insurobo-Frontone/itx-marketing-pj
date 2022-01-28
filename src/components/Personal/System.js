import React from "react";
import styled from "styled-components";

import car from "../../img/sub/car.png";
import care from "../../img/sub/care.png";
import billing from "../../img/sub/billing.png";
import guaranteed from "../../img/sub/guaranteed.png";

const Data = [
  {
    id: 1,
    title: "보장분석 시스템",
    content: "성별, 연령별, 소득, 가족관계",
    content2: "등을 고려한 맞춤형",
    content3: "보험점검 시스템",
    img: guaranteed,
  },
  {
    id: 2,
    title: "보험청구 시스템",
    content: "복잡하고 어려운 보험금 청구를",
    content2: "대행해드리는 토탈보험금",
    content3: "청구 시스템",
    img: billing,
  },
  {
    id: 3,
    title: "자동차보험 자동차설계 시스템",
    content: "보험회사별 자동차보험료 비교를",
    content2: "통해 가장 저렴한 자동차보험",
    content3: "안내 시스템",
    img: car,
  },
  {
    id: 4,
    title: "계약/고객관리 시스템",
    content: "DB분배, 계약관리, 고객관리,",
    content2: "소득관리가 가능한 온라인 전용",
    content3: "통합관리 시스템",
    img: care,
  },
];
const System = () => {
  return (
    <>
      <Wrap>
        <p>
          <span style={{ fontFamily: "GoyangIlsan" }}>
            영업경쟁력을 향상시켜 드리는
          </span>{" "}
          <strong>I</strong>
          <strong>T</strong>지원 시스템
        </p>
        <SystemBox>
          {Data.map((index) => {
            return (
              <>
                <DataContent>
                  <img src={index.img} alt="" />

                  <h2>{index.title}</h2>
                  <FontPosition>{index.content}</FontPosition>
                  <p>{index.content2}</p>
                  <p>{index.content3}</p>
                </DataContent>
              </>
            );
          })}
        </SystemBox>
      </Wrap>
    </>
  );
};

export default System;

const Wrap = styled.div`
  padding-bottom: 15.1%;
  padding-top: 7%;
  padding-right: 7.8%;
  text-align: right;
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

const SystemBox = styled.div`
  display: flex;
  & > div > img {
    padding-top: 271px;
  }
`;

const DataContent = styled.div`
  padding-left: 11.25%;

  & > h2 {
    font-size: 1rem;
    text-align: center;
    padding-top: 46px;
    color: #1a1a1a;
  }

  & > p {
    line-height: 29px;
    text-align: center;
    font-size: 0.75rem;
  }
`;

const FontPosition = styled.p`
  padding-top: 22%;
`;
