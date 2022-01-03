import React from 'react'
import styled from 'styled-components';
import Title from '../Summary/Title';

const Container = styled.section`
  padding: 7% 8.3%;
`;
const ChartWrap = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5% 8.59375%;
  }
  
  /* flex-flow: column wrap; */
  .ceo-wrap{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
      color: #FFFFFF;
      width: 150px;
      height: 150px;
      background-color: #444444;
      border: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
  .oper-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
      width: 250px;
      height: 80px;
      border-radius: 68px;
      background-color: #F0F0F0;
      color: #B8292D;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const ChannelWrap = styled.ul`
  > li {
    color: #1A1A1A;
  }
  > li > div {
    width: 300px;
    height: 80px;
    border: 4px solid #F0F0F0;
    border-radius: 108px;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
 
  
 .title-box {
    background-color: #B8292D;
    width: 300px;
    height: 80px;
    border-radius: 108px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 11.4%;
    border: 0;
  }
`;
const BusiTeamList = styled.ul`
    padding: 10% 0; 
    list-style: disc;
  > li {
    line-height: 1.86rem;
  }
`;

const SalesChart = () => {
  return (
    <Container>
      <Title en="Sales organization chart" ko="영업 조직도"/>
      <ChartWrap>
        <div>
          <div className='ceo-wrap'>
            <p>대표이사</p>
          </div>
          <div className='oper-wrap'>
            <p>운영대표</p>
          </div>
        </div>
        <div>
          <ChannelWrap>
            <li>
              <div className='title-box'>뉴비즈채널</div>
            </li>
            <li>
              <div>RM본부</div>
              <BusiTeamList>
                <li>다온사업단</li>
              </BusiTeamList>
            </li>
            <li>
              <div>세연본부</div>
              <BusiTeamList>
                <li>인앤인사업단</li>
              </BusiTeamList>
            </li>
            <li>
              <div>인큐베이터본부</div>
              <BusiTeamList>
                <li>스타인슈지점</li>
              </BusiTeamList>
            </li>
          </ChannelWrap>

          <ChannelWrap>
            <li>
              <div className='title-box'>금융서비스부문</div>
            </li>
            <li>
              <div>서울본부</div>
              <BusiTeamList>
                <li>청담사업단</li>
                <li>선물사업단</li>
                <li>논현사업단</li>
                <li>논현기업사업단</li>
                <li>신사사업단</li>
              </BusiTeamList>
            </li>
            <li>
              <div>자산관리본부</div>
              <BusiTeamList>
                <li>WM사업단</li>
                <li>강남사업단</li>
                <li>플랫폼사업단</li>
                <li>반포사업단</li>
              </BusiTeamList>
            </li>
            <li>
              <div>JJ 파트너스</div>
            </li>
          </ChannelWrap>

          <ChannelWrap>
            <li>
              <div className='title-box'>컨버젼스채널</div>
            </li>
            <li>
              <div>유니온지사</div>
              <BusiTeamList>
                <li>유니온 1본부</li>
                <li>유니온 2본부</li>
                <li>유니온 3본부</li>
                <li>유니온 4본부</li>
                <li>유니온 5본부</li>
                <li>유니온 6본부</li>
              </BusiTeamList>
            </li>
            <li>
              <div>트리플본부</div>
            </li>
            <li>
              <div>AU본부</div>
            </li>
            <li>
              <div>에이스본부</div>
            </li>
            <li>
              <div>제주본부</div>
            </li>
            <li>
              <div>중부본부</div>
            </li>
          </ChannelWrap>
        </div>
      </ChartWrap>
    </Container>
  )
}

export default SalesChart;
