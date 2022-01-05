import React from "react";
import styled from "styled-components";
import Highfive from "../../img/sub/Highfive.svg";
import SubBanner from "../SubBanner";
import TitleBox from "../TitleBox";
import SubTitle from "./SubTitle";


const Container = styled.section`
`;
const SupportContainer = styled.section`
`;

const Contents1 = styled.div`
  padding: 1000px;
`;
const Contents2 = styled.div`
padding: 1000px;
`;
const Contents3 = styled.div`
padding: 1000px;
`;

const Fp = () => {
  return (
    <Container>
      <div>
        <SubBanner 
          modifier="FP가 주인인 회사" 
          image={Highfive}
          link1='교육지원'
          link2='DB지원'
          link3='전산지원'
        />
        <TitleBox 
          title="FP채용"
          list1="개인영업"
          list2="법인컨설팅"
          list3="DB영업"
        />
      </div>

      <SupportContainer>
        <Contents1 id="part1">
          <SubTitle title="교육지원" />
        </Contents1>
        <Contents2 id="part2" title="DB지원">
          <dt>cont2</dt>
        </Contents2 >
        <Contents3 id="part3">
          <dt>cont2</dt>
        </Contents3>
      </SupportContainer>
    </Container>
  );
}

export default Fp;



