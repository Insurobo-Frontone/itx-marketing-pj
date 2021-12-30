import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Title from './Title';
import ScrollMagic from "scrollmagic";

import icon1 from '../../img/sub/Accompany.svg';
import icon2 from '../../img/sub/Contribution.svg';
import icon3 from '../../img/sub/Experties.svg';
import icon4 from '../../img/sub/Integrity.svg';


const ManageIdeaContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 9% 7.8125% 0;

  
`;
const IdeaList = styled.ul`
  display: flex;
  white-space: pre;
  text-align: center;
  padding: 14% 7.239583333333333%;

  &.show li {
    /* transform: translateX(0); */
    opacity: 1;
    transform: translateY(0);
  }
 
  @media (max-width: 700px) {
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    padding: 12% 0;
  }
`;
const Items = styled.li`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 0.6s;
  /* transition: 3s; */
  opacity: 0;

  &.delay-0 {
    transition-delay: 0;
    transform: translateY(50%);
    opacity: 1;
  }
  &.delay-1 {
    transition-delay: .3s;
    transform: translateY(100%);
  }
  &.delay-2 {
    transition-delay: .4s;
    transform: translateY(200%);
  }
  &.delay-3 {
    transition-delay: .5s;
    transform: translateY(300%);
  }
  @media (max-width: 700px) {
  &.delay-0 {
    transition-delay: .0s;
    transform: translateY(40%);
    opacity: 0;
  }
  &.delay-1 {
    transition-delay: .1s;
    transform: translateY(40%);
  }
    &.delay-2 {
    transition-delay: .2s;
    transform: translateY(40%);
  }
  &.delay-3 {
    transition-delay: .3s;
    transform: translateY(40%);
    opacity: 0;
  }
}
  @media (max-width: 700px) {
    justify-content: center;
    width: 50%;
    margin-top: 6%;
  }
  > div {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F8F8F8;
    border-radius: 50%;
    margin-bottom: 11%;

    @media (max-width: 700px) {
      width: 90px;
      height: 90px;
      padding: 6%;
      margin:13% 11% 2%;
    }
  }
  > h3 {
    font-size: 1rem;
    font-family: 'GoyangDeogyang';
    line-height: 1.15rem;
    color: #323232;
    padding-bottom: 5%;
    @media (max-width: 700px) {
      font-size: 0.8125rem;
      line-height: 0.9375rem;
      padding: 8% 0;
    }
  }
  > p {
    font-size: 0.8rem;
    line-height: 0.9rem;
    @media (max-width: 700px) {
      font-size: 0.625rem;
      line-height: 0.6875rem;
      height: 7vh;
    }
  }
`;

const ManageIdea = () => {

  const ideaRef = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
      new ScrollMagic
      .Scene({
        triggerElement: ideaRef.current,
        triggerHook: .8
      })
      .setClassToggle(ideaRef.current, 'show')
      .addTo(controller);
  }, []);
   
  return (
    <ManageIdeaContainer>
      <Title en={'Management\nideology'} ko={'경영 이념'} />
      <IdeaList ref={ideaRef}>
        <Items className='delay-0'>
          <div><img src={icon1} alt="동행" /></div>
          <h3>동행<br />(Accompany)</h3>
          <p>고객의 Life Cycle에 맞는<br />필요한 금융서비스 제공</p>
        </Items>
        <Items className='delay-1'>
          <div><img src={icon2} alt="기여" /></div>
          <h3>기여<br />(Contribution)</h3>
          <p>FP와 함께 회사가<br />FP의 성장을 지원</p>
        </Items>
        <Items className='delay-2'>
          <div><img src={icon3} alt="전문성" /></div>
          <h3>전문성<br />(Expertise)</h3>
          <p>금융전문가로 성장하여<br />고객으로부터 존경받는 FP</p>
        </Items>
        <Items className='delay-3'>
          <div><img src={icon4} alt="진실성" /></div>
          <h3>진실성<br />(Integrity)</h3>
          <p>합리적인 가격으로 신뢰할<br />수 있는 보험회사를 선정<br />하는 최선의 상품 제공</p>
        </Items>
      </IdeaList>
    </ManageIdeaContainer>
  )
}

export default ManageIdea;
