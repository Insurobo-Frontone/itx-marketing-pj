import React from "react";
import styled from "styled-components";

import morebtn from "../img/moreBtn.svg";
import nextbtn from "../img/nextBtn.svg";

const News = () => {
  return (
    <Container>
      <NewsMarketing>
        
        <NewsDetailButton>
          <h2>자세히 보기</h2>
          <button>
            <img src={morebtn} alt="자세히보기" />
          </button>
        </NewsDetailButton>
      </NewsMarketing>

      <NewsArticle>
        <NewsDate>2021-09-17</NewsDate>

        <NewsTitle>아이티엑스마케팅 건강한 상속 증여 연구소 출범</NewsTitle>

        <NewsArticleFontPosition>
          <p>
            보험전문대리점(GA)인 아이티엑스 마케팅(대표이사 전병무)은 상속과
            증여에 대한 전문적인 자산관리 서비스를 제공하기 위해 ‘건강한 상속 ·
            증여 연구소’를 ····
          </p>
        </NewsArticleFontPosition>
      </NewsArticle>
      <Image>
        <img src={nextbtn} alt="next" />
      </Image>
    </Container>
  );
};

export default News;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 58rem;
`;

const NewsMarketing = styled.div`
  width: 32.5rem;
  height: 55rem;
  background-color: #f8f8f8;
  padding-left: 7.8%;
  padding-top: 22.4%;
`;

const NewsDetailButton = styled.div`
  display: flex;
  padding-top: 13.8%;
  margin-right: 10px;
  & > button {
    border: none;
    background-color: #f8f8f8;
    margin-left: 20px;
    margin-top: -9px;
  }

  & > h2 {
    font-size: 1.25rem;
  }
`;
const NewsArticle = styled.div`
  width: 44.85rem;
  height: 17.8rem;
  padding-left: 4.5%;
`;

const NewsTitle = styled.p`
  font-family: "GoyangDeogyang";
  font-size: 2rem;
`;

const NewsDate = styled.p`
  font-family: "GoyangDeogyang";
  font-size: 2rem;
  color: #1a1a1a;
  padding-top: 394px;
  padding-bottom: 64px;
  line-height: 45.12px;
`;

const NewsArticleFontPosition = styled.div`
  & > p {
    font-size: 1.25rem;
    margin-top: 12px;
  }
`;

const Image = styled.div`
  padding-top: 27.9%;
  padding-right: 8%;
  padding-left: 6.5%;
`;
