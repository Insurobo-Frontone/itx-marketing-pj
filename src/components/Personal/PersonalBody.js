import React from "react";
import styled from "styled-components";

import TopBox from "./TopBox";
import TitleBox from "../TitleBox";

import Planner from "./Planner";
import System from "./System";
import Service from "./Service";
import Consulting from "./Consulting";
import Advice from "./Advice";

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
      <Planner />
      <System />
      <Service />
      <Consulting />
      <Advice />
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
