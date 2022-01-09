import React from 'react'
import styled from 'styled-components';
import lady from "../../img/sub/lady.svg";
import SubTitle from "./SubTitle";
import SubBanner from "../SubBanner";
import TitleBox from "../TitleBox";
import MiniBanner from "../MiniBanner";
import Info from "./Info";

import benefits1 from "../../img/sub/benefits1.svg";
import benefits2 from "../../img/sub/benefits2.svg";
import benefits3 from "../../img/sub/benefits3.svg";
import benefits4 from "../../img/sub/benefits4.svg";
import benefits5 from "../../img/sub/benefits5.svg";
import benefits6 from "../../img/sub/benefits6.svg";

const Data = [
  {
    id: 0,
    title: '4대 보험 및 퇴직금',
    icon: benefits1
  },
  {
    id: 1,
    title: '다양한 휴가제도\n연차, 출산휴가\n경조사휴가, 특별휴가',
    icon: benefits2
  },
  {
    id: 2,
    title: '경조금 / 화환 지급',
    icon: benefits3
  },
  {
    id: 3,
    title: '육아휴직\n임산부 업무시간 조정',
    icon: benefits4
  },
  {
    id: 4,
    title: '분기별 워크샵',
    icon: benefits5
  },
  {
    id: 5,
    title: '장기근속포상',
    icon: benefits6
  },
]
const Container = styled.section`
  > .gray-box {
    position: relative;
    padding-left: 12.96875%; 
  }
`;
const ContentContainer = styled.div`
  padding: 6% 8.020833333333333% 0;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 3% 0;

    > li {
      display: flex;
      width: 31%;
      justify-content: space-between;
      text-align: end;
      align-items: center;
      padding: 1.2% 2% 1.2% 1.2%;
      border: 1px solid #BEBEBE;
      margin: 2.75% 0;
      
      > div {
        background-color: #F8F8F8;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > h2 {
        white-space: pre;
        color: #1A1A1A;
        font-family: 'GoyangDeogyang';
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
`;

const Table = styled.table`
  width: 74.44168734491315%;
  margin: 5% 0;
  align-self: center;
  th {
    font-size: 1.3rem;
    color: #1A1A1A;
  }
  th, td{
    height: 5rem;
    width: 33.33333333333333%;
    border-bottom: 1px solid #C4C4C4;
  }
  td {
    text-align: center;
  }

`;

const BottomWrap = styled.div`
  padding: 5% 13.54166666666667% 0;
`;
const Permanent = () => {
  return (
    <Container>
      <div className='gray-box'>
        <SubBanner
          padding="4.3% 7.34375% 3.8% 8.078994614003591%"
          modifier="보험인재의 집합소" 
          image={lady}
          link1='모집부분'
          link2='근무조건'
          link3='우대사항'
          leftpd='8.5%'
          id1="#cont1"
          id2="#cont2"
          id3="#cont3"
        />
        <TitleBox  
          title="정규직채용"
          list1="영업지원(총무)"
          list2="수수료관리"
          list3="홍보마케팅"
          list4="신시장발굴"
          left='0'
        /> 
      </div>
      <ContentContainer>
        <Contents id="cont1">
          <SubTitle 
            title="모집부분"
          />
           <Table>
            <thead>
              <tr>
                <th>분야</th>
                <th>업무내용</th>
                <th>채용규모</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>영업지원</td>
              <td>
                FP 영업활동 지원<br />
                신계약 청약, 배서, 수금관리
              </td>
              <td>00명</td>
            </tr>
            <tr>
              <td>수수료관리</td>
              <td>
                수수료 정산 및 운영<br />
                수수료 제도 기안 및 관련 정책 수립<br />
                수수료 시스템 및 수수료 지급 검증
              </td>
              <td>0명</td>
            </tr>
            <tr>
              <td>홍보마케팅</td>
              <td>
                디지털 마케팅(SNS 채널 운영, 관리 및 콘텐츠 기획)<br />
                온/오프라인 프로모션 기획 및 현장지원<br />
                B2B2C 제휴(마케팅 전략 수립 및 실행)
              </td>
              <td>0명</td>
            </tr>
            <tr>
              <td>신시장발굴</td>
              <td>
                신시장 개발조사, 신시장 기획 및 운영전략 수립<br />
                신시장 업계동향 파악 및 아이템 발굴
              </td>
              <td>0명</td>
            </tr>
            </tbody>
          </Table> 
        </Contents>
        <Contents id="cont2">
          <SubTitle 
            title="근무조건"
          />
          <Table>
            <tr>
              <th>구분</th>
              <th>주요내용</th>
              <th>비고</th>
            </tr>
            <tr>
              <td>고용형태</td>
              <td>정규직</td>
              <td>수습기간 3개월</td>
            </tr>
            <tr>
              <td>근무시간</td>
              <td>주 5일</td>
              <td>AM 09:00 ~ PM 06:00</td>
            </tr>
            <tr>
              <td>연봉</td>
              <td>경력, 업부 분야에 따라 협의</td>
              <td>-</td>
            </tr>
            <tr>
              <td>채용지역</td>
              <td>서울, 제주</td>
              <td>-</td>
            </tr>
          </Table>
        </Contents >
        <Contents id="cont3">
          <SubTitle 
            title="우대사항"
          />
          <Table>
            <tr>
              <th>구분</th>
              <th>내용</th>
              <th>비고</th>
            </tr>
            <tr>
              <td>공통사항</td>
              <td>관련업무 자격증 보유자</td>
              <td>-</td>
            </tr>
            <tr>
              <td>재무관리</td>
              <td>보험사 수수료 정산업무 유경험자</td>
              <td>-</td>
            </tr>
            <tr>
              <td>홍보마케팅</td>
              <td>온라인 마케팅 유경험자</td>
              <td>-</td>
            </tr>
          </Table>
        </Contents>
        <Contents>
          <SubTitle 
            title="복리후생"
          />
          <ul>
            {Data.map((bd) => (
            <li key={bd.id}>
              <div><img src={bd.icon} alt={bd.title}/></div>
              <h2>{bd.title}</h2>
            </li>
            ))}
          </ul>
        </Contents>
      </ContentContainer>
      <BottomWrap>
          <MiniBanner desc="정규직 채용 문의" />
            <Info email="이메일 : aseds@wehago.com" keeper="담당자 : 정의석 부장" />
        </BottomWrap>
    </Container>
  )
}

export default Permanent;

