import React from "react";
import styled from "styled-components";

import wise from "../../img/sub/wise.png";
import reasonable from "../../img/sub/reasonable.png";
import curriculum from "../../img/sub/curriculum.png";

const Service = () => {
  return (
    <>
      <Wrap>
        <p>
          <span style={{ fontFamily: "GoyangIlsan" }}>차원이 다른</span>
          <strong> 보험서비스의 실현</strong>
        </p>
        <ServiceContent>
          <img src={wise} alt="" />
          <ServiceTitle>
            <h2>#현명한 #컨설팅</h2>
            <p style={{ paddingTop: "23px" }}>
              "상품기획연구소"에서 전문FP를 위한 경쟁력 있는 상품을
            </p>
            <p>제공해 드리기 때문에 고객 니즈를 맞는 현명한 컨설팅을</p>
            <p>제공받을 수 있습니다.</p>
          </ServiceTitle>
        </ServiceContent>
        <div style={{ display: "flex" }}>
          <ServiceCenter>
            <h2>#합리적인 #보험컨설팅</h2>
            <p style={{ paddingTop: "23px" }}>
              보험회사의 상품 포트폴리오를 비교 분석하여 고객에게
            </p>
            <p>가장 합리적인 상품을 추천해 드리며 보험점검, 리모델링 등</p>
            <p>다양한 보험컨설팅을 무료 상담 후 보장분석</p>
            <p>Report를 제공받을 수 있습니다.</p>
          </ServiceCenter>
          <img src={curriculum} alt="" />
        </div>
        <ServiceContent>
          <img src={reasonable} alt="" />
          <ServiceTitle>
            <h2>#합리적인 #보험컨설팅</h2>
            <p style={{ paddingTop: "23px" }}>
              보험회사의 상품 포트폴리오를 비교 분석하여 고객에게
            </p>
            <p>가장 합리적인 상품을 추천해 드리며 보험점검, 리모델링 등</p>
            <p>다양한 보험컨설팅을 무료 상담 후 보장분석</p>
            <p>Report를 제공받을 수 있습니다.</p>
          </ServiceTitle>
        </ServiceContent>
      </Wrap>
    </>
  );
};

export default Service;

const Wrap = styled.div`
  padding-left: 11.25%;
  & > p {
    border-bottom: 3px solid #1a1a1a;
    font-size: 2.5rem;
    font-family: "GoyangDeogyang";
    padding-bottom: 17px;
    > strong {
      color: #1a1a1a;
    }
  }
  > img {
    padding-top: 62px;
  }
`;

const ServiceContent = styled.div`
  display: flex;
  padding-top: 8.3%;
  padding-bottom: 6.9%;
`;

const ServiceTitle = styled.div`
  padding-top: 9.1%;
  padding-left: 6.3%;
  text-align: right;

  & > h2 {
    color: #b8292d;
    font-size: 1.25rem;
  }

  & > p {
    color: #444444;
    font-size: 1.25rem;
    line-height: 44px;
  }
`;

const ServiceCenter = styled.div`
  padding-top: 9.1%;
  padding-right: 3%;
  text-align: left;

  & > h2 {
    color: #b8292d;
    font-size: 1.25rem;
  }

  & > p {
    color: #444444;
    font-size: 1.25rem;
    line-height: 44px;
  }
`;
