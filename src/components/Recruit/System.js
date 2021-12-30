import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import Title from '../Summary/Title';
import ScrollMagic from "scrollmagic";
import arrow from '../../img/sub/arrowIcon.png';
import career from '../../img/sub/career.svg';
import market from '../../img/sub/market.svg';
import salary from '../../img/sub/salary.svg';
import group from '../../img/sub/group.svg';
import duty from '../../img/sub/duty.svg';
import sales from '../../img/sub/sales.svg';
import support from '../../img/sub/support.svg';
import newBsiness from '../../img/sub/newBsiness.svg';

const ProgramData = [
  {
    id: 0,
    title: '경력우대',
    desc: '우수 인재 발굴을 위해 전 직장의\n경력을 획기적으로\n우대합니다.',
    icon: career,
    classname: 'delay-0'
  },
  {
    id: 1,
    title: '시장제공',
    desc: '회사가 보유한 다양한 채널 중\n본인의 능력에 적합한 시장(Market)을\n제공합니다.',
    icon: market,
    classname: 'delay-1'
  },
  {
    id: 2,
    title: '승급제도',
    desc: '동기부여와 성과에 대한\n목표의식 고취를 위한\n승급제도를 운영합니다.',
    icon: salary,
    classname: 'delay-2'
  },
  {
    id: 3,
    title: '조직활성화',
    desc: '사내 벤쳐 제도, 조직단위별 워크샵,\n리더쉽 교육, TF활성화 등 조직문화를\n만들어갑니다.',
    icon: group,
    classname: 'delay-3'
  },
  {
    id: 4,
    title: '직무역량',
    desc: '신규입사 멘토제도 운영, 전문강사 특강,\n보험 전문자격증 취득 지원을\n합니다.',
    icon: duty,
    classname: 'delay-4'
  }
]

const InsentiveData = [
  {
    id: 0,
    title: '영업채널',
    desc: '동기부여를 위해 능력과\n성과에 따른 폭넓은\n인센티브 제도 운영',
    icon: sales,
    classname: 'delay-0'
  },
  {
    id: 1,
    title: '지원채널',
    desc: '영업활성화를 위한 제도확립,\n기반구축등 성과에 따른\n인센티브 제도 운영',
    icon: support,
    classname: 'delay-1'
  },
  {
    id: 2,
    title: '신사업',
    desc: '신사업모델 발굴과 성과\n발생시 합리적인\n보상제도 마련',
    icon: newBsiness,
    classname: 'delay-2'
  }
]

const Container = styled.section`
  padding-top: 5.8%;

  @media (max-width: 700px) {
    padding-top: 0;
  }
`;

const CircleWrap = styled.div`
  padding: 8.6% 8.73% 0%;
 
  > ul {
    display: flex;
    justify-content: space-between;
    padding: 8.19% 0% 9.1%;

    > li {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &::after {
        content: '';
        display: block;
        width: 20px;
        height: 50px;
        background-image: url(${arrow});
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 3;
        position: absolute;
        right: -10px;
      }
      :last-child::after {
        content: none;
      }
    > div {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 6px solid transparent;
      font-size: 1.4rem;
      font-family: 'GoyangDeogyang';
      color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
      :first-child > div {
        background: linear-gradient(#fff, #fff),linear-gradient(60deg, #F0F0F0 70%, #F9BDBD 30%);
        background-origin: border-box;
        background-clip: content-box, border-box;
      }
      :nth-child(2) > div {
        background: linear-gradient(#fff, #fff),linear-gradient(90deg, #F0F0F0 50%, #F9BDBD 50%);
        background-origin: border-box;
        background-clip: content-box, border-box;
      }
      :nth-child(3) > div {
        background: linear-gradient(#fff, #fff),linear-gradient(-60deg, #F9BDBD 70%, #F0F0F0 30%);
        background-origin: border-box;
        background-clip: content-box, border-box;
      }
      :last-child > div {
        background: linear-gradient(#fff, #fff),linear-gradient(#F9BDBD 100%, #F9BDBD 100%);
        background-origin: border-box;
        background-clip: content-box, border-box;      
      }
    }
  }
  @media (max-width: 700px) {
    padding: 8% 5.333333333333333% 0%;

    > ul {
      flex-flow: row wrap;
      padding: 7.3% 0 8%;
      > li {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8% 0;
        :nth-child(3),:nth-child(4) {
          margin: 0;
        }
        :nth-child(2)::after{
          transform: rotate(90deg);
          bottom: -9.5px;
          left: 47%;
        }
        &:nth-child(3)::after{
          transform: rotate(180deg);
          left: -3.5px;

        }
        :nth-child(4) {
          order: 3;
        }
        :nth-child(3) {
          order: 4;
        }
        &::after {
        width: 7px;
        height: 19px;
        background-image: url(${arrow});
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 3;
        position: absolute;
        right: -3.5px;
        }
      }
      > li > div {
        width: 120px;
        height: 120px;
        border-width: 3px;
        font-size: 0.625rem;
        }
      }
    }
`;

