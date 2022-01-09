import React from 'react'
import styled from "styled-components";
import TitleBox from "../TitleBox";

const Container = styled.section`
  position: relative;
  padding-left: 12.96875%;
`;
const GrayBox = styled.div`
  background-color: #F8F8F8;
> div {
    padding: 7.7% 0 21% 15%;
    > h2 {
    font-family: 'GoyangDeogyang';
    color: #1A1A1A;
    font-size: 2.5rem;
    padding-bottom: 2%;
  }
  p {
    font-size: 1.5rem;
  }
}
  
`;

const TopBox = (props) => {
  return (
    <Container>
      <GrayBox>
        <div>
          <h2>아이티엑스마케팅(주)</h2>
          <p>{props.title}</p>
        </div>
      </GrayBox>
      <TitleBox
        title="조직도"
        left='0'
      />
    </Container>
  )
}

export default TopBox;
