import React  from 'react'
import styled from 'styled-components';
import Title from './Title';


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
  padding: 9% 9.479166666666667% 0 7.8125%;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    padding: 17.3% 7% 0 6.6%;
  }
`;
const HistoryList = styled.ul`
  width: 85%;
  padding: 5% 0 10% 6.12%;
  align-self: flex-end;
  @media (max-width: 700px) {
    width: 100%;
    padding: 12.3% 0 12% 10.6%;
  }
`;
const Items = styled.li`
  display: flex;
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
  width: 14.56%;
  font-size: 2.5rem;
  color: #B8292D;
  white-space: pre;
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
const ScrollText = styled.div`
  > h3 {
    font-size: 6rem;
    text-align: right;
    color: #F0F0F0;
    padding: 5.12% 0 5.4% 0;
    font-weight: 300;
    
    @media (max-width: 700px) {
    font-size: 2.5rem;
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;
    }
  }
  
`;
const History = () => {
  
  return (
    <HistoryContainer>
      <Title en={'Company\nhistory'} ko={'회사 연혁'} />
      <HistoryList>
      {Item.map((hi) => (
        <Items key={hi.id}>
          <p>{hi.year}</p>
          <span>{hi.result}</span>
        </Items>
      ))}
      </HistoryList>
      <ScrollText>
        <h3>고객과 FP의 행복한 동행</h3>
      </ScrollText>
    </HistoryContainer>
  )
}

export default History
