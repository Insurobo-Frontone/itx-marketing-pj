import React, { useEffect, useRef }  from 'react'
import styled from 'styled-components';
import Title from './Title';
import ScrollMagic from "scrollmagic";
import gsap from "gsap";

const Item = [
  {
    id: 0,
    year: '2011',
    result: '회사설립 및 보험대리점 사업개시'
  },
  {
    id: 1,
    year: '2013\n~ 2015',
    result: '신한생명 3년 연속 우수법인상 수상'
  },
  {
    id: 2,
    year: '2015',
    result: '마트슈랑스 사업개시'
  },
  {
    id: 3,
    year: '2018',
    result: 'ITX마케팅 제주본부 출범'
  },
  {
    id: 4,
    year: '2019',
    result: '이마트 보험운영사 선정'
  },
  {
    id: 5,
    year: '2020',
    result: 'ITX마케팅 병원라운지 사업개시'
  },
  {
    id: 6,
    year: '2021',
    result: '06. ITX마케팅 금융사업본부 출범\n07. 보험플러스 1호점 오픈\n10. ITX마케팅 상속증여연구소 출범'
  }
]

const HistoryContainer = styled.section`
  width: 100%;
  padding: 9% 9.479166666666667% 5% 7.8125%;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    padding: 17.3% 7% 0 6.6%;
  }
`;
const HistoryList = styled.ul`
  padding: 5% 0 15% 15.6%;
  display: flex;
  flex-flow: column nowrap;
  opacity: 0;
  transition: 1s;
  transform: translateY(500px);
&.show{
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0s;
}
  @media (max-width: 700px) {
    width: 100%;
    padding: 6% 0 12% 10.6%;
  }

`;
const Items = styled.li`
  display: flex;
  width: 100%;
  white-space: pre;
:nth-child(2) > span {
  @media (max-width: 700px) {
    padding-bottom: 21%;
  }
}
:last-child > span {
  line-height: 2rem;
  padding-bottom: 3.6%;
  @media (max-width: 700px) {
    line-height: 1rem;
    padding-bottom: 0%;
  }
}

> p {
  width: 20.90%;
  font-size: 2.5rem;
  color: #B8292D;
  white-space: pre;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 1.25rem;
    width: 25%;
    
  }
}
> span {
  display: inline-block;
  font-size: 1.25rem;
  color: #323232;
  padding-left: 4.6%;
  padding-bottom: 14%;
  border-left: 4px solid #B8292D;
  position: relative;
  z-index: 1;
  @media (max-width: 700px) {
    border-left: 1px solid #B8292D;
    font-size: 0.625rem;
    padding-left: 5.2%;
    padding-bottom: 15.5%;
  }

  ::before {
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #B8292D;
    position: absolute;
    top: 0;
    left: -8.5px;
    z-index: 2;
    @media (max-width: 700px) {
      width: 7px;
      height: 7px;
      left: -4px;
    }
  }
}
`;

const BigTextScroll = styled.div`
    > h2 {
      width: 100%;
      font-size: 6rem;
      text-align: right;
      font-weight: 300;
      color: #F0F0F0;
      opacity: 0;
      transform: translateX(-1000px);
      transition: 3s;
    
    &.show{
      opacity: 1;
      transform: translateX(150px);
      transition-delay: 0s;
      animation-duration: 3s;
      }
    }

    @media (max-width: 700px) {
     > h2 {
      font-size: 2.5rem;
      overflow: hidden;
      text-overflow: initial;
      white-space: nowrap;
      }
    }
  
`;

const History = () => {
  const hisRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic
        .Scene({
          triggerElement: hisRef.current,
          triggerHook: .8
        })
        .setClassToggle(hisRef.current, 'show')
        .addTo(controller);

        new ScrollMagic
        .Scene({
          triggerElement: textRef.current,
          triggerHook: .8
        })
        .setClassToggle(textRef.current, 'show')
        .addTo(controller);
  });


  return (
    <HistoryContainer>
      <Title en={'Company\nhistory'} ko={'회사 연혁'} />
      <HistoryList ref={hisRef}>
        {Item.map((hi) => (
          <Items 
            key={hi.id}>
            <p>{hi.year}</p>
            <span>{hi.result}</span>
          </Items>
        ))}
        </HistoryList>
          <BigTextScroll>
            <h2 ref={textRef}>
              고객과 FP의 행복한 동행
            </h2>
          </BigTextScroll>
    </HistoryContainer>
  )
}

export default History;
