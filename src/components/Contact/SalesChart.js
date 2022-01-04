import React from 'react'
import styled from 'styled-components';
import Title from '../Summary/Title';

const Container = styled.section`
  padding: 7% 8.3%;
  @media(max-width: 700px) {
    padding: 5% 6.5%;
  }
`;
const ChartWrap = styled.div`
  position: relative;
  
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 8.59375%;
    @media(max-width: 700px) {
      padding: 0;
    }
  }
  .ceo-wrap{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5.13% 0 4% 0;
    position: relative;

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
      @media(max-width: 700px) {
      width: 80px;
      height: 80px;
      font-size: 0.625rem;
      }
    }
    
  }
  .oper-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-bottom: 3.3%;
    
    ::before{
    content: '';
    display: flex;
    width: 60.5625;
    border-top: 3px solid #F0F0F0;
    height: 100px;
    position: absolute;
    left: 0;
    top: 100%;
  }
    > p {
      width: 250px;
      height: 80px;
      border-radius: 68px;
      background-color: #F0F0F0;
      color: #B8292D;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      @media(max-width: 700px) {
      width: 85px;
      height: 30px;
      font-size: 0.625rem;
      border-radius: 68px;
      }
      ::after{
        content: '';
        display: block;
        height: 65px;
        width: 3px;
        background-color: #F0F0F0;
        position: absolute;
        bottom: 70px;
        left: 50%;
        z-index: -1;
        @media(max-width: 700px) {
          width: 1.5px;
          height: 100px;
          bottom: -40px;
        }
      }
    }
  }
`;
const ChannelWrap = styled.ul`
  position: relative;
  padding-top: 3.1%;
  width: 22.8%;
  @media(max-width: 700px) {
    width: 24.9%;
  
  }
  > li {
    color: #1A1A1A;
    
  }
  > li > div {
    width: 300px;
    height: 80px;
    border: 4px solid #F0F0F0;
    background-color: #FFFFFF;
    border-radius: 108px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    margin-top: 10%;
    @media(max-width: 700px) {
      width: 80px;
      height: 30px;
      font-size: 0.625rem;
      border: 2px solid #F0F0F0;
    }
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
    z-index: 3;
    @media(max-width: 700px) {
      width: 80px;
      height: 30px;
      font-size: 0.625rem;
    }
    ::before{
    content: '';
    display: block;
    width: 100%;
    height: 157px;
    border-left: 3px solid #F0F0F0;
    position: absolute;
    left: 50%;
    z-index: -1;
    @media(max-width: 700px) {
      height: 64px;
      border-left: 1.5px solid #F0F0F0;
    }
    }
  }
  .title-box.channel1::before {
    border-top: 3px solid #F0F0F0;
    width: 250%;
    @media(max-width: 700px) {
      border-top: 1.5px solid #F0F0F0;
    }
  }
  .title-box.channel3::before {
    width: 100%;
    border-top: 3px solid #F0F0F0;
    border-left: 0;
    border-right: 3px solid #F0F0F0;
    left: -50%;
    @media(max-width: 700px) {
      border-top: 1.5px solid #F0F0F0;
      border-right: 1.5px solid #F0F0F0;
    }
  }
`;
const BusiTeamList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8% 0 0;
    list-style: disc;
  > li {
    line-height: 1.86rem;
    @media(max-width: 700px) {
      font-size: 0.625rem;
      line-height: 1.0375rem;
    }
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
              <div className='title-box channel1'>뉴비즈채널</div>
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
              <div className='title-box channel2'>금융서비스부문</div>
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
              <div className='title-box channel3'>컨버젼스채널</div>
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
