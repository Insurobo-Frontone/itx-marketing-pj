import React, { useRef } from 'react'
import styled from 'styled-components';
import Button from '../Button'

import insurtech from "../../img/sub/insurtech.png"
import healthCare from "../../img/sub/healthCare.png"
import financial from "../../img/sub/financial.png"
import bigData from "../../img/sub/bigData.png"

const TypeContainer = styled.section`
  padding: 10.12% 0 2.4% 0;
`;
const TypeList = styled.ul`

`;
const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 4.7%;
  position: relative;

  .text-box{
    position: absolute;
    right: 7.8125%;
    width: 49.21875%;
    padding: 3.1%;
    box-shadow: 2px 4px 22px rgba(0, 0, 0, 0.2);
    /* height: 58.33333333333333%; */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #FFFFFF;
    
    
    > div {
      width: 44%;
      > span {
        font-size: 1.25rem;
        color: #767676;
      }
      > h1 {
        font-size: 2.5rem;
        padding-top: 2.5%;
        padding-bottom: 15.7%;
        color: #1A1A1A;
      }
      > p {
        line-height: 1.366666666666667rem;
      }
    }
  }
`;
const Type = [
  {
    id: 0,
    image: insurtech,
    en: 'Insurtech',
    ko: '인슈어테크',
    desc: '데이터 분석, 인공지능(AI)등 정보기술(IT)을 활용하여 기존의 보험 산업을 혁신하는 서비스 분야의 기업 또는 개인',
  },
  {
    id: 1,
    image: healthCare,
    en: 'Health care',
    ko: '헬스케어',
    desc: '기존의 의료서비스에 질병 예방 및 관리 개념을 포함한 전반적인 건강관리 서비스를 제공하는 기업',
  },
  {
    id: 2,
    image: financial,
    en: 'Financial services',
    ko: '금융서비스',
    desc: '대출, 보험, 투자 등 다양한 금융상품에 대한 컨설팅과 서비스 및 상품 line-up을 보유한 기업',
  },
  {
    id: 3,
    image: bigData,
    en: 'Big Data',
    ko: '빅데이터',
    desc: '데이터의 수집, 저장, 분석을 통하여 다양한 마케팅을 진행하는 기업 또는 솔루션',
  },
]

const PartnerType = () => {
  const fadeRef = useRef(null);

  return (
    <TypeContainer>
      <TypeList>
      {Type.map((td) => (
        <Item>
          <img src={td.image} alt={td.ko} />
          <div className='text-box'>
            <div ref={fadeRef}>
              <span>{td.en}</span>
              <h1>{td.ko}</h1>
              <p>{td.desc}</p>
            </div>
            <Button primary="제휴상담문의"></Button>
          </div>
        </Item>
      ))}
      </TypeList>
    </TypeContainer>
  )
}

export default PartnerType;
