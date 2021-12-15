import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.div`
  > h2 {
    white-space: pre;
    line-height: 2.8rem;
    font-size: 2.5rem;
    padding-bottom: 35px;
    color: #1A1A1A;
    font-family: 'GoyangDeogyang';
  }
  > p {
    font-size: 1.5rem;
  }
`;

const Title = (props) => {
  return (
  <TitleContainer>
    <h2>{props.en}</h2>
    <p>{props.ko}</p>
  </TitleContainer>
  )
}

export default Title