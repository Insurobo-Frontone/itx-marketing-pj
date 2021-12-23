import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import icon1 from '../../img/sub/Accompany.svg';
import icon2 from '../../img/sub/Contribution.svg';
import icon3 from '../../img/sub/Experties.svg';
import icon4 from '../../img/sub/Integrity.svg';

const List = [
  {
    id: 0,
    icon: icon1,
    title: '동행\n(Accompany)',
    desc:'고객의 Life Cycle에 맞는\n필요한 금융서비스 제공'
  },
  {
    id: 1,
    icon: icon2,
    title: '기여\n(Contribution)',
    desc:'FP와 함께 회사가\nFP의 성장을 지원'
  },
  {
    id: 2,
    icon: icon3,
    title: '전문성\n(Expertise)',
    desc:'금융전문가로 성장하여\n고객으로부터 존경받는 FP' 
  },
  {
    id: 3,
    icon: icon4,
    title: '진실성\n(Integrity)',
    desc:'합리적인 가격으로 신뢰할\n수 있는 보험회사를 선정\n하는 최선의 상품 제공' 
  }
]
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
      padding: 13% 11%;
      margin-bottom: 2%;
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
  return (
    <ManageIdeaContainer>
      <Title en={'Management\nideology'} ko={'경영 이념'} />
      <IdeaList>
      {List.map((il) => (
        <Items key={il.id}>
          <div><img src={il.icon} ait={il.title} /></div>
          <h3>{il.title}</h3>
          <p>{il.desc}</p>
        </Items>
      ))}
      </IdeaList>
    </ManageIdeaContainer>
  )
}

export default ManageIdea;
