import React from 'react';
import styled from 'styled-components';

const TextWrap = styled.div`
  padding-top: 9.67%;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'GoyangDeogyang';
  line-height: 2.75rem;
  ::before{
    content: '';
    width: 30px;
    height: 30px;
    border: 5px solid #B8292D;
    border-radius: 50%;
    display: inline-block;
    margin-right: 16px;
    box-sizing: border-box;
  }
`;

const SubTitle = (props) => {
  return(
    <TextWrap>
      <Title>{props.title}</Title>
    </TextWrap>
  );
}

export default SubTitle;
