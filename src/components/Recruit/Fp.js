import React from "react";
import styled from "styled-components";
import Highfive from "../../img/sub/Highfive.svg";
import Support from "../../img/sub/support.svg";

const Container = styled.section`
`;

const LinkList = [
  {
    id: 0,
    title: "교육지원",
    icon: Support,
  },
  {
    id: 1,
    title: "DB지원",
    icon: Support,
  },
  {
    id: 2,
    title: "전산지원",
    icon: Support,
  },
];

function Fp() {
  return (
    <Container>
        <HeaderInner>
          <Title>
            <p>FP가 주인인 회사</p>
            <h1>아이티엑스마케팅</h1>
            {LinkList.map((el) => (
              <LinkWrap>
                <p>{el.title}</p>
                <a href="#content1"><img src={el.icon} alt="" /></a>
              </LinkWrap>
            ))}
          </Title>
          <ImgWrap>
            <img src={Highfive} alt="" />
          </ImgWrap>
          <FPBOX>
          <h2>FP채용</h2>
          <Line />
          <Ul>
            <li>개인영업</li>
            <li>법인컨설팅</li>
            <li>DB영업</li>
          </Ul>
        </FPBOX>
        </HeaderInner>
        <table>
          <></>
        </table>
    </Container>
  );
}

export default Fp;

const HeaderInner = styled.div`
  position: relative;
  padding-left: 155px;
  background: linear-gradient(to right, #F8F8F8 87.03125%, #FFFFFF 12%);
  display: flex;
  justify-content: space-between;
  /* ::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border: 5px soild #B8292D;
    border-radius: 50%;
  } */
`;

const Title = styled.div`
  padding-top: 193px;
  font-size: 30px;
  > h1 {
    color: #1A1A1A;
    padding-top: 32px;
    font-size: 50px;
  }
`;

const ImgWrap = styled.div`
  & > img {
    padding-top: 71px;
  }
`;

const FPBOX = styled.div`
  right: 0;
  width: 455px;
  height: 315px;
  background-color: #b8292d;

  & > h2 {
    color: #ffffff;
    font-family: 'GoyangDeogyang';
    font-size: 30px;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 31px;
  }
`;

const Ul = styled.ul`
  color: #ffffff;
  font-size: 20px;
  line-height: 28px;
  font-family: "GoyangIlsan R";
  padding-left: 37px;
  padding-top: 82px;
`;

const LinkWrap = styled.div`
  display: inline-block;
  padding-right: 30px;
  padding-bottom: 76px;
  & > p {
    padding-top:457px;
    font-size: 16px;
    color: #b8292d;
    
  }
`;

const Line = styled.div`  
  height: 3px;
  background-color: #ffffff;
`;