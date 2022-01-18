import React,{ useEffect,useRef } from 'react'
import styled from 'styled-components';
import Title from '../Summary/Title';
import ScrollMagic from "scrollmagic";

const Container = styled.section`
  padding: 7% 8.3%;

  @media(max-width: 700px) {
    padding: 5% 6.5%;
  }
`;
const ChartWrap = styled.div`
  position: relative;
  &.show .item{
  opacity: 1;
  transform: translateY(0);
}
.item {
    opacity: 0;
    transition: .5s ease-out .6s;
    transform: translateY(20%);
  }
.item.delay-1 { 
 transition-delay: .3s;
}
.item.delay-2 {
 transition-delay: .6s;
}
.item.delay-3 {
 transition-delay: .9s;
}
.item.delay-4 {
 transition-delay: 1.2s;
}
.item.delay-5 {
 transition-delay: 1.5s;
}
.item.delay-6 {
 transition-delay: 1.8s;
}
.item.delay-7 {
 transition-delay: 2.1s;
}
.item.delay-8 {
 transition-delay: 2.4s;
}
.item.delay-9 {
 transition-delay: 2.7s;
}
.item.delay-10 {
 transition-delay: 3s;
}
.item.delay-11 {
 transition-delay: 3.3s;
}
.item.delay-12 {
 transition-delay: 3.6s;
}
.item.delay-13 {
 transition-delay: 3.9s;
}
.item.delay-14 {
 transition-delay: 4.2s;
}
.item.delay-15 {
 transition-delay: 4.5s;
}
.item.delay-16 {
 transition-delay: 4.8;
}
.item.delay-17 {
 transition-delay: 5.1s;
}
.item.delay-18 {
 transition-delay: 5.4s;
}
.item.delay-19 {
 transition-delay: 5.7s;
}
.item.delay-20 {
 transition-delay: 6s;
}
.item.delay-21 {
 transition-delay: 6.3s;
}
.item.delay-22 {
 transition-delay: 6.6s;
}
.item.delay-23 {
 transition-delay: 6.9s;
}
  
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 8.59375%;
    @media(max-width: 700px) {
      padding: 0 4.8%;
    }
  }
  .ceo-wrap{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5.13% 0 4% 0;
    position: relative;
    z-index: 3;

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
  width: 18.78%;

  @media(max-width: 700px) {
    width: 24.5%;
  }
  > li {
    color: #1A1A1A;
    
  }
  > li > div {
    width: 100%;
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
      /* width: 80px; */
      height: 30px;
      font-size: 0.625rem;
      border: 2px solid #F0F0F0;
    }
  }
 .title-box {
    background-color: #B8292D;
    width: 100%;
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
      /* width: 80px; */
      height: 30px;
      font-size: 0.625rem;
    }
    ::before{
    content: '';
    display: block;
    width: 120%;
    height: 157px;
    border-left: 3px solid #F0F0F0;
    border-top: 3px solid #F0F0F0;
    position: absolute;
    left: 50%;
    z-index: -1;
    @media(max-width: 700px) {
      height: 64px;
      border-left: 1.5px solid #F0F0F0;
      border-top: 0;
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
      align-self: flex-start;
    }
  }

`;

const SalesChart = () => {

  const chartRef = useRef(null);
  useEffect(() => {
    
    
    new ScrollMagic
      .Scene({
        triggerElement: chartRef.current,
        triggerHook: .8 
      })
      .setClassToggle(chartRef.current, 'show')
      .addTo(new ScrollMagic.Controller())


  }, []);   
  return (
    <Container>
      <Title en="Sales organization chart" ko="영업 조직도"/>
      <ChartWrap ref={chartRef}>
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
              <div className='item delay-4'>RM본부</div>
              <BusiTeamList className='item delay-5'>
                <li>다온사업단</li>
              </BusiTeamList>
            </li>
            <li>
              <div className='item delay-6'>세연본부</div>
              <BusiTeamList className='item delay-7'>
                <li>인앤인사업단</li>
              </BusiTeamList>
            </li>
            <li>
              <div className='item delay-8'>인큐베이터본부</div>
              <BusiTeamList className='item delay-9'>
                <li>스타인슈지점</li>
              </BusiTeamList>
            </li>
          </ChannelWrap>

          <ChannelWrap>
            <li>
              <div className='title-box channel2'>금융서비스부문</div>
            </li>
            <li>
              <div className='item delay-11'>서울본부</div>
              <BusiTeamList className='item delay-12'>
                <li>청담사업단</li>
                <li>선물사업단</li>
                <li>논현사업단</li>
                <li>논현기업사업단</li>
                <li>신사사업단</li>
              </BusiTeamList>
            </li>
            <li>
              <div className='item delay-13'>자산관리본부</div>
              <BusiTeamList className='item delay-14'>
                <li>WM사업단</li>
                <li>강남사업단</li>
                <li>플랫폼사업단</li>
                <li>반포사업단</li>
              </BusiTeamList>
            </li>
            <li>
              <div className='item delay-15'>JJ 파트너스</div>
            </li>
          </ChannelWrap>

          <ChannelWrap>
            <li>
              <div className='title-box channel3'>컨버젼스채널</div>
            </li>
            <li>
              <div className='item delay-17'>유니온지사</div>
              <BusiTeamList className='item delay-18'>
                <li>유니온 1본부</li>
                <li>유니온 2본부</li>
                <li>유니온 3본부</li>
                <li>유니온 4본부</li>
                <li>유니온 5본부</li>
                <li>유니온 6본부</li>
              </BusiTeamList>
            </li>
            <li>
              <div className='item delay-19'>트리플본부</div>
            </li>
            <li>
              <div className='item delay-20'>AU본부</div>
            </li>
            <li>
              <div className='item delay-21'>에이스본부</div>
            </li>
            <li>
              <div className='item delay-22'>제주본부</div>
            </li>
            <li>
              <div className='item delay-23'>중부본부</div>
            </li>
          </ChannelWrap>
        </div>
      </ChartWrap>
    </Container>
  )
}

export default SalesChart;
