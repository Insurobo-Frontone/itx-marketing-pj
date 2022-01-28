import React from "react";
import styled from "styled-components";

import personalArrow from "../../img/sub/personalArrow.svg";

const Consuliting = [
  {
    id: 1,
    title: "STEP 01",
    subContent: "상담신청",
    img: personalArrow,
  },
  {
    id: 1,
    title: "STEP 02",
    content: "전담FP 배정",
    subContent: "고객상담",
    img: personalArrow,
  },
  {
    id: 1,
    title: "STEP 03",
    subContent: "보험분석",
    img: personalArrow,
  },
  {
    id: 1,
    title: "STEP 04",
    content: "맞춤형",
    subContent: "보험컨설팅",
    img: personalArrow,
  },
  {
    id: 1,
    title: "STEP 05",
    content: "보장분석",
    subContent: "결과제공",
    img: personalArrow,
  },
];

const Consulting = () => {
  return (
    <>
      <Wrap>
        <p>
          <span style={{ fontFamily: "GoyangIlsan" }}>쉽고 빠르고 간편한 </span>
          맞춤형 보험컨설팅
        </p>
        <ConsultingWrap>
          {Consuliting.map((index) => {
            return (
              <>
                <ConsultingBox>
                  <h2 style={{ paddingTop: "38px" }}>{index.title}</h2>
                  <div>
                    <ConsultingContent>{index.content}</ConsultingContent>
                    <Underline>{index.subContent}</Underline>
                  </div>
                </ConsultingBox>
                <img src={index.img} alt="" />
              </>
            );
          })}
        </ConsultingWrap>
      </Wrap>
    </>
  );
};

export default Consulting;

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

const ConsultingWrap = styled.div`
  display: flex;
  padding-left: 11.45%;
  padding-top: 13.43%;

  & > img {
    padding-left: 2.6%;
    padding-right: 2.6%;
  }
`;

const ConsultingBox = styled.div`
  width: 200px;
  height: 197px;
  border-radius: 25px;
  background-color: #ffffff;
  box-shadow: 6px 9px 41px rgba(0, 0, 0, 0.15);
  text-align: center;

  & > h2 {
    font-size: 0.8rem;
    text-align: center;
  }

  & > div > h2 {
    font-size: 1rem;
    color: #1a1a1a;
  }
`;

const Underline = styled.h2`
  border-bottom: 3px solid #b8292d;
  display: inline;
  overflow: hidden;
  padding-bottom: 3px;
`;

const ConsultingContent = styled.h2`
  padding-top: 26px;
  padding-bottom: 4%;
`;
