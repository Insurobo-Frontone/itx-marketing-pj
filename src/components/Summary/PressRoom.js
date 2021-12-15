import React from 'react'
import styled from 'styled-components';
import Title from './Title';

const News = [
  {
    id: 0,
    date: '2021-07-23',
    title: '[조이뉴스24] 아이티엑스마케팅 ‘건강한 상속·증여연구소’출범. 자산 관리 서비스의 차별화에 나선다!',
    content: '보험전문대리점(GA)인 아이티엑스마케팅(대표이사 전병무)은 상속과 증여에 대한 전문적인 자산관리 서비스를 제공하기 위해 ‘건강한 상속·증여 연구소’를 출범한다고 13일에 밝혔다.',
    subCont: '세부, 법무, 노무, 부동산 등 각 분의 전문가들로 구성되며, 고객의 자산관리 전반에 걸쳐 밀착컨설팅을 제공할 예정이다.···'
  },
  {
    id: 1,
    date: '2021-07-23',
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

const VisualContainer = styled.section`
  width: 100%;
  padding: 11.25% 7.8125% 5.3%;
  background-color: #F8F8F8;
`;
const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextWrap = styled.div`
  width: 50%;
  
  > h1 {
    font-size: 2rem;
    color: #1A1A1A;
    line-height: 2.375rem;
    font-family: 'GoyangDeogyang';
    padding-bottom: 6.8%;
    br {
    display: none;
    }
  }
  > p {
    font-size: 1rem;
    line-height: 1.366666666666667rem;
  }
  
 
`;
const ImgWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
const PressRoom = () => {
  return (
    <ManageIdeaContainer>
      <Title en={'Press Room'} ko={'프레스 룸'} />
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

export default PressRoom