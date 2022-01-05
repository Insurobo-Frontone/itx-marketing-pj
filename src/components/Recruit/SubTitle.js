import React from 'react';
import styled from 'styled-components';

const TextWrap = styled.div``;
const Title = styled.h2``;
const Description = styled.p``;

const SubTitle = (props) => {
  return(
    <TextWrap>
      <Title>{props.title}</Title>
      <Description>{props.desc}</Description>
    </TextWrap>
  )
}

export default SubTitle;
