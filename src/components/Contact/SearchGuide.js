import React from 'react'
import styled from 'styled-components';

const Container = styled.section`
  padding: 7% 8.333333333333333%;

  @media(max-width:700px){
    padding: 5% 6.2%;
  }
  > h2 {
    font-size: 2.5rem;
    color: #1A1A1A;
    font-family: 'GoyangDeogyang';
    padding-bottom: 8%;
    @media(max-width:700px){
      font-size: 1rem;
    }
  }
  > div {
    display: flex;
    padding: 5% 0;
    @media(max-width:700px){
      flex-direction: column;
    }
    h3 {
      font-family: 'GoyangDeogyang';
      color: #222222;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      padding: 5% 0;

      ::before {
        content: '';
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 10px solid #B8292D;
        box-sizing: border-box;
        margin-right: 3%;
      }
      @media(max-width:700px){
        font-size: 1rem;
        ::before{
          width: 20px;
          height: 20px;
          border: 5px solid #B8292D;
        }
      }
    }
  }
`;

const Area = styled.div`
  width: 50%;
  table {
    border-spacing: 2px;
    margin: 5% 9%;
    td {
      background-color: #F0F0F0;
      width: 140px;
      height: 40px;
      text-align: center;
      font-size: 0.8rem;
    }
    th {
      background-color: #B8292D;
      color: #FFFFFF;
      font-weight: 400;
      font-size: 0.8rem;
    }
  }
  @media(max-width:700px) {
    width: 100%;
    table{
      margin: 0;
      td {
        font-size: 0.625rem;
      }
    }
  }
`;
const Target = styled.div`
  width: 50%;
  
  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 330px;
    border: 1px solid #C4C4C4;
    margin: 5% 9%;
    > div {
      width: 50%;
      :first-child {
        border-right: 1px solid #C4C4C4;
      }
      > h4 {
        font-size: 0.8rem;
        color: #323232;
        text-align: center;
        border-bottom: 1px solid #C4C4C4;
        background-color: #F0F0F0;
        line-height: 50px;
        font-weight: 400;
      }
      ul {
        padding: 3% 0 0 5%;
        > li {
          line-height: 1.65rem;
          font-size: 0.8rem;
          color: #323232;
        }
      }
    }
  }
  @media(max-width:700px) {
    width: 100%;
    div{
      margin: 0;
      height: 250px;
      > div {
        > h4 {
          font-size: 0.625rem;
        }
        > ul {
          padding: 7.8% 0 0 6%;
          > li {
            font-size: 0.625rem;
          }
        }
      }  
    }
  }
`;



function SearchGuide() {
  return (
    <Container>
      <h2>사업단 검색</h2>
        <div>
          <Area>
            <h3>지역구분</h3>
            <table>
              <tr>
                <th>서울</th>
                <td>강남구</td>
                <td>영등포구</td>
                <td>강서구</td>
              </tr>
              <tr>
                <td>은평구</td>
                <td>동대문구</td>
                <th>경기</th>
                <td>고양</td>
              </tr>
              <tr>
                <td>부천</td>
                <td>남양주</td>
                <td>용인</td>
                <td>김포</td>
              </tr>
              <tr>
                <th>인천</th>
                <td>부평시</td>
                <th>제주</th>
                <td>제주시</td>
              </tr>
            </table>
          </Area>
          <Target>
            <h3>검색대상</h3>
            <div>
              <div>
                <h4>사업단</h4>
                <ul>
                  <li>서울본부</li>
                  <li>자산관리본부</li>
                  <li>JJ파트너스</li>
                  <li>유니온본부</li>
                </ul>
              </div>
              <div>
                <h4>보험플러스</h4>
                <ul>
                  <li>강남 세브란스 병원</li>
                </ul>
              </div> 
            </div>
          </Target>
        </div>
    </Container>
  )
}

export default SearchGuide;
