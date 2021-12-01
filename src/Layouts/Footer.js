import React from "react";
import styled from "styled-components";
import Frame from "../img/foot_logo.png";

const Footer = () => {
  return (
    <>
      <Container>
        <FontContainer>
          <img src={Frame} alt="" />
          <Ul>
            <Li> 개인정보처리방침 </Li>
            <Li> 이용약관 </Li>
            <Li> 생명방침 대리점등록증 </Li>
            <Li> 손해보험 대리점등록증 </Li>
            <Li> 금융소비자보호 내부통제기준 </Li>
          </Ul>
          <FontPosition>
            서울시 영등포구 양평로68 8층(당산동6가 디엔빌딩) 아이티엑스마케팅㈜
            | 등록번호 2011120170
          </FontPosition>
          <FontPosition>
            대표이사 : 전병무 | 사업자등록번호 : 107-87-60713
          </FontPosition>
        </FontContainer>
        <FooterBottom>
          <p>Copyrightⓒ ITX Marketing. All Rights Reserved </p>
        </FooterBottom>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  color: #ffffff;
  background-color: #323232;
  width: 100%;
  height: 25rem;
`;

const FontPosition = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
`;

const Li = styled.li`
  list-style: none;
  position: relative;
  margin-right: 12px;
  ::after {
    content: "";
    display: block;
    width: 2px;
    height: 13px;
    background-color: #ffffff;
    position: absolute;
    top: 1px;
    right: -7px;
    :last-child {
      content: none;
    }
  }
`;

const Ul = styled.ul`
  padding-top: 1.5%;
  line-height: 18px;
  font-size: 0.8rem;
  position: relative;
  display: flex; ;
`;
const FontContainer = styled.div`
  font-family: "GoyangDeogyang";

  padding-left: 7.8%;
  padding-bottom: 5.88%;

  & > img {
    padding-top: 6.8%;
  }
`;

const FooterBottom = styled.div`
  padding-left: 7.8%;
  font-size: 0.8rem;
  font-family: "GoyangIlsan";
`;