const Program = styled.div`
  padding: 6.16% 8.333333333333333% 0;
  &.show .delay-0{
    transform: translateY(0);
    opacity: 1;
  }
  &.show .delay-1{
    transform: translateY(0);
    opacity: 1;
  }
  &.show .delay-2{
    transform: translateY(0);
    opacity: 1;
  }
  &.show .delay-3{
    transform: translateY(0);
    opacity: 1;
  }
  &.show .delay-4{
    transform: translateY(0);
    opacity: 1;
  }
  > ul {
    display: flex;
    flex-flow: row wrap;
    padding: 8.5% 0 8.4%;
    

    > li {
      width: 25%;
      padding: 4% 0 0 1.6%;
      margin-right: 12.5%;
      margin-bottom: 3.13%;
      border: 1px solid #BEBEBE;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      opacity: 0;

      &.delay-0 {
      transition-delay: 0;
      transform: translateY(-50%);
      opacity: 1;
      }
      &.delay-1 {
      transition-delay: .3s;
      transform: translateY(-100%);
      }
      &.delay-2 {
      transition-delay: .5s;
      transform: translateY(-200%);
      }
      &.delay-3 {
      transition-delay: .7s;
      transform: translateY(-300%);
      }
      &.delay-4 {
      transition-delay: .9s;
      transform: translateY(-400%);
      }
      :nth-child(3) {
        margin-right: 0;
      }

      > .img-wrap {
        align-self: flex-end;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > .text-wrap {
        white-space: pre;

        > h3 {
          font-size: 1rem;
          color: #1A1A1A;
          font-family: 'GoyangDeogyang';
        }
        > p {
          font-size: 0.8rem;
          line-height: 1.166666666666667rem;
          padding: 21.1% 0 20.6% 0;
        }
      }
    }
  }
  @media (max-width: 700px) {
    padding: 10.5% 5.4% 0;

    
    > ul {
      flex-flow: column;
      padding: 11.2% 3.7% 13%;
      > li {
        flex-direction: row;
        width: 100%;
        align-items: center;
        padding: 3.3% 0;
        margin-right: 0;
        opacity: 0;
        
        &:last-child {
          margin-bottom: 0;
        }
        .img-wrap {
          order: 1;
          width: 100px;
          height: 100px;
          align-self: center;
          > img {
            width: 50%;
          }
        }
        .text-wrap {
          align-self: center;
          order: 2;
          padding-left: 10.5%;
          > h3 {
            color: #1A1A1A;
            font-family: 'GoyangDeogyang';
          }
          > p {
            font-size: 0.625rem;
            line-height: 0.8958333333333333rem;
            padding: 10% 0 0 0;
          }
        }
      }
    }
  }
`;

