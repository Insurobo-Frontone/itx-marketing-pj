import React from 'react'
import styled from 'styled-components';
import idea from '../../img/sub/idea.svg';
import trust from '../../img/sub/trust.svg';
import passion from '../../img/sub/passion.svg';
import target from '../../img/sub/target.svg';

const Container = styled.section`
  padding: 7% 13.54166666666667% 10%;
`;
const Board = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #FFFFFF;
  background-color: #B8292D;
  padding: 2.6% 0 3.5% 0;
  font-family: 'GoyangDeogyang';

  > p {
    position: relative;
    padding-bottom: 1.7%;
  }
  > p::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: #620406;
    margin-top: 18%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  > h2 {
    font-size: 1.5rem;
    padding-top: 1.7%;
  }
`;
const ItemContainer = styled.div`
  padding: 10% 5.46%;
`;
const ItemList = styled.ul`
  
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > li {
    width: 100%;

  }

  .img-wrap{

  }
  .text-wrap{
    > h3 > strong {
      color: #B8292D;
      font-family: 'GoyangDeogyang';
    }
  } 
`;

function RightPeople() {
  return (
    <Container>
      <Board>
        <p>ITX Marketing</p>
        <h2>인슈어테크를 넘어 핀테크를 선도할 혁신 人</h2>
      </Board>
      <ItemContainer>
        <ItemList>
          <li>
            <div className='img-wrap'>
              <img src={idea} alt="idea"/>
            </div>
            <div className='text-wrap'>
              <h3><strong>I</strong>dea</h3>
              <p>창의적인 <span>아이디어</span>로<br /> 혁신을 선도할 인재</p>
            </div>
          </li>
          <li>
            <div className='img-wrap'>
              <img src={trust} alt="trust"/>
            </div>
            <div className='text-wrap'>
              <h3><strong>T</strong>rust</h3>
              <p>고객을 최우선으로<br /> <span>신뢰</span>를 얻을 수 있는 인재</p>
            </div>
          </li>
          <li>
            <div className='img-wrap'>
              <img src={passion}  alt="passion"/>
            </div>
            <div className='text-wrap'>
              <h3><strong>P</strong>assio<strong>n</strong></h3>
              <p><span>열정</span>을<br /> 무기로 최고의<br /> 전문가가 될 수 있는 인재</p>
            </div>
          </li>
          <li>
            <div className='img-wrap'>
              <img src={target} alt="target"/>
            </div>
            <div className='text-wrap'>
              <h3><strong>T</strong>ar<strong>g</strong>et</h3>
              <p><span>목표의식</span>을 가지고<br /> 결과물을 만들어 내는 인재</p>
            </div>
          </li>
        </ItemList>
      </ItemContainer>
    </Container>
  )
}

export default RightPeople
