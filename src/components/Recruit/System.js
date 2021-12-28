import React from 'react'
import styled from 'styled-components';
import Title from '../Summary/Title';

const Container = styled.section`

`;
const Procedure = styled.div`

`;
const Program = styled.div`

`;
const Incentive = styled.div`

`;
const CircleWrap = styled.div`

`;

const System = () => {
  return (
    <Container>
      <Procedure>
        <Title en={'Recruitment procedure'} ko={'채용절차'} />
        <CircleWrap>
          <ul>
            <li>서류전형</li>
            <li>실무면접</li>
            <li>임원면접</li>
            <li>최종합격</li>
          </ul>
        </CircleWrap>
      </Procedure>
      <Program>
        <Title en={'A nurturing program'} ko={'육성프로그램'} />

      </Program>
      <Incentive>
        <Title en={'Incentive'} ko={'인센티브 제도'} />
        
      </Incentive>
    </Container>
  )
}

export default System;