const Incentive = styled.div`
  padding: 4.1% 8.333333333333333% 0;
  &.show .delay-0{
    transform: translateY(0);
    opacity: 1;
  }
  &.show .delay-1{
    transform: translateY(0);
    opacity: 1;
  }
  &.show .delay-2{
    transform: translateY(0);
    opacity: 1;
  }
  &.show .delay-3{
    transform: translateY(0);
    opacity: 1;
  }
   
   > ul {
    display: flex;
    justify-content: space-between;
    padding: 10% 0 12.5%;
    
    > li {
      display: flex;
      align-items: center;
      width: 25%;
      padding: 1.04% 0;
      opacity: 0;
      transition-duration: 4s;
      transform: translateY(100%);

      &.delay-0 {
      transition-delay: 0;
      transform: translateY(50%);
      opacity: 1;
      }
      &.delay-1 {
      transition-delay: .3s;
      

      }
      &.delay-2 {
      transition-delay: .4s;
      transform: translateY(200%);
      }
      &.delay-3 {
      transition-delay: .5s;
      transform: translateY(300%);
      }
      > .img-wrap {
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F8F8F8;
        border-radius: 50%;
      }
      > .text-wrap {
        white-space: pre;
        padding-left: 6.8%;
        align-self: flex-start;

        > h3 {
          color: #1A1A1A;
          font-size: 1rem;
          font-family: 'GoyangDeogyang';
          border-bottom: 3px solid #B8292D;
          display: inline-block;
          line-height: 1.5rem;
        }
        > p {
          font-size: 0.8rem;
          line-height: 1.166666666666667rem;
          padding: 20% 0 0 0;
        }
      }
    }
   }
   @media (max-width: 700px) {
    padding: 8.5% 5.4% 0;

    > ul {
      padding: 13% 3.6% 12.5%;
      flex-direction: column;

    > li {
      width: 100%;
      padding: 1.04% 0;
      margin-bottom: 12%;

      > .img-wrap {
        width: 100px;
        height: 100px;
        
        > img {
          width: 50%;
        }
      }
      > .text-wrap {
        padding-left: 10.3%;
        align-self: center;

        > h3 {
          line-height: 1.1875rem;
        }
        > p {
          font-size: 0.625rem;
          line-height: 1.166666666666667rem;
          padding: 12% 0 0 0;
        }
      }
    }
   }
  }
`;

const System = () => {
  const intRef = useRef(null);
  const progRef = useRef(null);
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
      new ScrollMagic
      .Scene({
        triggerElement: intRef.current,
        triggerHook: .8
      })
      .setClassToggle(intRef.current, 'show')
      .addTo(controller);
      new ScrollMagic
        .Scene({
          triggerElement: progRef.current,
          triggerHook: .8
        })
        .setClassToggle(progRef.current, 'show')
        .addTo(controller);
  }, []);
  
  return (
    <Container>
      <CircleWrap>
      <Title en={'Recruitment procedure'} ko={'채용절차'} />
        <ul>
          <li>
            <div>서류전형</div>
          </li>
          <li>
            <div>실무면접</div>
          </li>
          <li>
            <div>임원면접</div>
          </li>
          <li>
            <div>최종합격</div>
          </li>
        </ul>
      </CircleWrap>
      <Program ref={progRef}>
        <Title en={'A nurturing program'} ko={'육성프로그램'} />
        <ul>
          {ProgramData.map((pd) => (
            <li key={pd.id} className={pd.classname}>
              <div className='text-wrap'>
                <h3>{pd.title}</h3>
                <p>{pd.desc}</p>
              </div>
              <div className='img-wrap'>
                <img src={pd.icon} alt={pd.title} />
              </div>
            </li>
          ))}
        </ul>
      </Program>
      <Incentive ref={intRef}>
        <Title en={'Incentive'} ko={'인센티브 제도'} />
        <ul>
          {InsentiveData.map((nd) => (
            <li key={nd.id} className={nd.classname}>
              <div className='img-wrap'>
                <img src={nd.icon} alt={nd.title} />
              </div>
              <div className='text-wrap'>
                <h3>{nd.title}</h3>
                <p>{nd.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Incentive>
    </Container>
  )
}

export default System;
