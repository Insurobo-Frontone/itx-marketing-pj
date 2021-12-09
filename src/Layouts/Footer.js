import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from "../img/common/footLogo.svg";

const Footer = () => {
  return (
    <Footers>
      <div>
        <Logo></Logo>
        <FooterMenu>
        <ul>
          <Li><Link to='#'>개인정보처리방침</Link></Li>
          <Li><Link to='#'>이용약관</Link></Li>
          <Li><Link to='#'>생명보험 대리점등록증</Link></Li>
          <Li><Link to='#'>손해보험 대리점등록증</Link></Li>
          <Li><Link to='#'>금융소비자보호기준</Link></Li>
          <Li><Link to='#'>금융소비자보호 내부통제기준</Link></Li>
        </ul>
        <ul> 
          <Li>서울시 영등포구 양평로68 8층(당산동6가 디엔빌딩) 아이티엑스마케팅㈜</Li>
          <Li>등록번호 2011120170</Li>
          <Li>대표이사 : 전병무</Li>
          <Li>사업자등록번호 : 107-87-60713</Li>
        </ul>
        </FooterMenu>
      </div>
      <p>
        Copyrightⓒ ITX Marketing. All Rights Reserved
      </p>
    </Footers>
  );
};

export default Footer;

const Footers = styled.footer`
  color: #FFFFFF;
  background-color: #323232;
  font-size: 0.65rem;
  font-weight: 400;
  width: 100%;
  padding: 6.85% 0 5.4% 7.8125%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  line-height: 20px;
  @media (max-width: 700px) {
    font-size: 0.625rem;
    padding: 12% 12.8% 10% 5.33%;
    line-height: 18.75px;
  }
`;

const Logo = styled.div`
  width: 200px;
  height: 30.67px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  margin-bottom: 36px;

  @media (max-width: 700px) {
    width: 130px;
    height: 20px;
    margin-bottom: 30px;
  }
`;
const FooterMenu = styled.div`
  width: 100%;
  > ul {
    display: flex;
    flex-wrap: wrap;
  }
  > ul:last-child {
    width: 30%;
    padding-bottom: 125px;
    >li:nth-child(2)::after {
      display: none;
    }
    @media (max-width: 700px) {
      width: 100%;
      padding-bottom: 70px;
      >li:nth-child(2)::after {
      display: block;
      }
      >li:first-child::after {
      display: none;
      }
    }
  }
`;

const Li = styled.li`
  list-style: none;
  position: relative;
  margin-right: 15px;
  @media (max-width: 700px) {
    margin-right: 10px;
  }
  :last-child::after{
    display: none;
    margin-right: 0;
  }
  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 9px;
    background-color: #ffffff;
    position: absolute;
    top: 5.5px;
    right: -7.5px;

    @media (max-width: 700px) {
    top: 4px;
    right: -5px;
    height: 8px;
    }  
  }
`;