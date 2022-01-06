import React from 'react'
import styled from 'styled-components';
import lady from "../../img/sub/lady.svg";
import SubTitle from "./SubTitle";
import SubBanner from "../SubBanner";
import TitleBox from "../TitleBox";

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

function Permanent() {
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
        <Contents id="part1">
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
        <Contents id="part2">
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
        <Contents id="part3">
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
        </Contents>
      </ContentContainer>
    </Container>
  )
}

export default Permanent
